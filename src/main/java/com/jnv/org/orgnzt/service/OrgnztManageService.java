package com.jnv.org.orgnzt.service;

import java.util.List;
import java.util.Map;

import com.jnv.org.orgnzt.vo.OrgnztDeptVO;
import com.jnv.org.orgnzt.vo.OrgnztManageVO;
import com.jnv.org.orgnzt.vo.OrgnztStdVO;

public interface OrgnztManageService {

    List<OrgnztStdVO> getOrgnStdYmdList(Map<String, Object> searchMap);

    List<OrgnztManageVO> getOrgnztManageList(Map<String, Object> searchMap);

    List<OrgnztDeptVO> getOrgnztDeptList(Map<String, Object> searchMap);
    String setOrgnztManage(List<OrgnztStdVO> orgnztStdVO, List<OrgnztManageVO> orgnztManageVO, List<OrgnztDeptVO> orgnztDeptVO);

    List<OrgnztDeptVO> getDeptPopupList(Map<String, Object> searchMap);



}
