package com.jnv.common.accesslog.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 메서드를 호출시 접속 로그를 저장할 대상으로 추가한다.
 *
 * @author 박상욱
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AccessLogging {

    /**
     * 로그에 저장 시 사용할 기능 이름. 미지정시 {@code 메뉴 진입}으로 표시된다.
     *
     * @return
     */
    String actionName() default "메뉴 진입";

    /**
     * 메서드 호출 시 로그 저장 시 선호하는 메뉴 ID.
     * 미지정시 메뉴 테이블 상의 정보를 기반으로 저장한다.
     *
     * @return
     */
    String preferredMenuId() default "";

    /**
     * 로그 저장시 파라미터 이름을 알아보기 쉽게 변경하고자 할 때 사용할 매핑 정보 목록
     *
     * @return
     */
    ParamInfo[] paramInfo() default {};

    /**
     * 메뉴 이름을 DB에서 가져오는 대신 이 이름을 사용한다.
     *
     * @return
     */
    String menuNm() default "";

    /**
     * {@link #menuNm()} 지정시 프로그램명을 DB에서 가져오는 대신 이 이름을 사용한다.
     *
     * @return
     */
    String progNm() default "";

    /**
     * 로그 저장시 요청 정보를 숨긴다
     *
     * @return
     */
    boolean hideRequestBody() default false;
}
