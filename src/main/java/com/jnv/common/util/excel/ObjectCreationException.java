package com.jnv.common.util.excel;

public class ObjectCreationException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public ObjectCreationException() {
        super();
    }

    public ObjectCreationException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    public ObjectCreationException(String message, Throwable cause) {
        super(message, cause);
    }

    public ObjectCreationException(String message) {
        super(message);
    }

    public ObjectCreationException(Throwable cause) {
        super(cause);
    }
}
