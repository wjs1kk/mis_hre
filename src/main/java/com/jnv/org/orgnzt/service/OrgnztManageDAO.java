package com.jnv.org.orgnzt.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.org.orgnzt.vo.OrgnztDeptVO;
import com.jnv.org.orgnzt.vo.OrgnztManageVO;
import com.jnv.org.orgnzt.vo.OrgnztStdVO;

@Mapper("orgnztManageDAO")
public interface OrgnztManageDAO {

    List<OrgnztStdVO> getOrgnStdYmdList(Map<String, Object> searchMap);
    void insertOrgnStdYmd(OrgnztStdVO orgnztStdVO);
    void updateOrgnStdYmd(OrgnztStdVO orgnztStdVO);
    void deleteOrgnStdYmd(OrgnztStdVO orgnztStdVO);
    int getStdYmdDuplicatedKeyCnt(OrgnztStdVO orgnztStdVO);

    List<OrgnztManageVO> getOrgnztManageList(Map<String, Object> searchMap);
    void insertOrgnztManage(OrgnztManageVO orgnztManageVO);
    void updateOrgnztManage(OrgnztManageVO orgnztManageVO);
    void deleteOrgnztManage(OrgnztManageVO orgnztManageVO);

    List<OrgnztDeptVO> getOrgnztDeptList(Map<String, Object> searchMap);
    void insertOrgnztDept(OrgnztDeptVO orgnztDeptVO);
    void updateOrgnztDept(OrgnztDeptVO orgnztDeptVO);
    void deleteOrgnztDept(OrgnztDeptVO orgnztDeptVO);
    int getDeptDuplicatedKeyCnt(OrgnztDeptVO orgnztDeptVO);

    List<OrgnztDeptVO> getDeptPopupList(Map<String, Object> searchMap);

}
