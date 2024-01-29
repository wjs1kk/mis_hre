package com.jnv.main.common.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.main.vo.DeptSearchResultVO;
import com.jnv.main.vo.UserSearchResultVO;

@Mapper("commonPopupDAO")
public interface CommonPopupDAO {

    List<UserSearchResultVO> getUserList(Map<String, ?> searchMap);

    List<DeptSearchResultVO> getDeptTree(Map<String, ?> searchMap);
}
