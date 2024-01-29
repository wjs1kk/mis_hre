package com.jnv.sm.role.service.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.sm.role.service.SystemUserRoleManageDAO;
import com.jnv.sm.role.service.SystemUserRoleManageService;
import com.jnv.sm.vo.CmtnVO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;

@Service("systemUserRoleManageService")
@Transactional
public class SystemUserRoleManageServiceImpl implements SystemUserRoleManageService {

    @Resource(name = "systemUserRoleManageDAO")
    private SystemUserRoleManageDAO dao;

    @Override
    public List<CmtnVO> searchTmpUser(JnParam param) {
        return dao.searchTmpUser((Map<String, ?>) param.getDatasetFirstItem("paramMap"));
    }

    @Override
    public void insertSystemUserRoleManage(CmtnVO[] vos, ModelMap model) {
        for (CmtnVO vo : vos) {
            switch (vo.getRowType()) {
                case "inserted":
                    dao.insertSystemUserRoleManage(vo);
                    dao.insertSystemMemberRoleManage(vo);
                    break;
                case "updated":
                    dao.updateSystemUserRoleManage(vo);
                    dao.updateSystemMemberRoleManage(vo);
                    break;
                default:
                    break;
            }
        }
    }

    @Override
    public void deleteSystemUserRoleManage(CmtnVO[] vos, ModelMap model) {
        for (CmtnVO vo : vos) {
            dao.deleteSystemUserRoleManage(vo);
            dao.deleteSystemMemberRoleManage(vo);
            dao.deleteSystemUserRole(vo);
        }
    }

}
