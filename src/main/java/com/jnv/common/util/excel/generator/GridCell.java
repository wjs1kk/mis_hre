package com.jnv.common.util.excel.generator;

public class GridCell {

    private int rowSpan = 1;
    private int colSpan = 1;

    private String text;
    private String property;
    private DataType type;
    private String format;

    private GridCell() {
    }

    /**
     * 단순 텍스트를 표시하는 셀을 정의한다
     * @param text 표시할 텍스트
     */
    public static GridCell text(String text) {
        GridCell cell = new GridCell();
        cell.text = text;
        return cell;
    }

    /**
     * 데이터 셋에서 값을 가져와 표시하는 셀을 정의한다.
     * @param property
     * @return
     */
    public static GridCell bind(String property) {
        GridCell cell = new GridCell();
        cell.property = property;
        return cell;
    }

    /**
     * 이 셀이 차지하는 행 개수
     */
    public int getRowSpan() {
        return rowSpan;
    }

    /**
     * 이 셀이 차지하는 행 개수를 설정한다.
     */
    public GridCell setRowSpan(int rowSpan) {
        this.rowSpan = rowSpan;
        return this;
    }

    /**
     * 이 셀이 차지하는 열 개수
     */
    public int getColSpan() {
        return colSpan;
    }

    /**
     * 이 셀이 차지하는 열 개수를 설정한다.
     */
    public GridCell setColSpan(int colSpan) {
        this.colSpan = colSpan;
        return this;
    }

    /**
     * 이 셀에 입력된 텍스트
     */
    public String getText() {
        return text;
    }

    /**
     * 이 셀의 내용으로 설정할 속성 이름
     */
    public String getProperty() {
        return property;
    }

    /**
     * 이 셀이 데이터 셋에서 값을 가져올 때 가정할 타입 유형
     */
    public DataType getType() {
        return type;
    }

    /**
     * 이 셀이 데이터 셋에서 값을 가져올 때 가정할 타입 유형을 설정한다.
     */
    public GridCell setType(DataType type) {
        this.type = type;
        return this;
    }

    /**
     * 이 셀이 데이터 셋에서 가져온 값을 표시할 때 사용할 형식 문자열
     */
    public String getFormat() {
        return format;
    }

    /**
     * 이 셀이 데이터 셋에서 가져온 값을 표시할 때 사용할 형식 문자열을 설정한다.
     */
    public GridCell setFormat(String format) {
        this.format = format;
        return this;
    }
}
