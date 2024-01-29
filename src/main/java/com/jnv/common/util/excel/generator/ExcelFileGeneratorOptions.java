package com.jnv.common.util.excel.generator;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class ExcelFileGeneratorOptions {

    private final List<GridSheet> sheets = new ArrayList<>();

    /**
     * 시트 목록
     */
    public List<GridSheet> getSheets() {
        return new ArrayList<>(sheets);
    }

    /**
     * 시트를 추가한다.
     * @param sheet 추가할 시트 정보
     */
    public ExcelFileGeneratorOptions addSheet(GridSheet sheet) {
        sheets.add(sheet);
        return this;
    }
}
