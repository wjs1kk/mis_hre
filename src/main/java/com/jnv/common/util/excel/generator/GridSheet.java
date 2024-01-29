package com.jnv.common.util.excel.generator;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class GridSheet {

    private final String name;
    private String title;
    private float[] columnWidths;

    private final List<GridRow> header = new ArrayList<>();
    private final List<GridRow> body = new ArrayList<>();
    private final List<GridRow> summary = new ArrayList<>();

    public GridSheet(String name) {
        this.name = name;
    }

    /**
     * 시트 이름을 가져온다.
     */
    public String getName() {
        return name;
    }

    /**
     * 시트 상단에 추가할 제목
     */
    public String getTitle() {
        return title;
    }

    /**
     * 시트 상단에 추가할 제목을 설정한다. 빈 문자열이나 {@code null}로 설정하면 제목이 추가되지 않는다.
     */
    public GridSheet setTitle(String title) {
        this.title = title;
        return this;
    }

    /**
     * 시트 내 열 너비 목록을 가져온다.
     */
    public float[] getColumnWidths() {
        return columnWidths;
    }

    /**
     * 시트 내 열 너비 목록을 설정한다.
     * @param columnWidths 글자 수로 나타낸 열의 너비 목록. 한 글자의 기준은 폭이 가장 넓은 숫자이다.
     */
    public GridSheet setColumnWidths(float... columnWidths) {
        this.columnWidths = columnWidths;
        return this;
    }

    /**
     * 머릿글 행 목록
     */
    public List<GridRow> getHeader() {
        return new ArrayList<>(header);
    }

    /**
     * 머릿글 행을 추가한다.
     * @param row 추가할 머릿글 행의 정보
     */
    public GridSheet addHeaderRow(GridRow row) {
        header.add(row);
        return this;
    }

    /**
     * 데이터 행 목록
     */
    public List<GridRow> getBody() {
        return new ArrayList<>(body);
    }

    /**
     * 데이터 행을 추가한다.
     * @param row 추가할 데이터 행의 정보
     */
    public GridSheet addBodyRow(GridRow row) {
        body.add(row);
        return this;
    }

    /**
     * 요약 행 목록
     */
    public List<GridRow> getSummary() {
        return new ArrayList<>(summary);
    }

    /**
     * 요약 행을 추가한다.
     * @param row 추가할 요약 행의 정보
     */
    public GridSheet addSummaryRow(GridRow row) {
        summary.add(row);
        return this;
    }
}
