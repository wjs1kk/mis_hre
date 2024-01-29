package com.jnv.common.util;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.function.BiFunction;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

public final class StreamUtils {

    private StreamUtils() {
    }

    public static <A, B, R> Stream<R> zip(Stream<A> streamA, Stream<B> streamB, BiFunction<A, B, R> zipper) {
        final Iterator<A> iteratorA = streamA.iterator();
        final Iterator<B> iteratorB = streamB.iterator();

        final Iterator<R> resultIterator = new Iterator<R>() {

            @Override
            public boolean hasNext() {
                return iteratorA.hasNext() || iteratorB.hasNext();
            }

            @Override
            public R next() {
                A a = iteratorA.hasNext() ? iteratorA.next() : null;
                B b = iteratorB.hasNext() ? iteratorB.next() : null;
                return zipper.apply(a, b);
            }
        };

        Iterable<R> iterable = () -> resultIterator;
        return StreamSupport.stream(iterable.spliterator(), streamA.isParallel() || streamB.isParallel());
    }

    public static <A, B, C, R> Stream<R> zip3(
        Stream<A> streamA,
        Stream<B> streamB,
        Stream<C> streamC,
        Function3Args<A, B, C, R> zipper) {

        final Iterator<A> iteratorA = streamA.iterator();
        final Iterator<B> iteratorB = streamB.iterator();
        final Iterator<C> iteratorC = streamC.iterator();

        final Iterator<R> resultIterator = new Iterator<R>() {

            @Override
            public boolean hasNext() {
                return iteratorA.hasNext() || iteratorB.hasNext() || iteratorC.hasNext();
            }

            @Override
            public R next() {
                A a = iteratorA.hasNext() ? iteratorA.next() : null;
                B b = iteratorB.hasNext() ? iteratorB.next() : null;
                C c = iteratorC.hasNext() ? iteratorC.next() : null;
                return zipper.call(a, b, c);
            }
        };

        Iterable<R> iterable = () -> resultIterator;
        return StreamSupport
            .stream(iterable.spliterator(), streamA.isParallel() || streamB.isParallel() || streamC.isParallel());
    }

    @SafeVarargs
    public static <T> Stream<T> merge(Class<T> cls, Stream<? extends T>... streams) {
        @SuppressWarnings("unchecked")
        final Iterator<? extends T>[] iterators = new Iterator[streams.length];
        for (int i = 0; i < streams.length; i++) {
            iterators[i] = streams[i].iterator();
        }

        final Iterator<T> resultIterator = new Iterator<T>() {
            int s = 0;

            @Override
            public boolean hasNext() {
                return Arrays.stream(iterators).anyMatch(Iterator::hasNext);
            }

            @Override
            public T next() {
                try {
                    Constructor<?> ctor = cls.getDeclaredConstructor();
                    if (cls.equals(Object.class)) {
                        ctor = HashMap.class.getDeclaredConstructor();
                    }

                    T t = iterators[s].hasNext() ? iterators[s].next() : (T) ctor.newInstance();
                    s = (s + 1) % iterators.length;
                    return t;
                } catch (InstantiationException | IllegalAccessException | IllegalArgumentException
                    | InvocationTargetException | NoSuchMethodException | SecurityException e) {
                    return null;
                }
            }
        };

        Iterable<T> iterable = () -> resultIterator;
        return StreamSupport.stream(iterable.spliterator(), Arrays.stream(streams).anyMatch(Stream::isParallel));
    }
}
