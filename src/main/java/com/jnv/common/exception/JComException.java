package com.jnv.common.exception;

public class JComException extends RuntimeException{

    private static final long serialVersionUID = 9044912432777963057L;

    public JComException() {
        super();
    }

    public JComException(String msg) {
        super(msg);
    }

    public JComException(Throwable throwable) {
        super(throwable);
    }

    public JComException(String msg, Throwable throwable) {
        super(msg, throwable);
    }

    public Throwable getRootCause() {
        Throwable rootCause = null;
        Throwable cause = getCause();
        while (cause != null && cause != rootCause) {
            rootCause = cause;
            cause = cause.getCause();
        }
        return rootCause;
    }

}
