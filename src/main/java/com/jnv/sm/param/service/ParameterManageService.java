package com.jnv.sm.param.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.ParameterManageVO;

public interface ParameterManageService {

    List<ParameterManageVO> getParam(Map<String, Object> searchMap) throws Exception;

    String setParam(List<ParameterManageVO> ParamList) throws Exception;

}
