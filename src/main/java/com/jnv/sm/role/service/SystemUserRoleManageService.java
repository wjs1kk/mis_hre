package com.jnv.sm.role.service;

import java.util.List;

import org.springframework.ui.ModelMap;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.sm.vo.CmtnVO;

public interface SystemUserRoleManageService {

    List<CmtnVO> searchTmpUser(JnParam param) throws Exception;

    void insertSystemUserRoleManage(CmtnVO[] vos, ModelMap model) throws Exception;

    void deleteSystemUserRoleManage(CmtnVO[] vos, ModelMap model) throws Exception;

}
