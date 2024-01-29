package com.jnv.common.util.excel.generator;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.WorkbookUtil;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.InvocationTargetException;
import java.text.NumberFormat;
import java.text.ParseException;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 엑셀 Workbook을 생성한다.
 */
public abstract class ExcelFileGenerator {

    private static final Logger LOG = LoggerFactory.getLogger(ExcelFileGenerator.class);

    protected abstract Workbook createWorkbook();

    protected abstract Color getOrCreateColor(Workbook workbook, byte[] color);

    /**
     * 지정한 형식의 엑셀 파일을 생성할 수 있는 생성기 객체를 생성한다.
     * @param type 생성할 엑셀 파일의 종류. 현재는 "xls", "xlsx"만 지원한다.
     */
    public static ExcelFileGenerator getInstance(String type) {
        if (StringUtils.equalsIgnoreCase(type, "xls")) {
            return new Excel2003FormatExcelFileGenerator();
        } else if (StringUtils.equalsIgnoreCase(type, "xlsx")) {
            return new OoxmlExcelFileGenerator();
        } else {
            throw new IllegalArgumentException("Only 'xls' and 'xlsx' formats are supported.");
        }
    }

    /**
     * 주어진 옵션과 데이터를 사용하여 엑셀 문서를 생성한다.
     * @param options 엑셀 파일 생성 옵션
     * @param sheetData 각 시트별 데이터 셋
     */
    public Workbook generate(ExcelFileGeneratorOptions options, Map<String, List<?>> sheetData) {
        LOG.debug("Workbook creation started.");

        Workbook workbook = createWorkbook();
        CellStyle baseCellStyle = createBaseCellStyle(workbook);
        CellStyle titleCellStyle = createTitleCellStyle(workbook, baseCellStyle);
        CellStyle headerCellStyle = createHeaderCellStyle(workbook, baseCellStyle);
        CellStyle summaryCellStyle = createSummaryCellStyle(workbook, baseCellStyle);

        List<GridSheet> sheets = options.getSheets();

        for (GridSheet gridSheet : sheets) {
            Sheet sheet = createSheet(workbook, gridSheet.getName());
            writeDataToSheet(sheet, gridSheet, sheetData.get(gridSheet.getName()), baseCellStyle, titleCellStyle, headerCellStyle, summaryCellStyle);
        }

        LOG.debug("Workbook creation finished.");

        return workbook;
    }

    /**
     * 빈 시트를 생성한다.
     * @param workbook 엑셀 문서
     * @param name 시트 이름
     */
    private Sheet createSheet(Workbook workbook, String name) {
        return workbook.createSheet(WorkbookUtil.createSafeSheetName(name));
    }

    /**
     * 엑셀 시트에 데이터를 기록한다.
     *
     * @param sheet          대상 시트
     * @param option         기록 옵션
     * @param sheetData      기록할 조회 결과 데이터
     * @param baseStyle      기본 셀 스타일
     * @param titleCellStyle
     * @param headerStyle    헤더 셀 스타일
     * @param summaryStyle   요약 셀 스타일
     */
    private void writeDataToSheet(Sheet sheet, GridSheet option, List<?> sheetData, CellStyle baseStyle,
            CellStyle titleCellStyle, CellStyle headerStyle, CellStyle summaryStyle) {
        LOG.debug("Sheet {} creation started.", option.getName());

        List<GridRow> headerRows = option.getHeader();
        List<GridRow> bodyRows = option.getBody();
        List<GridRow> summaryRows = option.getSummary();

        float[] columnWidths = option.getColumnWidths();
        for (int i = 0; i < columnWidths.length; i++) {
            float width = columnWidths[i];
            sheet.setColumnWidth(i, (int) (width * 256));
        }

        int rowOffset = 0;

        if (StringUtils.isNotEmpty(option.getTitle())) {
            MeasureResult measure = measureSpan(headerRows);

            Row titleRow = sheet.createRow(rowOffset);
            Cell titleCell = titleRow.createCell(0);
            titleCell.setCellValue(option.getTitle());
            sheet.addMergedRegion(new CellRangeAddress(rowOffset, rowOffset, 0, measure.totalColumns - 1));
            applyStyleToRange(sheet, titleCellStyle, rowOffset, 0, rowOffset + 1, measure.totalColumns);

            rowOffset++;
        }

        rowOffset = writeHeaderRows(sheet, rowOffset, headerRows, headerStyle);

        rowOffset = writeBodyRows(sheet, rowOffset, bodyRows, sheetData, baseStyle);

        rowOffset = writeSummaryRows(sheet, rowOffset, summaryRows, summaryStyle);

        LOG.debug("Sheet {} creation finished. row count: {}", option.getName(), rowOffset);
    }

