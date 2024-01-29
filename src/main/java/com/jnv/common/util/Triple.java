package com.jnv.common.util;

import java.util.Objects;

public final class Triple<T extends Comparable<T>, U extends Comparable<U>, V extends Comparable<V>>
        implements Comparable<Triple<T, U, V>> {

    private final T first;
    private final U second;
    private final V third;

    public Triple(T first, U second, V third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }

    public T getFirst() {
        return first;
    }

    public U getSecond() {
        return second;
    }

    public V getThird() {
        return third;
    }

    @Override
    public int compareTo(Triple<T, U, V> o) {
        if (o == null)
            return 1;

        int r = compare(first, o.first);
        if (r != 0)
            return r;

        r = compare(second, o.second);
        if (r != 0)
            return r;

        return compare(third, o.third);
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Triple) {
            Triple<?, ?, ?> other = (Triple<?, ?, ?>) obj;
            return Objects.equals(this.first, other.first)
                && Objects.equals(this.second, other.second)
                && Objects.equals(this.third, other.third);
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return Objects.hash(first, second, third);
    }

    private <A extends Comparable<A>> int compare(A a, A b) {
        if (a == null && b == null)
            return 0;
        else if (a == null)
            return -1;
        else if (b == null)
            return 1;
        else
            return a.compareTo(b);
    }
}
