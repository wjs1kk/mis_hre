package com.jnv.sm.role.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;
import static com.jnv.common.util.Constants.ROW_TYPE_DELETED;
import static com.jnv.common.util.Constants.ROW_TYPE_INSERTED;
import static com.jnv.common.util.Constants.ROW_TYPE_UPDATED;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.jnv.jncore.vo.ComboVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.sm.role.service.RoleManageDAO;
import com.jnv.sm.role.service.RoleManageService;
import com.jnv.sm.vo.ModuleComboVO;
import com.jnv.sm.vo.RoleManageVO;

@Service("roleManageService")
public class RoleManageServiceImpl implements RoleManageService {

    @Resource(name = "roleManageDAO")
    private RoleManageDAO dao;

    @Override
    public List<RoleManageVO> getRoleSearch(Map<String, Object> paramMap) throws Exception {
        return dao.getRoleSearch(paramMap);
    }

    @Override
    public List<ModuleComboVO> getModuleCombo(Map<String, Object> paramMap) throws Exception {
        return dao.getModuleCombo(paramMap);
    }

    @Override
    public String setRoleList(List<RoleManageVO> roleList) throws Exception {
        String rmsg = RESULT_FAILURE;

        for (RoleManageVO role : roleList) {
            String rowCheck = StringUtils.defaultString(role.getRowCheck());
            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(role.getRowStatus());
                switch (rowStatus) {
                case ROW_TYPE_INSERTED:
                    // 중복체크
                    int cntDupl = dao.getDuplicatedKeyCnt(role);
                    if (cntDupl > 0) {
                        throw new BusinessException("errors.duplication", new String[] { "field.roleCode" });
                    }
                    dao.insertRole(role);
                    break;
                case ROW_TYPE_UPDATED:
                    dao.updateRole(role);
                    break;
                case ROW_TYPE_DELETED:
                    dao.deleteRole(role);
                    //dao.deleteRoleFamily(Role);
                    break;
                default:
                    break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

    /*@Override
    public List<RoleManageVO> getChildRoleSearch(Map<String, Object> paramMap) throws Exception {
        return dao.getChildRoleSearch(paramMap);
    }

    @Override
    public List<RoleManageVO> getParentsRoleSearch(Map<String, Object> paramMap) throws Exception {
        return dao.getParentsRoleSearch(paramMap);
    }

    @Override
    public List<RoleManageVO> getRolePopupSearch(Map<String, Object> paramMap) throws Exception {
        return dao.getRolePopupSearch(paramMap);
    }

    @Override
    public String setRolePopupInfo(List<RoleManageVO> roleList) throws Exception {
        String rmsg = RESULT_FAILURE;
        for (RoleManageVO Role : roleList) {
            String rowCheck = StringUtils.defaultString(Role.getRowCheck());
            if ("1".equals(rowCheck)) {
                dao.insertPopupRole(Role);
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

    @Override
    public String deleteChildRole(List<RoleManageVO> roleList) throws Exception {
        String rmsg = RESULT_FAILURE;
        for (RoleManageVO Role : roleList) {
            String rowCheck = StringUtils.defaultString(Role.getRowCheck());
            if ("1".equals(rowCheck)) {
                dao.deleteChildPopupRole(Role);
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

    @Override
    public String deleteParentsRole(List<RoleManageVO> roleList) throws Exception {
        String rmsg = RESULT_FAILURE;
        for (RoleManageVO Role : roleList) {
            String rowCheck = StringUtils.defaultString(Role.getRowCheck());
            if ("1".equals(rowCheck)) {
                dao.deleteParentsPopupRole(Role);
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }*/

}
