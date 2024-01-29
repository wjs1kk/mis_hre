package com.jnv.sm.role.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.jnv.sm.role.service.RoleMenuManageDAO;
import com.jnv.sm.role.service.RoleMenuManageService;
import com.jnv.sm.vo.RoleMenuManageVO;

@Service("roleMenuManageService")
public class RoleMenuManageServiceImpl implements RoleMenuManageService {

    @Resource(name = "roleMenuManageDAO")
    private RoleMenuManageDAO dao;

    @Override
    public List<RoleMenuManageVO> getRole(Map<String, Object> paramMap) throws Exception {
        return dao.getRole(paramMap);
    }

    @Override
    public List<RoleMenuManageVO> getRoleMenuSearch(Map<String, Object> paramMap) throws Exception {
        return dao.getRoleMenuSearch(paramMap);
    }

    @Override
    public String setRoleMenu(List<RoleMenuManageVO> menuRoleList) throws Exception {
        String rmsg = RESULT_FAILURE;

        for (RoleMenuManageVO menu : menuRoleList) {
            String rowStatus = StringUtils.defaultString(menu.getRowStatus());
            if ("updated".equals(rowStatus)) {
                if (menu.getFuncAt().equals("Y")) {
                    switch (menu.getAuthYn()) {
                    case "Y":
                        saveRoleMenu(menu);
                        break;
                    case "N":
                        dao.deleteRoleMenuFunc(menu);
                        break;
                    default:
                        break;
                    }
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

    private void saveRoleMenu(RoleMenuManageVO menu) {
        if ("Y".equals(menu.getLevel())) {
            menu.setTreeUpper(menu.getTreeKey());
        }

        int duplicateCnt = dao.getDuplicateRoleMenuFunc(menu);
        if (duplicateCnt == 0) {
            dao.insertRoleMenuFunc(menu);
        }
    }

}
