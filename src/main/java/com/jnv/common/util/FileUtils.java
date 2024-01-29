package com.jnv.common.util;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.apache.commons.lang3.CharUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;

public final class FileUtils {

    private FileUtils() {
        // no-op
    }

    public static String formatFileSize(long bytes) {
        List<FileSizeUnit> units = FileSizeUnit.units();

        int n = (bytes == 0) ? 0 : (int) Math.floor(Math.log10(Math.abs(bytes)) / 3);

        if (n > units.size()) {
            n = units.size() - 1;
        }

        FileSizeUnit unit = units.get(n);

        if (unit == FileSizeUnit.B) {
            return String.format("%dB", bytes);
        }

        long base = unit.getBase();
        double d = (double) (bytes >> Long.numberOfTrailingZeros(base)) + (bytes & (base - 1)) / (double)base;

        if (d < 100) {
            return String.format("%.2f%s", d, unit.getUnit());
        } else {
            return String.format("%.1f%s", d, unit.getUnit());
        }
    }

    public static long parseFileSize(String size) {
        if (StringUtils.isBlank(size)) {
            return 0;
        }

        List<FileSizeUnit> units = FileSizeUnit.units();
        String trimmed = size.trim();

        char lastChar = trimmed.charAt(trimmed.length() - 1);
        if (CharUtils.isAsciiNumeric(lastChar)) {
            return Long.parseLong(trimmed);
        }

        for (FileSizeUnit unit : units) {
            String u = unit.getUnit();
            if (trimmed.endsWith(u)) {
                return Math.round(Double.parseDouble(trimmed.substring(0, trimmed.length() - u.length())) * unit.getBase());
            } else if (trimmed.endsWith(u.substring(0, 1))) {
                return Math.round(Double.parseDouble(trimmed.substring(0, trimmed.length() - u.length() + 1)) * unit.getBase());
            }
        }

        throw new IllegalArgumentException(String.format("Unsupported value: %s", size));
    }

    private enum FileSizeUnit {
        B(1, "B"),
        KB(B.base << 10, "KB"),
        MB(KB.base << 10, "MB"),
        GB(MB.base << 10, "GB"),
        TB(GB.base << 10, "TB"),
        PB(TB.base << 10, "PB"),
        EB(PB.base << 10, "EB");

        private final long base;
        private final String unit;

        FileSizeUnit(long base, String unit) {
            this.base = base;
            this.unit = unit;
        }

        public long getBase() {
            return base;
        }

        public String getUnit() {
            return unit;
        }

        static List<FileSizeUnit> units() {
            List<FileSizeUnit> list = Arrays.asList(values());
            Collections.sort(list, Comparator.<FileSizeUnit>comparingLong(e -> e.base));
            return list;
        }
    }
}
