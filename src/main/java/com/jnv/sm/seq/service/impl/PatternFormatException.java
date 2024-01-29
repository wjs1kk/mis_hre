package com.jnv.sm.seq.service.impl;

class PatternFormatException extends RuntimeException {

    private final int offset;
    private final PatternErrorType type;

    public PatternFormatException(int offset, PatternErrorType type) {
        super();
        this.offset = offset;
        this.type = type;
    }

    public int getOffset() {
        return offset;
    }

    public PatternErrorType getType() {
        return type;
    }
}
