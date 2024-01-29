package com.jnv.sm.code.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.CommonCodeHeaderVO;
import com.jnv.sm.vo.CommonCodeLineVO;

public interface CommonCodeManageService {

    List<CommonCodeHeaderVO> getCodeHeaderList(Map<String, Object> paramMap) throws Exception;

    List<CommonCodeLineVO> getCodeLineList(Map<String, Object> searchMap) throws Exception;

    String setCodeHeaderList(List<CommonCodeHeaderVO> commonCodeHeaderList) throws Exception;

    String setCodeLineList(List<CommonCodeLineVO> commonCodeLineList) throws Exception;

}
