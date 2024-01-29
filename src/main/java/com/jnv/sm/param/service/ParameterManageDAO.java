package com.jnv.sm.param.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.ParameterManageVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("parameterManageDAO")
public interface ParameterManageDAO {

    List<ParameterManageVO> getParam(Map<String, Object> paramMap);

    void insertParam(ParameterManageVO param);

    void updateParam(ParameterManageVO param);

    void deleteParam(ParameterManageVO param);

    int getDuplicatedKeyCnt(ParameterManageVO param);

}
