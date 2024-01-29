package com.jnv.common.util.excel;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.poi.ss.usermodel.*;

import java.lang.reflect.InvocationTargetException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

public class ExcelParser<T> {

    private int startRowIndex = 0;
    private int lastRowIndex = -1;
    private final Map<Integer, String> propertyMap = new HashMap<>();
    private final Map<String, Function<Cell, Object>> customParserMap = new HashMap<>();
    private final Class<? extends T> cls;
    private int sheetIndex = 0;

    public ExcelParser(Class<? extends T> targetClass) {
        cls = targetClass;
    }

    public int getStartRowIndex() {
        return startRowIndex;
    }

    public void setStartRowIndex(int index) {
        setRowIndexRange(index, -1);
    }

    public int getLastRowIndex() {
        return lastRowIndex;
    }

    public void setRowIndexRange(int from, int to) {
        if (to >= 0 && from > to)
            throw new IllegalArgumentException(
                    String.format("Invalid index range [%1$d, %2$d], %1$d is greater then %2$d.",
                            from, to));

        startRowIndex = from;
        lastRowIndex = (to < 0) ? -1 : to;
    }

    public String getPropertyName(int colIndex) {
        return propertyMap.get(colIndex);
    }

    public void setPropertyName(int colIndex, String propName) {
        if (!isValidIdentifier(propName))
            throw new IllegalArgumentException(String.format("\"%s\" is not a valid java identifier", propName));

        propertyMap.put(colIndex, propName);
    }

    public void removeProperyName(int colIndex) {
        propertyMap.remove(colIndex);
    }

    public void removePropertyName(String name) {
        List<Integer> keys = new ArrayList<>();
        for (Map.Entry<Integer, String> entry : propertyMap.entrySet()) {
            if (Objects.equals(entry.getValue(), name))
                keys.add(entry.getKey());
        }

        for (Integer key : keys) {
            propertyMap.remove(key);
        }
    }

    public void setSheetIndex(int index) {
        sheetIndex = index;
    }

    public int getSheetIndex() {
        return sheetIndex;
    }

    public Function<Cell, Object> getCustomCellParser(String propName) {
        return customParserMap.get(propName);
    }

    public void setCustomCellParser(String propName, Function<Cell, Object> function) {
        customParserMap.put(propName, function);
    }

    public Iterable<T> parse(Workbook workbook) {
        return new ExcelVOIterable(workbook);
    }

    public Stream<T> parseAsStream(Workbook workbook) {
        return StreamSupport.stream(new ExcelVOIterable(workbook).spliterator(), false);
    }

    private static boolean isValidIdentifier(String name) {
        if (!Character.isJavaIdentifierStart(name.charAt(0)))
            return false;

        for (int i = 1; i < name.length(); i++) {
            if (!Character.isJavaIdentifierPart(name.charAt(i)))
                return false;
        }

        return true;
    }

    private class ExcelVOIterable implements Iterable<T> {

        private final ExcelVOIterator iterator;

        public ExcelVOIterable(Workbook workbook) {
            iterator = new ExcelVOIterator(workbook);
        }

        @Override
        public Iterator<T> iterator() {
            return iterator;
        }

    }

    private class ExcelVOIterator implements Iterator<T> {

        private final DataFormatter dataFormatter = new DataFormatter();
        private final DateFormat format = new SimpleDateFormat("yyyy-MM-dd");

        private final Workbook workbook;
        private final Sheet sheet;
        private int currentRow = startRowIndex;

        public ExcelVOIterator(Workbook workbook) {
            this.workbook = workbook;
            sheet = workbook.getSheetAt(sheetIndex);
        }

        /**
         * {@inheritDoc}
         */
        @Override
        public boolean hasNext() {
            return currentRow <= sheet.getLastRowNum() && (lastRowIndex < 0 || currentRow <= lastRowIndex);
        }

        /**
         * {@inheritDoc}
         */
        @Override
        public T next() {
            if (!hasNext())
                throw new NoSuchElementException("End of data reached.");

            try {
                T obj = cls.getConstructor().newInstance();
                Row row = sheet.getRow(currentRow);
                for (Cell cell : row) {
                    int cellIndex = cell.getColumnIndex();
                    if (propertyMap.containsKey(cellIndex) && propertyMap.get(cellIndex) != null) {
                        String propName = propertyMap.get(cellIndex);
                        BeanUtils.setProperty(obj, propName, getCellValue(propName, cell));
                    }
                }

                do {
                    currentRow++;
                } while (hasNext() && isRowEmpty(currentRow));
                return obj;
            } catch (InstantiationException | IllegalAccessException | IllegalArgumentException |
                     InvocationTargetException | NoSuchMethodException | SecurityException e) {
                throw new ObjectCreationException(e);
            }
        }

        private Object getCellValue(String propName, Cell cell) {
            Function<Cell, Object> parser = customParserMap.get(propName);
            if (parser != null) {
                return parser.apply(cell);
            }

            CellType cellType = cell.getCellType();
            switch (cellType) {
                case BOOLEAN:
                    return cell.getBooleanCellValue() ? "Y" : "N";
                case FORMULA:
                    return getFormulaCellValue(propName, cell);
                case STRING:
                    return cell.getStringCellValue();
                case NUMERIC:
                    if (DateUtil.isCellDateFormatted(cell))
                        return parseDateFormat(cell);
                    else
                        return dataFormatter.formatCellValue(cell);
                case BLANK:
                default:
                    return null;
            }
        }

        private Object getFormulaCellValue(String propName, Cell cell) {
            Function<Cell, Object> parser = customParserMap.get(propName);
            if (parser != null) {
                return parser.apply(cell);
            }

            CellType formulaType = cell.getCachedFormulaResultType();
            switch (formulaType) {
                case NUMERIC:
                    if (DateUtil.isCellDateFormatted(cell))
                        return parseDateFormat(cell);
                    else
                        return dataFormatter.formatCellValue(cell);
                case STRING:
                    return cell.getStringCellValue();
                case BOOLEAN:
                    return cell.getBooleanCellValue() ? "Y" : "N";
                default:
                    return null;
            }
        }

        private boolean isRowEmpty(int rowIndex) {
            Row row = sheet.getRow(rowIndex);
            if (row == null)
                return true;

            int cellCount = row.getLastCellNum();
            if (cellCount == 0)
                return true;

            for (int i = 0; i < cellCount; i++) {
                Cell cell = row.getCell(i);
                if (cell != null && cell.getCellType() != CellType.BLANK)
                    return false;
            }

            return true;
        }

        private String parseDateFormat(Cell cell) {
            if (DateUtil.isInternalDateFormat(cell.getCellStyle().getDataFormat())) {
                return format.format(cell.getDateCellValue());
            } else {
                return dataFormatter.formatCellValue(cell);
            }
        }
    }
}
