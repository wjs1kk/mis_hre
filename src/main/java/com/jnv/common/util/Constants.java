package com.jnv.common.util;

public final class Constants {

    /**
     * 결과를 JSON으로 화면으로 하기 위한 ResultView 이름
     */
    public static final String RESULT_VIEW = "ResultView";

    /**
     * 그리드 행 타입: 추가
     */
    public static final String ROW_TYPE_INSERTED = "inserted";
    /**
     * 그리드 행 타입: 수정
     */
    public static final String ROW_TYPE_UPDATED = "updated";
    /**
     * 그리드 행 타입: 삭제
     */
    public static final String ROW_TYPE_DELETED = "deleted";
    /**
     * 파라미터명: paramMap
     */
    public static final String PARAM_MAP = "paramMap";
    /**
     * 파라미터명: saveType
     */
    public static final String PARAM_SAVE_TYPE = "saveType";
    /**
     * 파라미터명: rowType
     */
    public static final String PARAM_ROW_TYPE = "rowType";

    /**
     * 결과 JSON 필드명: data
     */
    public static final String FIELD_DATA = "data";
    /**
     * 결과 JSOM 필드명: options
     */
    public static final String FIELD_OPTIONS = "options";

    /**
     * 파일 업로드 타입: vault
     */
    public static final String UPLOAD_TYPE_VAULT = "VAULT";
    /**
     * 파일 업로드 타입: 다음 에디터 이미지 첨부
     */
    public static final String UPLOAD_TYPE_EDITOR = "EDITOR";

    /**
     * Map 객체의 키: rowType
     */
    public static final String KEY_ROW_TYPE = "rowType";

    /**
     * 파라미터 명: menuId
     */
    public static final String FIELD_MENU_ID = "menuId";

    /**
     * 파라미터 명: bbsId
     */
    public static final String FIELD_BBS_ID = "bbsId";

    /**
     * 파라미터 명: progId
     */
    public static final String FIELD_PROG_ID = "progId";

    /**
     * 파라미터 명: bbsTypeCd
     */
    public static final String FIELD_BBS_TYPE_CD = "bbsTypeCd";

    /**
     * 파라미터 명: roleCode
     */
    public static final String FIELD_ROLE_CD = "roleCode";

    /**
     * 처리 결과 성공: SUCCESS
     */
    public static final String RESULT_SUCCESS = "success";
    /**
     * 처리 결과 실패: FAILURE
     */
    public static final String RESULT_FAILURE = "failure";




    /**
     * 상수 값만을 위한 클래스이므로 생성자를 사용 불가능하게 만든다. (인스턴스화 방지)
     */
    private Constants() {
    }
}