    /**
     * 엑셀 시트에 머릿말 행을 추가한다.
     *
     * @param sheet       엑셀 시트
     * @param rowOffset
     * @param headerRows  머릿말 행 옵션
     * @param headerStyle 머릿말 행 스타일
     *
     * @return 행을 추가한 후 시트의 마지막 행 다음 행의 인덱스
     */
    private int writeHeaderRows(Sheet sheet, int rowOffset, List<GridRow> headerRows, CellStyle headerStyle) {
        int i = rowOffset;
        MeasureResult measure = measureSpan(headerRows);

        List<List<CellMeasureInfo>> cellMeasureInfo = measure.cellMeasureInfo;
        for (int j = 0; j < cellMeasureInfo.size(); j++) {
            List<CellMeasureInfo> cellList = cellMeasureInfo.get(j);
            GridRow gridRow = headerRows.get(j);
            Row row = createRow(sheet, i, gridRow);

            for (CellMeasureInfo cellInfo : cellList) {
                Cell cell = createCell(row, cellInfo);
                writeCellValue(cell, null, cellInfo.gridCell);
            }

            i++;
        }

        applyStyleToRange(sheet, headerStyle, rowOffset, 0, i, measure.totalColumns);

        // 헤더 마지막 행의 하단 테두리는 굵게 처리
        CellStyle headerLastRowStyle = sheet.getWorkbook().createCellStyle();
        headerLastRowStyle.cloneStyleFrom(headerStyle);
        headerLastRowStyle.setBorderBottom(BorderStyle.MEDIUM);
        applyStyleToRange(sheet, headerLastRowStyle, i - 1, 0, i, measure.totalColumns);

        return i;
    }

    /**
     * 엑셀 시트에 데이터 행을 추가한다.
     * @param sheet 엑셀 시트
     * @param rowOffset 데이터 행을 추가할 첫 위치
     * @param bodyRows 데이터 행 옵션
     * @param data 조회 결과 데이터
     * @param cellStyle 셀 스타일
     * @return 행을 추가한 후 시트의 마지막 행 다음 행의 인덱스
     */
    private int writeBodyRows(Sheet sheet, int rowOffset, List<GridRow> bodyRows, List<?> data, CellStyle cellStyle) {
        int i = rowOffset;
        MeasureResult measure = measureSpan(bodyRows);
        List<List<CellMeasureInfo>> cellMeasureInfo = measure.cellMeasureInfo;

        for (Object item : data) {
            int j = 0;
            for (int k = 0; k < cellMeasureInfo.size(); k++) {
                List<CellMeasureInfo> cellList = cellMeasureInfo.get(k);
                GridRow gridRow = bodyRows.get(k);
                Row row = createRow(sheet, i + j, gridRow);

                for (CellMeasureInfo cellInfo : cellList) {
                    Cell cell = createCell(row, cellInfo);
                    writeCellValue(cell, item, cellInfo.gridCell);
                }
                j++;
            }

            i += j;
        }

        applyStyleToRange(sheet, cellStyle, rowOffset, 0, i, measure.totalColumns);

        return i;
    }

