package com.jnv.mi.login.service;

import java.util.Map;

public interface FindIdPasswordService {
    String findUserId(Map<String, Object> params);

    String resetPassword(Map<String, Object> params);
}
