package com.jnv.common.util.excel.generator;

import org.apache.poi.hssf.usermodel.HSSFPalette;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Workbook;

/**
 * Excel 2023 형식(.xls)으로 엑셀 파일을 생성한다.
 */
public class Excel2003FormatExcelFileGenerator extends ExcelFileGenerator {
    @Override
    protected HSSFWorkbook createWorkbook() {
        return new HSSFWorkbook();
    }


    @Override
    protected HSSFColor getOrCreateColor(Workbook workbook, byte[] color) {
        if (!(workbook instanceof HSSFWorkbook)) {
            throw new IllegalArgumentException("The workbook is not a HSSFWorkbook");
        }

        HSSFPalette palette = ((HSSFWorkbook) workbook).getCustomPalette();

        HSSFColor hssfColor = palette.findColor(color[0], color[1], color[2]);
        if (hssfColor == null) {
            hssfColor = palette.addColor(color[0], color[1], color[2]);
        }

        return hssfColor;
    }
}