    /**
     * 엑셀 시트에 요약 행을 추가한다.
     * @param sheet 엑셀 시트
     * @param rowOffset 요약 행을 추가할 첫 위치
     * @param summaryRows 요약 행 옵션
     * @param summaryStyle 셀 스타일
     * @return 행을 추가한 후 시트의 마지막 행 다음 행의 인덱스
     */
    private int writeSummaryRows(Sheet sheet, int rowOffset, List<GridRow> summaryRows, CellStyle summaryStyle) {
        int i = rowOffset;
        MeasureResult measure = measureSpan(summaryRows);

        List<List<CellMeasureInfo>> cellMeasureInfo = measure.cellMeasureInfo;
        for (int j = 0; j < cellMeasureInfo.size(); j++) {
            List<CellMeasureInfo> cellList = cellMeasureInfo.get(j);
            GridRow gridRow = summaryRows.get(j);
            Row row = createRow(sheet, i, gridRow);

            for (CellMeasureInfo cellInfo : cellList) {
                Cell cell = createCell(row, cellInfo);
                writeCellValue(cell, null, cellInfo.gridCell);
            }

            i++;
        }
        
        CellStyle summaryFirstRowStyle = sheet.getWorkbook().createCellStyle();
        summaryFirstRowStyle.cloneStyleFrom(summaryStyle);
        summaryFirstRowStyle.setBorderTop(BorderStyle.MEDIUM);
        applyStyleToRange(sheet, summaryStyle, rowOffset, 0, i, measure.totalColumns);
        applyStyleToRange(sheet, summaryFirstRowStyle, rowOffset, 0, rowOffset + 1, measure.totalColumns);

        return i;
    }

    /**
     * 시트에 빈 행을 추가한다.
     * @param sheet 엑셀 시트
     * @param position 새 행을 추가할 위치
     * @param options 행 옵션
     */
    private static Row createRow(Sheet sheet, int position, GridRow options) {
        Row row = sheet.createRow(position);
        row.setHeightInPoints(options.getHeight());

        return row;
    }

    /**
     * 행에 셀을 추가한다.
     * @param row 새 셀을 추가할 행
     * @param cellMeasureInfo 셀의 크기 및 위치 계산 결과
     */
    private static Cell createCell(Row row, CellMeasureInfo cellMeasureInfo) {
        Cell cell = row.getCell(cellMeasureInfo.col1, Row.MissingCellPolicy.CREATE_NULL_AS_BLANK);
        setMergedRegion(row.getSheet(), row.getRowNum(), cellMeasureInfo);
        return cell;
    }

