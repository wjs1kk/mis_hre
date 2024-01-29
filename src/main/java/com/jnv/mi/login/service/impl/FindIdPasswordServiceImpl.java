package com.jnv.mi.login.service.impl;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import javax.annotation.Resource;

import com.jnv.common.mail.service.SendMailService;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.mi.login.service.FindIdPasswordDAO;
import com.jnv.mi.login.service.FindIdPasswordService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service("findIdPasswordService")
public class FindIdPasswordServiceImpl implements FindIdPasswordService {

    private static final char[] VALID_SYMBOLS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}".toCharArray();
    private static final Random RANDOM = new SecureRandom();

    @Resource(name = "passwordEncoder")
    private PasswordEncoder passwordEncoder;

    @Resource(name = "sendMailService")
    private SendMailService sendMailService;

    @Resource(name = "findIdPasswordDAO")
    private FindIdPasswordDAO dao;

    @Override
    public String findUserId(Map<String, Object> params) {
        String id = dao.getUserId(params);
        if (StringUtils.isEmpty(id)) {
            throw new BusinessException("errors.mi.nouserfound");
        }

        String prefix = id.substring(0, 3);
        String suffix = id.substring(id.length() - 1);

        return String.join("", prefix, StringUtils.repeat('*', id.length() - 4), suffix);
    }

    @Override
    public String resetPassword(Map<String, Object> params) {
        if (!dao.getUserExists(params)) {
            throw new BusinessException("errors.mi.nouserfound");
        }

        String email = (String) params.get("emlAddr");
        String newPassword = generatePassword();
        String encodedPassword = passwordEncoder.encode(newPassword);

        params.put("passwd", encodedPassword);
        dao.updatePassword(params);

        Map<String, Object> map = new HashMap<>();
        map.put("userName", params.get("userNmKr"));
        map.put("passwd", newPassword);
        sendMailService.sendMail(email, "FIND_PASSWD", map);

        return email;
    }

    private String generatePassword() {
        List<String> chars = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            chars.add(String.valueOf(VALID_SYMBOLS[RANDOM.nextInt(VALID_SYMBOLS.length)]));
        }
        for (int i = 4; i < 8; i++) {
            chars.add(String.valueOf((char) (0x30 + RANDOM.nextInt(10))));
        }
        for (int i = 8; i < 12; i++) {
            chars.add(String.valueOf((char) (0x61 + RANDOM.nextInt(26))));
        }

        Collections.shuffle(chars);

        return String.join("", chars);
    }
}
