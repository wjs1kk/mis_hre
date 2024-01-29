package com.jnv.common.util.excel.generator;

public class GridRow {

    public static final float ROW_HEIGHT_DEFAULT = -1f;

    private float height = ROW_HEIGHT_DEFAULT;
    private GridCell[] cells;

    /**
     * 행의 높이(pt)
     */
    public float getHeight() {
        return height;
    }

    /**
     * 행의 높이를 포인트 단위로 설정한다.
     */
    public GridRow setHeight(float height) {
        this.height = height;
        return this;
    }

    /**
     * 이 행의 셀 목록을 가져온다.
     */
    public GridCell[] getCells() {
        return cells;
    }

    /**
     * 이 행의 셀 목록을 설정한다.
     */
    public GridRow cells(GridCell... cells) {
        this.cells = cells;
        return this;
    }
}