    /**
     * 지정한 셀 범위에 스타일을 적용한다.
     * @param sheet 스타일을 적용할 시트
     * @param cellStyle 적용할 스타일
     * @param row1 범위의 시작 행
     * @param col1 범위의 시작 열
     * @param row2 범위의 끝 행(미포함)
     * @param col2 범위의 끝 행(미포함)
     */
    private static void applyStyleToRange(Sheet sheet, CellStyle cellStyle, int row1, int col1, int row2, int col2) {
        for (int j = row1; j < row2; j++) {
            Row row = sheet.getRow(j);
            for (int k = col1; k < col2; k++) {
                Cell cell = row.getCell(k, Row.MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.setCellStyle(cellStyle);
            }
        }
    }

    /**
     * 셀을 병합 처리한다.
     * @param sheet 셀을 병합할 시트
     * @param rowOffset 병합 범위 시작 행의 위치
     * @param cellInfo 셀의 위치/크기 정보
     */
    private static void setMergedRegion(Sheet sheet, int rowOffset, CellMeasureInfo cellInfo) {
        if (cellInfo.row1 != cellInfo.row2 || cellInfo.col1 != cellInfo.col2) {
            sheet.addMergedRegion(new CellRangeAddress(rowOffset + cellInfo.row1, rowOffset + cellInfo.row2, cellInfo.col1, cellInfo.col2));
        }
    }

    /**
     * 셀에 데이터 셋으로부터 가져온 값을 입력한다.
     * @param cell 값을 입력할 셀
     * @param rowData 조회 결과 데이터 셋
     * @param option 셀 옵션
     */
    private static void writeCellValue(Cell cell, Object rowData, GridCell option) {
        String value = null;
        DataType type = Optional.ofNullable(option.getType()).orElse(DataType.TEXT);
        String formatString = option.getFormat();

        if (StringUtils.isNotEmpty(option.getProperty())) {
            if (rowData == null) {
                return;
            }

            try {
                value = BeanUtils.getProperty(rowData, option.getProperty());
            } catch (IllegalAccessException | InvocationTargetException e) {
                throw new IllegalStateException(String.format("Cannot write value of property %s", option.getProperty()), e);
            } catch (NoSuchMethodException e) {
                LOG.warn("Property {} not found", option.getProperty());
            }
        } else {
            value = option.getText();
        }

        if (value == null) {
            return;
        }

        try {
            switch (type) {
                case DATETIME:
                    Date dateValue = parseDateString(value);
                    cell.setCellValue(dateValue);
                    break;
                case NUMBER:
                    Number number = NumberFormat.getNumberInstance()
                            .parse(value);
                    cell.setCellValue(number.doubleValue());
                    break;
                default:
                    cell.setCellValue(value);
                    break;
            }
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        if (StringUtils.isNotEmpty(formatString)) {
            short formatIndex = cell.getSheet().getWorkbook().createDataFormat().getFormat(formatString);
            cell.getCellStyle().setDataFormat(formatIndex);
        }
    }

    /**
     * 날짜 문자열을 {@link Date}로 변환한다.
     * @param input
     * @return
     */
    private static Date parseDateString(String input) {
        DateTimeFormatter[] formats = {
                DateTimeFormatter.ISO_LOCAL_DATE_TIME,
                DateTimeFormatter.ofPattern("uuuu-MM-dd[ HH:mm[:ss[.SSS]]]"),
                DateTimeFormatter.ofPattern("uuuuMMdd"),
                DateTimeFormatter.ofPattern("uuuuMMddHHmm"),
                DateTimeFormatter.ofPattern("uuuuMMddHHmmss"),
                DateTimeFormatter.ofPattern("uuuuMMddHHmmssSSS")
        };

        for (DateTimeFormatter format : formats) {
            try {
                return Date.from(Instant.from(format.parse(input)));
            } catch (DateTimeParseException e) {
                // 다음 포매터를 시도한다.
            }
        }

        throw new IllegalArgumentException(String.format("Invalid date value: %s", input));
    }

    /**
     * 기본 셀 스타일을 생성한다.
     * @param workbook 엑셀 문서
     */
    private CellStyle createBaseCellStyle(Workbook workbook) {
        CellStyle baseCellStyle = workbook.createCellStyle();
        baseCellStyle.setWrapText(true);
        baseCellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        baseCellStyle.setBorderLeft(BorderStyle.THIN);
        baseCellStyle.setBorderTop(BorderStyle.THIN);
        baseCellStyle.setBorderRight(BorderStyle.THIN);
        baseCellStyle.setBorderBottom(BorderStyle.THIN);

        Color color = getOrCreateColor(workbook, parseColorString("#000000"));

        if (workbook instanceof XSSFWorkbook) {
            XSSFColor xssfColor = (XSSFColor) color;
            XSSFCellStyle xssfCellStyle = (XSSFCellStyle) baseCellStyle;
            xssfCellStyle.setLeftBorderColor(xssfColor);
            xssfCellStyle.setTopBorderColor(xssfColor);
            xssfCellStyle.setRightBorderColor(xssfColor);
            xssfCellStyle.setBottomBorderColor(xssfColor);
        } else {
            HSSFColor hssfColor = (HSSFColor) color;
            baseCellStyle.setLeftBorderColor(hssfColor.getIndex());
            baseCellStyle.setTopBorderColor(hssfColor.getIndex());
            baseCellStyle.setRightBorderColor(hssfColor.getIndex());
            baseCellStyle.setBottomBorderColor(hssfColor.getIndex());
        }

        return baseCellStyle;
    }

    private CellStyle createTitleCellStyle(Workbook workbook, CellStyle baseCellStyle) {
        Font font = workbook.createFont();
        font.setBold(true);
        font.setFontHeightInPoints((short) 16);

        CellStyle cellStyle = workbook.createCellStyle();
        cellStyle.cloneStyleFrom(baseCellStyle);
        cellStyle.setFont(font);
        cellStyle.setAlignment(HorizontalAlignment.CENTER);
        cellStyle.setBorderBottom(BorderStyle.MEDIUM);

        return cellStyle;
    }

    /**
     * 기본 머릿글 행 스타일을 생성한다.
     * @param workbook 엑셀 문서
     * @param baseCellStyle 적용할 기본 셀 스타일
     */
    private CellStyle createHeaderCellStyle(Workbook workbook, CellStyle baseCellStyle) {
        CellStyle headerCellStyle = workbook.createCellStyle();
        Color headerCellColor = getOrCreateColor(workbook, parseColorString("#dddddd"));
        headerCellStyle.cloneStyleFrom(baseCellStyle);
        headerCellStyle.setAlignment(HorizontalAlignment.CENTER);
        headerCellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        if (headerCellStyle instanceof HSSFCellStyle)
            headerCellStyle.setFillForegroundColor(((HSSFColor) headerCellColor).getIndex());
        else
            ((XSSFCellStyle) headerCellStyle).setFillForegroundColor((XSSFColor) headerCellColor);

        Font headerFont = workbook.createFont();
        headerFont.setBold(true);
        headerCellStyle.setFont(headerFont);
        return headerCellStyle;
    }

    /**
     * 기본 요약 행 스타일을 생성한다.
     * @param workbook 엑셀 문서
     * @param baseCellStyle 적용할 기본 셀 스타일
     */
    private static CellStyle createSummaryCellStyle(Workbook workbook, CellStyle baseCellStyle) {
        CellStyle summaryStyle = workbook.createCellStyle();
        summaryStyle.cloneStyleFrom(baseCellStyle);

        Font summaryFont = workbook.createFont();
        summaryFont.setBold(true);
        summaryStyle.setFont(summaryFont);
        return summaryStyle;
    }

    private static final Pattern COLOR_PATTERN = Pattern.compile("#([\\da-f]{3}|[\\da-f]{6})", Pattern.CASE_INSENSITIVE);

    /**
     * Hex 형태의 색상값을 파싱한다.
     * @param hexString Hex 형태의 색상값
     */
    private static byte[] parseColorString(String hexString) {
        if (hexString == null) {
            return null;
        }

        String trimmed = hexString.trim();
        Matcher matcher = COLOR_PATTERN.matcher(trimmed);
        if (!matcher.matches()) {
            throw new IllegalArgumentException(String.format("%s is not a valid hex color string.", trimmed));
        }

        String hex = matcher.group(1);
        int value = Integer.parseInt(hex, 16);
        byte[] bytes = new byte[3];

        if (hex.length() == 3) {
            bytes[0] = (byte) (((value >> 8) & 0xF) * 0x11);
            bytes[1] = (byte) (((value >> 4) & 0xF) * 0x11);
            bytes[2] = (byte) ((value & 0xF) * 0x11);
        } else {
            bytes[0] = (byte) ((value >> 16) & 0xFF);
            bytes[1] = (byte) ((value >> 8) & 0xFF);
            bytes[2] = (byte) (value & 0xFF);
        }

        return bytes;
    }

    /**
     * 각 영역에 속한 셀들의 실제 위치와 크기를 계산한다.
     * @param rows 계산할 영역의 행 목록
     */
    private MeasureResult measureSpan(List<GridRow> rows) {
        List<List<Object>> calcList = new ArrayList<>();
        List<List<CellMeasureInfo>> result = new ArrayList<>();

        int y, x;
        int totalColumn = 0;

        // 우선 행의 개수만큼 리스트를 만든다.
        for (GridRow row : rows) {
            calcList.add(new ArrayList<>());
            result.add(new ArrayList<>());
        }

        for (int i = 0; i < rows.size(); i++) {
            GridRow row = rows.get(i);
            GridCell[] cells = row.getCells();
            List<Object> rowCalcList = calcList.get(i);
            List<CellMeasureInfo> rowResult = result.get(i);

            x = 0;
            y = i;

            for (GridCell cell : cells) {
                // 다른 셀이 차지하지 않은 행이 나올 때까지 열 위치를 이동한다.
                while (rowCalcList.size() > x && rowCalcList.get(x) != null) {
                    x++;
                }

                // 우선 셀 설정으로 지정된 행과 열 개수를 가져온다.
                int rowspan = Math.max(cell.getRowSpan(), 1);
                int colspan = Math.max(cell.getColSpan(), 1);

                // 실제로 셀에서 차지할 수 있는 행과 열 개수를 구한다.
                Rect rect = measureCellSpan(calcList, y, x, rowspan, colspan);
                x = rect.col2 + 1;
                rowResult.add(new CellMeasureInfo(cell, rect.row1, rect.col1, rect.row2, rect.col2));

                // 현재까지의 열 개수가 지금까지 계산한 전체 열 개수보다 크면
                // 현재까지의 열 개수로 전체 열 개수를 갱신한다.
                if ((rect.col2 + 1) > totalColumn)
                    totalColumn = rect.col2 + 1;
            }
        }

        return new MeasureResult(totalColumn, result);
    }

    /**
     * 주어진 셀 위치와 크기에 대하여 실제 영역을 계산한다.
     * @param calcList
     * @param row
     * @param col
     * @param rowSpan
     * @param colSpan
     * @return
     */
    private Rect measureCellSpan(List<List<Object>> calcList, int row, int col, int rowSpan, int colSpan) {
        int maxRow = Math.min(row + rowSpan, calcList.size());
        int maxCol = col + colSpan;

        int actualRowSpan = 0;
        int actualColSpan;

        for (int i = row; i < maxRow; i++) {
            int n = 0;
            List<Object> rowCalcList = calcList.get(i);

            for (int j = col; j < maxCol; j++) {
                // 현재 위치에서 기준으로, 다른 셀들이 차지하지 않은 연속된 공간 내에서
                // 얼마만큼의 공간을 가질 수 있는지 확인한다.
                if (rowCalcList.size() >= (j + 1) && rowCalcList.get(j) != null) {
                    maxCol = j;
                    break;
                }
                n++;
            }

            // 현재 행에서 한 칸 이상 차지할 수 있는 경우 열 크기 1 증가
            if (n > 0)
                actualRowSpan++;
            else
                break;
        }
        actualColSpan = maxCol - col;

        Rect rect = new Rect(row, col, row + actualRowSpan - 1, col + actualColSpan - 1);
        // 계산 결과를 기준으로 이 셀이 차지하는 영역을 표시한다.
        fillSpan(calcList, rect);
        return rect;
    }

    private void fillSpan(List<List<Object>> calcList, Rect rect) {
        for (int i = rect.row1; i <= rect.row2; i++) {
            List<Object> rowCalcList = calcList.get(i);
            while (rowCalcList.size() < rect.col2 + 1) {
                rowCalcList.add(null);
            }

            for (int j = rect.col1; j <= rect.col2; j++) {
                rowCalcList.set(j, Boolean.TRUE);
            }
        }
    }

    /**
     * 전체 열 수와 각 셀들의 위치 정보를 계산한 결과를 담고 있는 클래스
     */
    private static class MeasureResult {
        private final int totalColumns;
        private final List<List<CellMeasureInfo>> cellMeasureInfo;

        public MeasureResult(int totalColumns, List<List<CellMeasureInfo>> cellMeasureInfo) {
            this.totalColumns = totalColumns;
            this.cellMeasureInfo = cellMeasureInfo;
        }
    }

    /**
     * 각 셀의 위치 정보와 크기를 담고 있는 클래스
     */
    private static class CellMeasureInfo {
        private final GridCell gridCell;
        private final int row1;
        private final int col1;
        private final int row2;
        private final int col2;

        public CellMeasureInfo(GridCell gridCell, int row1, int col1, int row2, int col2) {
            this.gridCell = gridCell;
            this.row1 = row1;
            this.col1 = col1;
            this.row2 = row2;
            this.col2 = col2;
        }
    }

    private static class Rect {
        private final int row1;
        private final int col1;
        private final int row2;
        private final int col2;

        public Rect(int row1, int col1, int row2, int col2) {
            this.row1 = row1;
            this.col1 = col1;
            this.row2 = row2;
            this.col2 = col2;
        }
    }
}
