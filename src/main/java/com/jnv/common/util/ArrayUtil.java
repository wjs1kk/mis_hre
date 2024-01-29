package com.jnv.common.util;

import java.util.Comparator;
import java.util.Objects;

public final class ArrayUtil {

    private ArrayUtil() {
    }

    public static int compare(boolean[] a, boolean[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Boolean.compare(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compare(boolean[] a, int aFromIndex, int aToIndex, boolean[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Boolean.compare(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compare(byte[] a, byte[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Byte.compare(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compare(byte[] a, int aFromIndex, int aToIndex, byte[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Byte.compare(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compareUnsigned(byte[] a, byte[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int ia = a[i] & 0xff;
            int ib = b[i] & 0xff;
            int r = Integer.compare(ia, ib);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compareUnsigned(byte[] a, int aFromIndex, int aToIndex, byte[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int ia = a[aFromIndex + i] & 0xff;
            int ib = b[bFromIndex + i] & 0xff;
            int r = Integer.compare(ia, ib);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compare(char[] a, char[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Character.compare(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compare(char[] a, int aFromIndex, int aToIndex, char[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Character.compare(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compare(short[] a, short[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Short.compare(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compare(short[] a, int aFromIndex, int aToIndex, short[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Short.compare(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compareUnsigned(short[] a, short[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int ia = a[i] & 0xffff;
            int ib = b[i] & 0xffff;
            int r = Integer.compare(ia, ib);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compareUnsigned(short[] a, int aFromIndex, int aToIndex, short[] b, int bFromIndex,
        int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int ia = a[aFromIndex + i] & 0xffff;
            int ib = b[bFromIndex + i] & 0xffff;
            int r = Integer.compare(ia, ib);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compare(int[] a, int[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Integer.compare(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compare(int[] a, int aFromIndex, int aToIndex, int[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Integer.compare(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compareUnsigned(int[] a, int[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Integer.compareUnsigned(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compareUnsigned(int[] a, int aFromIndex, int aToIndex, int[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Integer.compareUnsigned(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compare(long[] a, long[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Long.compare(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compare(long[] a, int aFromIndex, int aToIndex, long[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Long.compare(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compareUnsigned(long[] a, long[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Long.compareUnsigned(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compareUnsigned(long[] a, int aFromIndex, int aToIndex, long[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Long.compareUnsigned(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compare(float[] a, float[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Float.compare(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compare(float[] a, int aFromIndex, int aToIndex, float[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Float.compare(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static int compare(double[] a, double[] b) {
        if (a == b)
            return 0;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            int r = Double.compare(a[i], b[i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(a.length, b.length);
    }

    public static int compare(double[] a, int aFromIndex, int aToIndex, double[] b, int bFromIndex, int bToIndex) {
        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            int r = Double.compare(a[aFromIndex + i], b[bFromIndex + i]);
            if (r != 0)
                return r;
        }

        return Integer.compare(aCount, bCount);
    }

    public static <T extends Comparable<? super T>> int compare(T[] a, T[] b) {
        if (a == b)
            return 0;

        if (a == null || b == null)
            return a == null ? -1 : 1;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            T oa = a[i];
            T ob = b[i];

            if (oa != ob) {
                if (oa == null || ob == null)
                    return oa == null ? -1 : 1;

                int r = oa.compareTo(ob);
                if (r != 0)
                    return r;
            }
        }

        return Integer.compare(a.length, b.length);
    }

    public static <T extends Comparable<? super T>> int compare(T[] a, int aFromIndex, int aToIndex, T[] b,
        int bFromIndex, int bToIndex) {

        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            T oa = a[aFromIndex + i];
            T ob = b[bFromIndex + i];

            if (oa != ob) {
                if (oa == null || ob == null)
                    return oa == null ? -1 : 1;

                int r = oa.compareTo(ob);
                if (r != 0)
                    return r;
            }
        }

        return Integer.compare(aCount, bCount);
    }

    public static <T> int compare(T[] a, T[] b, Comparator<? super T> comparator) {
        Objects.requireNonNull(comparator, "Comparator should not be null");

        if (a == b)
            return 0;

        if (a == null || b == null)
            return a == null ? -1 : 1;

        int count = Math.min(a.length, b.length);
        for (int i = 0; i < count; i++) {
            T oa = a[i];
            T ob = b[i];

            if (oa != ob) {
                int r = comparator.compare(oa, ob);
                if (r != 0)
                    return r;
            }
        }

        return Integer.compare(a.length, b.length);
    }

    public static <T> int compare(T[] a, int aFromIndex, int aToIndex, T[] b, int bFromIndex, int bToIndex,
        Comparator<? super T> comparator) {

        checkArrayRange(a, aFromIndex, aToIndex);
        checkArrayRange(b, bFromIndex, bToIndex);

        if (a == b && aFromIndex == bFromIndex && aToIndex == bToIndex)
            return 0;

        int aCount = aToIndex - aFromIndex;
        int bCount = bToIndex - bFromIndex;
        int count = Math.min(aCount, bCount);
        for (int i = 0; i < count; i++) {
            T oa = a[aFromIndex + i];
            T ob = b[bFromIndex + i];

            if (oa != ob) {
                int r = comparator.compare(oa, ob);
                if (r != 0)
                    return r;
            }
        }

        return Integer.compare(aCount, bCount);
    }

    private static void checkArrayRange(boolean[] array, int from, int to) {
        if (from > to) {
            throw new IllegalArgumentException(String.format("fromIndex(%d) > toIndex(%d)", from, to));
        } else if (from < 0) {
            throw new ArrayIndexOutOfBoundsException(from);
        } else if (to >= array.length) {
            throw new ArrayIndexOutOfBoundsException(to);
        }
    }

    private static void checkArrayRange(byte[] array, int from, int to) {
        if (from > to) {
            throw new IllegalArgumentException(String.format("fromIndex(%d) > toIndex(%d)", from, to));
        } else if (from < 0) {
            throw new ArrayIndexOutOfBoundsException(from);
        } else if (to >= array.length) {
            throw new ArrayIndexOutOfBoundsException(to);
        }
    }

    private static void checkArrayRange(short[] array, int from, int to) {
        if (from > to) {
            throw new IllegalArgumentException(String.format("fromIndex(%d) > toIndex(%d)", from, to));
        } else if (from < 0) {
            throw new ArrayIndexOutOfBoundsException(from);
        } else if (to >= array.length) {
            throw new ArrayIndexOutOfBoundsException(to);
        }
    }

    private static void checkArrayRange(char[] array, int from, int to) {
        if (from > to) {
            throw new IllegalArgumentException(String.format("fromIndex(%d) > toIndex(%d)", from, to));
        } else if (from < 0) {
            throw new ArrayIndexOutOfBoundsException(from);
        } else if (to >= array.length) {
            throw new ArrayIndexOutOfBoundsException(to);
        }
    }

    private static void checkArrayRange(int[] array, int from, int to) {
        if (from > to) {
            throw new IllegalArgumentException(String.format("fromIndex(%d) > toIndex(%d)", from, to));
        } else if (from < 0) {
            throw new ArrayIndexOutOfBoundsException(from);
        } else if (to >= array.length) {
            throw new ArrayIndexOutOfBoundsException(to);
        }
    }

    private static void checkArrayRange(long[] array, int from, int to) {
        if (from > to) {
            throw new IllegalArgumentException(String.format("fromIndex(%d) > toIndex(%d)", from, to));
        } else if (from < 0) {
            throw new ArrayIndexOutOfBoundsException(from);
        } else if (to >= array.length) {
            throw new ArrayIndexOutOfBoundsException(to);
        }
    }

    private static void checkArrayRange(float[] array, int from, int to) {
        if (from > to) {
            throw new IllegalArgumentException(String.format("fromIndex(%d) > toIndex(%d)", from, to));
        } else if (from < 0) {
            throw new ArrayIndexOutOfBoundsException(from);
        } else if (to >= array.length) {
            throw new ArrayIndexOutOfBoundsException(to);
        }
    }

    private static void checkArrayRange(double[] array, int from, int to) {
        if (from > to) {
            throw new IllegalArgumentException(String.format("fromIndex(%d) > toIndex(%d)", from, to));
        } else if (from < 0) {
            throw new ArrayIndexOutOfBoundsException(from);
        } else if (to >= array.length) {
            throw new ArrayIndexOutOfBoundsException(to);
        }
    }

    private static <T> void checkArrayRange(T[] array, int from, int to) {
        if (from > to) {
            throw new IllegalArgumentException(String.format("fromIndex(%d) > toIndex(%d)", from, to));
        } else if (from < 0) {
            throw new ArrayIndexOutOfBoundsException(from);
        } else if (to >= array.length) {
            throw new ArrayIndexOutOfBoundsException(to);
        }
    }
}
