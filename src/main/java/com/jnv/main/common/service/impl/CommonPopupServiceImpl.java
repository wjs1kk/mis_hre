package com.jnv.main.common.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.jnv.main.common.service.CommonPopupDAO;
import com.jnv.main.common.service.CommonPopupService;
import com.jnv.main.vo.DeptSearchResultVO;
import com.jnv.main.vo.UserSearchResultVO;

@Service("commonPopupService")
public class CommonPopupServiceImpl implements CommonPopupService {

    @Resource(name = "commonPopupDAO")
    private CommonPopupDAO dao;

    @Override
    public List<UserSearchResultVO> getUserList(Map<String, Object> searchParams) {
        return dao.getUserList(searchParams);
    }

    @Override
    public List<DeptSearchResultVO> getDeptTree(Map<String, Object> searchParams) {
        return dao.getDeptTree(searchParams);
    }
}
