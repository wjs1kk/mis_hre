package com.jnv.common.util;

@FunctionalInterface
public interface Function3Args<A, B, C, R> {
    R call(A arg1, B arg2, C arg3);
}
