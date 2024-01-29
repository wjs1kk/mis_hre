package com.jnv.main.common.service;

import java.util.List;
import java.util.Map;

import com.jnv.main.vo.DeptSearchResultVO;
import com.jnv.main.vo.UserSearchResultVO;

public interface CommonPopupService {

    List<UserSearchResultVO> getUserList(Map<String, Object> searchParams);

    List<DeptSearchResultVO> getDeptTree(Map<String, Object> searchParams);

}
