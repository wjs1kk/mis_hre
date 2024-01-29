package com.jnv.sm.user.service.impl;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.common.seq.service.IdGeneratorService;
import com.jnv.common.util.Constants;
import com.jnv.sm.user.service.UserManageDAO;
import com.jnv.sm.user.service.UserManageService;
import com.jnv.sm.vo.MemberRegistrationApprovalVO;
import com.jnv.sm.vo.UserManageVO;

@Service("userManageService")
@Transactional
public class UserManageServiceImpl implements UserManageService {

    @Resource(name = "userManageDAO")
    private UserManageDAO dao;

    @Resource(name = "passwordEncoder")
    private PasswordEncoder passwordEncoder;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGenerator;

    @Override
    public List<UserManageVO> getUserManageList(Map<String, Object> paramMap) {
        return dao.getUserManageList(paramMap);
    }

    @Override
    public UserManageVO getUser(Map<String, Object> params) {
        return dao.getUserManageItem(params);
    }

    @Override
    public String setUser(UserManageVO user) {
        String rmsg;

        try {
            if (Constants.ROW_TYPE_INSERTED.equals(user.getRowStatus())) {
                if (dao.getMemberIdExists(user)) {
                    return "memberIdExists";
                }

                if (!Objects.equals(user.getPasswd(), user.getPasswdCheck())) {
                    return "failed";
                }

                String userId = idGenerator.nextIdFor("userId");
                user.setUserId(userId);

                String encodedPasswd = passwordEncoder.encode(user.getPasswd());
                user.setPasswd(encodedPasswd);
                dao.insertUserManage(user);
                dao.insertMember(user);
            } else if (Constants.ROW_TYPE_UPDATED.equals(user.getRowStatus())) {
                if (StringUtils.isNotEmpty(user.getPasswd())) {
                    String encodedPasswd = passwordEncoder.encode(user.getPasswd());
                    user.setPasswd(encodedPasswd);
                }

                dao.updateUserManage(user);
                dao.updateMember(user);
            }
            rmsg = "success";
        } catch (Exception e) {
            rmsg = "failed";
        }
        return rmsg;
    }

    @Override
    public String deleteUserList(List<UserManageVO> userManageList) {
        String rmsg;
        try {
            for (UserManageVO item : userManageList) {
                if ("1".equals(item.getRowCheck()) || "true".equals(item.getRowCheck())) {
                    dao.deleteUserManage(item);
                    dao.deleteMember(item);
                }
            }
            rmsg = "success";
        } catch (Exception e) {
            rmsg = "failed";
        }
        return rmsg;
    }

    @Override
    public MemberRegistrationApprovalVO getRegistInfo(Map<String, ?> params) {
        return dao.getRegistInfo(params);
    }

    @Override
    public void updateRegistApprovalStatus(MemberRegistrationApprovalVO vo, String status) {
        if ("REJECT".equals(status)) {
            UserManageVO userManageVO = new UserManageVO();
            userManageVO.setUserId(vo.getUserId());
            dao.deleteUserManage(userManageVO);
            dao.deleteMember(userManageVO);
        } else {
            vo.setJoinAprvStts(status);
            dao.updateRegistStatus(vo);
            dao.updateUserStatus(vo);
        }
    }
}
