package com.jnv.common.util;

import java.util.Arrays;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;

/**
 * 클라이언트 접속 정보(IP 등)을 확인한다.
 *
 * @author JNV
 */
public final class ClientInfoUtil {

    /**
     * 인스턴스 생성 방지를 위한 private 생성자
     */
    private ClientInfoUtil() {
    }

    /**
     * 클라이언트의 IP 주소를 확인한다.
     * Apache httpd, nginx 등의 프록시를 거쳐 요청이 들어오는 경우를 처리하기 위해, {@code Forwarded},
     * {@code X-Forwarded-For}, {@code X-Real-Ip} 헤더를 참조하며, 해당 요청 헤더가 없는 경우
     * {@link HttpServletRequest#getRemoteAddr()}의 반환값을 사용한다.
     *
     * @param req
     * @return
     */
    public static String getRemoteIp(HttpServletRequest req) {
        String xRealIp = StringUtils.trimToEmpty(req.getHeader("X-Real-Ip"));
        String xForwardedFor = StringUtils.trimToEmpty(req.getHeader("X-Forwarded-For"));
        String forwarded = StringUtils.trimToEmpty(req.getHeader("Forwarded"));

        if (StringUtils.isNotBlank(forwarded)) {
            String[] entries = Arrays.stream(forwarded.split("[,]"))
                .findFirst()
                .orElse("")
                .split(",");

            Optional<String> address = Arrays.stream(entries)
                .filter(e -> Pattern.compile("^for=", Pattern.CASE_INSENSITIVE).matcher(e).matches())
                .map(e -> unquoteForwardedForValue(e.substring("for=".length())))
                .findFirst()
                .filter(e -> !"unknown".equalsIgnoreCase(e));

            if (address.isPresent())
                return address.get();
        }

        if (StringUtils.isNotBlank(xForwardedFor)) {
            Optional<String> address = Arrays.stream(xForwardedFor.split(", ?"))
                .filter(StringUtils::isNotBlank)
                .map(String::trim)
                .findFirst()
                .filter(e -> !"unknown".equalsIgnoreCase(e));

            if (address.isPresent())
                return address.get();
        }

        if (StringUtils.isNotBlank(xRealIp))
            return xRealIp.trim();

        return req.getRemoteAddr();
    }

    /**
     * 클라이언트에서 접속하기 위해 사용한 프로토콜을 확인한다.
     * Apache httpd, nginx 등의 프록시를 거쳐 요청이 들어오는 경우를 처리하기 위해, {@code Forwarded},
     * {@code X-Forwarded-Proto} 헤더를 참조하며, 해당 헤더가 요청에 없는 경우
     * {@link HttpServletRequest#getScheme()}의 반환값을 사용한다.
     *
     * @param req
     * @return
     */
    public static String getProto(HttpServletRequest req) {
        String xUrlScheme = req.getHeader("X-Url-Scheme");
        String xForwardedProtocol = req.getHeader("X-Forwarded-Protocol");
        String xForwardedProto = req.getHeader("X-Forwarded-Proto");
        String forwarded = req.getHeader("Forwarded");

        if (StringUtils.isNotBlank(forwarded)) {
            String[] entries = Arrays.stream(forwarded.split("[,]"))
                .findFirst()
                .orElse("")
                .split(",");

            Optional<String> proto = Arrays.stream(entries)
                .filter(e -> Pattern.compile("^proto=", Pattern.CASE_INSENSITIVE).matcher(e).matches())
                .map(e -> e.substring("proto=".length()))
                .findFirst();

            if (proto.isPresent())
                return proto.get();
        } else if (StringUtils.isNotBlank(xForwardedProto)) {
            return xForwardedProto.trim();
        } else if (StringUtils.isNotBlank(xForwardedProtocol)) {
            return xForwardedProtocol.trim();
        } else if (StringUtils.isNotBlank(xUrlScheme)) {
            return xUrlScheme.trim();
        }

        return req.getScheme();
    }

    /**
     * 클라이언트에서 전송한 {@code Host} 헤더의 값을 확인한다.
     * Apache httpd, nginx 등의 프록시를 거쳐 요청이 들어오는 경우를 처리하기 위해, {@code Forwarded},
     * {@code X-Forwarded-Host}, {@code X-Forwarded-Port} 헤더를 참조하며, 해당 헤더가 요청에 없는 경우
     * {@code Host} 헤더의 값을 사용한다.
     *
     * @param req
     * @return
     */
    public static String getHost(HttpServletRequest req) {
        String xForwardedHost = req.getHeader("X-Forwarded-Host");
        String xForwardedPort = req.getHeader("X-Forwarded-Port");
        String forwarded = req.getHeader("Forwarded");

        if (StringUtils.isNotBlank(forwarded)) {
            String[] entries = Arrays.stream(forwarded.split("[,]"))
                .findFirst()
                .orElse("")
                .split(",");

            Optional<String> host = Arrays.stream(entries)
                .filter(e -> Pattern.compile("^host=", Pattern.CASE_INSENSITIVE).matcher(e).matches())
                .map(e -> unquoteForwardedHostValue(e.substring("host=".length())))
                .findFirst();

            if (host.isPresent())
                return host.get();
        }

        if (StringUtils.isNotBlank(xForwardedHost)) {
            if (StringUtils.isNotBlank(xForwardedPort)) {
                int port = Integer.parseInt(xForwardedPort);
                String proto = getProto(req);

                if (("http".equals(proto) && port != 80)
                    || ("ws".equals(proto) && port != 80)
                    || ("https".equals(proto) && port != 443)
                    || ("wss".equals(proto) && port != 443))
                    return String.format("%s:%d", xForwardedHost.trim(), port);
            }

            return xForwardedHost;
        }

        return req.getHeader("Host");
    }

    /**
     * {@code Forwarded} 헤더의 {@code for=} 값에서 IP 주소를 추출한다.
     * IPv6 주소의 경우 []로 감싸지는 경우가 있고, 포트 번호가 추가된 경우 :로 감싸지는 경우가 있는데,
     * 이 경우 값에서 IP 주소만 추출한다.
     *
     * @param value
     * @return
     */
    private static String unquoteForwardedForValue(String value) {
        Pattern ipv6Pattern = Pattern.compile("\"?\\[(.+)(?:\\:\\d+)?\\]\"?");
        Matcher ipv6Matcher = ipv6Pattern.matcher(value);

        if (ipv6Matcher.find())
            return ipv6Matcher.group(1);

        Pattern ipv4PortPattern = Pattern.compile("\"?(.+)(?:\\:\\d+)\"?");
        Matcher ipv4PortMatcher = ipv4PortPattern.matcher(value);

        if (ipv4PortMatcher.find())
            return ipv4PortMatcher.group(1);

        return value;
    }

    private static String unquoteForwardedHostValue(String value) {
        Pattern pattern = Pattern.compile("\"(.+)\"");
        Matcher matcher = pattern.matcher(value);

        if (matcher.matches())
            return matcher.group(1);

        return value;
    }
}
