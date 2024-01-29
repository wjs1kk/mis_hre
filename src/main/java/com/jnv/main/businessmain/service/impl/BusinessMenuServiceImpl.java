package com.jnv.main.businessmain.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import static com.jnv.common.util.Constants.PARAM_MAP;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.security.UserVO;
import com.jnv.main.businessmain.service.BusinessMenuDAO;
import com.jnv.main.businessmain.service.BusinessMenuService;
import com.jnv.main.vo.CompLangVO;
import com.jnv.main.vo.MenuVO;
import com.jnv.main.vo.MessageVO;
import com.jnv.sm.code.service.CommonCodeManageService;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("businessMenuService")
@Transactional
public class BusinessMenuServiceImpl implements BusinessMenuService {

    @Resource(name = "businessMenuDAO")
    private BusinessMenuDAO dao;

    @Resource(name = "commonCodeManageService")
    private CommonCodeManageService codeService;

    @Value("#{jnframeProp['sysId']}")
    private String sysId;

    /*
     * (non-Javadoc)
     *
     * @see
     * com.jnv.main.pt.businessmenu.service.BusinessMenuService#selectTreeMenu(java.
     * util.HashMap, org.springframework.ui.ModelMap)
     */
    @Override
    public List<MenuVO> selectTreeMenu(Map<String, ?> param) {
        Map<String, Object> map = getSessionParams();
        return dao.selectNexacroMenuList(map);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<MenuVO> selectMenuSearch(JnParam param) {
        return dao.selectNexacroMenuList((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP));
    }

    @SuppressWarnings("unchecked")
    @Override
    public String selectMenuSearchOftenUseCount(JnParam param) throws EgovBizException {
        return dao.selectMenuSearchOftenUseCount((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP));
    }

    @SuppressWarnings("unchecked")
    @Override
    public String selectMenuPath(JnParam param) throws EgovBizException {
        return dao.selectMenuPath((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP));
    }

    @SuppressWarnings("unchecked")
    @Override
    public boolean comparePassword(JnParam param) {
        try {
            if ("1".equals(dao.selectPassword((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP))))
                return true;
        } catch (EgovBizException e) {
            e.printStackTrace();
        }
        return false;
    }

    @SuppressWarnings("unchecked")
    @Override
    public void passwordChange(JnParam param) throws EgovBizException {
        dao.passwordChange((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP));
    }

    @Override
    public List<MenuVO> selectNexacroMenuList() {
        Map<String, Object> params = getSessionParams();

        return dao.selectNexacroMenuList(params);
    }

    @Override
    public List<MenuVO> selectNexacroMenuLangList(String lang) {
        Map<String, Object> params = getSessionParams();
        params.put("lang", lang);

        return dao.selectNexacroMenuLangList(params);
    }

    @Override
    public List<MessageVO> selectNexacroMessageList() {
        return dao.selectNexacroMessageList();
    }

    @Override
    public List<CompLangVO> selectNexacroCompLangList() {
        return dao.selectNexacroCompLangList();
    }

    @Override
    public void setFavoriteMenu(Map<String, Object> map) {
        String favoriteYn = (String) map.get("setFavorite");

        if ("Y".equals(favoriteYn)) {
            dao.setFavoriteMenu(map);
        } else if ("N".equals(favoriteYn)) {
            dao.unsetFavoriteMenu(map);
        }
    }

    @Override
    public List<MenuVO> getFavoriteMenu() {
        Map<String, Object> params = getSessionParams();

        return dao.selectFavoriteMenuList(params);
    }

    private Map<String, Object> getSessionParams() {
        Map<String, Object> params = new HashMap<>();
        List<String> roles = EgovUserDetailsHelper.getAuthorities();
        params.put("USER_ROLES", roles);

        if (Boolean.TRUE.equals(EgovUserDetailsHelper.isAuthenticated())) {
            UserVO user = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
            params.put("sessionSysId", user.getSysId());
            params.put("userId", user.getUserId());
        } else {
            params.put("sessionSysId", sysId);
        }
        return params;
    }
}
