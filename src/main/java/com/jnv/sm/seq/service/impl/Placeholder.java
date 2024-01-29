package com.jnv.sm.seq.service.impl;

import java.time.Instant;
import java.time.temporal.TemporalAccessor;
import java.util.Date;

import org.apache.commons.lang3.time.FastDateFormat;

class Placeholder implements Token {

    private final FastDateFormat formatter;

    public Placeholder(String pattern) {
        this.formatter = FastDateFormat.getInstance(pattern);
    }

    public String format(Date date) {
        return formatter.format(date);
    }

    public String format(TemporalAccessor temporal) {
        return formatter.format(Date.from(Instant.from(temporal)));
    }
}
