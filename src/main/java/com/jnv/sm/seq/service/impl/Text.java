package com.jnv.sm.seq.service.impl;

class Text implements Token {

    private final String value;

    public Text(String value) {
        super();
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
