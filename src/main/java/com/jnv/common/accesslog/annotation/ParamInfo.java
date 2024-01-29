package com.jnv.common.accesslog.annotation;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Retention(RUNTIME)
@Target(METHOD)
public @interface ParamInfo {

    /**
     * 파라미터 이름
     *
     * @return
     */
    String paramName();

    /**
     * 로그에 저장될 때 변경하고자 하는 이름
     *
     * @return
     */
    String displayName();

    /**
     * 로그에 기록되는 요청 본문에서 파라미터 값을 숨긴다.
     *
     * @return
     */
    boolean hideValue() default false;
}
