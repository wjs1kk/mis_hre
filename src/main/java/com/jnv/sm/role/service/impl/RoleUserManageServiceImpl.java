package com.jnv.sm.role.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;
import static com.jnv.common.util.Constants.ROW_TYPE_DELETED;
import static com.jnv.common.util.Constants.ROW_TYPE_INSERTED;
import static com.jnv.common.util.Constants.ROW_TYPE_UPDATED;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.jnv.jncore.security.UserVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.jnv.sm.log.service.RoleUserLogDAO;
import com.jnv.sm.role.service.RoleManageDAO;
import com.jnv.sm.role.service.RoleUserManageDAO;
import com.jnv.sm.role.service.RoleUserManageService;
import com.jnv.sm.vo.RoleManageVO;
import com.jnv.sm.vo.RoleUserManageVO;

@Service("roleUserManageService")
public class RoleUserManageServiceImpl implements RoleUserManageService {

    @Resource(name = "roleUserManageDAO")
    private RoleUserManageDAO dao;

    @Resource(name = "roleUserLogDAO")
    private RoleUserLogDAO logDao;

    @Resource(name = "roleManageDAO")
    private RoleManageDAO roleDao;

    @Override
    public List<RoleManageVO> getRoleSearch(Map<String, Object> paramMap) {
        return roleDao.getRoleSearch(paramMap);
    }

    @Override
    public List<RoleUserManageVO> getRoleUserSearch(Map<String, Object> paramMap) throws Exception {
        return dao.getRoleUserSearch(paramMap);
    }

    @Override
    public List<RoleUserManageVO> getUserList(Map<String, Object> paramMap) throws Exception {
        return dao.getUserList(paramMap);
    }

    @Override
    public String setRoleUser(List<RoleUserManageVO> userList) throws Exception {
        String rmsg = RESULT_FAILURE;

        for (RoleUserManageVO roleUser : userList) {
            String rowCheck = StringUtils.defaultString(roleUser.getRowCheck());
            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(roleUser.getRowStatus());
                switch (rowStatus) {
                case ROW_TYPE_INSERTED:
                    dao.insertRoleUser(roleUser);
                    roleUser.setProcessTy("GRANT");
                    logDao.insertRoleLog(roleUser);
                    break;
                case ROW_TYPE_UPDATED:
                    dao.updateRoleUser(roleUser);
                    // LogDao.updateRoleLog(Role); 로그 키값 없어서 보류
                    break;
                case ROW_TYPE_DELETED:
                    dao.deleteRoleUser(roleUser);
                    roleUser.setProcessTy("REVOKE");
                    logDao.insertRoleLog(roleUser);
                    break;
                default:
                    break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

}
