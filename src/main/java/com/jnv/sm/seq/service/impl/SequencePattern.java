package com.jnv.sm.seq.service.impl;

import java.time.Instant;
import java.time.temporal.TemporalAccessor;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class SequencePattern {

    private static final Logger LOG = LoggerFactory.getLogger(SequencePattern.class);
    private static final Pattern PLACEHOLDER_PATTERN = Pattern.compile("(\\{{1,2}|\\}{1,2})");

    private final String input;
    private List<Token> tokens = new ArrayList<>();

    private SequencePattern(String input) {
        this.input = input;
        if (!StringUtils.isEmpty(input)) {
            parse();
        }
    }

    public static SequencePattern of(String pattern) {
        return new SequencePattern(pattern);
    }

    public String format(Date date) {
        return tokens.stream()
            .map(t -> (t instanceof Placeholder) ? ((Placeholder) t).format(date) : ((Text) t).getValue())
            .collect(Collectors.joining(""));
    }

    public String format(Calendar calendar) {
        return format(calendar.getTime());
    }

    public String format(TemporalAccessor temporal) {
        return format(Date.from(Instant.from(temporal)));
    }

    public String format(Instant instant) {
        return format(Date.from(instant));
    }

    private void parse() {
        StringBuilder sb = new StringBuilder();
        boolean isBraceOpened = false;
        int i = 0;
        int braceOpen = -1;
        Matcher matcher = PLACEHOLDER_PATTERN.matcher(input);

        // 매 "{", "{{", "}", "}}"마다
        while (matcher.find(i)) {
            int j = matcher.start();
            int k = matcher.end();
            String match = input.substring(j, k);

            sb.append(input.substring(i, j));

            if (match.length() == 2) { // "{{", "}}"
                // 중괄호 2개 연속으로 쓰면 이스케이프 처리
                sb.append(match.charAt(0));
            } else { // "{", "}"
                // 여는 중괄호인지 확인한다.
                boolean isOpeningBrace = match.charAt(0) == '{';

                // 이미 중괄호가 열린(닫힌) 상태에서 여는(닫는) 중괄호가 나왔는지 확인한다.
                checkBraceOpenStateAndThrow(isBraceOpened, isOpeningBrace, j);

                // 이전 중괄호 상태에 따라 토큰을 생성한다.
                tokens.add(createToken(sb.toString(), isBraceOpened));

                // 토큰 생성 상태를 초기화한다.
                sb.setLength(0);
                braceOpen = isOpeningBrace ? j : -1;
                isBraceOpened = isOpeningBrace;
            }

            i = k;
        }

        // 더 이상 닫는 중괄호가 없는 상태로 중괄호가 열려 있는 경우 오류로 처리한다.
        if (isBraceOpened) {
            LOG.error("Brace not closed at {}, input string: {}", braceOpen, input);
            throw new PatternFormatException(braceOpen, PatternErrorType.BRACE_NOT_CLOSED);
        }

        // 나머지를 처리한다.
        if (sb.length() > 0) {
            tokens.add(new Text(sb.toString()));
        }
        tokens.add(new Text(input.substring(i)));
    }

    private static void checkBraceOpenStateAndThrow(boolean previous, boolean current, int index) {
        if (previous == current) {
            throw new PatternFormatException(index, current ? PatternErrorType.INVALID_OPENING_BRACE_POSITION
                : PatternErrorType.INVALID_CLOSING_BRACE_POSITION);
        }
    }

    private static Token createToken(String data, boolean isPlaceholder) {
        return isPlaceholder ? new Placeholder(data) : new Text(data);
    }
}
