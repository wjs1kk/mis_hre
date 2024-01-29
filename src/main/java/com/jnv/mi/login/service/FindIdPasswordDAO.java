package com.jnv.mi.login.service;

import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("findIdPasswordDAO")
public interface FindIdPasswordDAO {

    String getUserId(Map<String, ?> params);

    boolean getUserExists(Map<String, ?> params);

    void updatePassword(Map<String, ?> params);
}
