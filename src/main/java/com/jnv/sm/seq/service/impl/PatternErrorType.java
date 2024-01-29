package com.jnv.sm.seq.service.impl;

enum PatternErrorType {
    INVALID_OPENING_BRACE_POSITION("여는 중괄호의 위치가 잘못되었습니다.", ""),
    INVALID_CLOSING_BRACE_POSITION("닫는 중괄호의 위치가 잘못되었습니다.", ""),
    INVALID_DATE_FORMAT("날짜의 형식이 잘못되었습니다.", ""),
    BRACE_NOT_CLOSED("중괄호가 닫히지 않았습니다.", "");

    public final String message;
    public final String id;

    PatternErrorType(String message, String id) {
        this.message = message;
        this.id = id;
    }
}
