package com.jnv.common.util.excel.generator;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.IndexedColorMap;
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * Excel 2007 및 이후의 형식(.xlsx)으로 엑셀 파일을 생성한다.
 */
public class OoxmlExcelFileGenerator extends ExcelFileGenerator {
    @Override
    protected XSSFWorkbook createWorkbook() {
        return new XSSFWorkbook();
    }

    @Override
    protected XSSFColor getOrCreateColor(Workbook workbook, byte[] color) {
        if (!(workbook instanceof XSSFWorkbook)) {
            throw new IllegalArgumentException("The workbook is not a XSSFWorkbook");
        }

        IndexedColorMap indexedColorMap = ((XSSFWorkbook) workbook).getStylesSource().getIndexedColors();
        return new XSSFColor(color, indexedColorMap);
    }
}
