package com.jnv.sm.menu.service.impl;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
import javax.annotation.Resource;

import static com.jnv.common.util.Constants.PARAM_MAP;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.menu.service.MenuManageDAO;
import com.jnv.sm.menu.service.MenuManageService;
import com.jnv.sm.vo.MenuManageVO;
import com.jnv.sm.vo.ProgramVO;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

@Service("menuManageService")
public class MenuManageServiceImpl implements MenuManageService {

    private static final Logger LOG = LoggerFactory.getLogger(MenuManageServiceImpl.class);

    @Resource(name = "menuManageDAO")
    private MenuManageDAO dao;

    @Override
    public List<MenuManageVO> selectMenuManageList(Map<String, ?> param) throws BusinessException {
        return dao.selectMenuManageList(param);
    }

    @Override
    public void saveMenu(List<MenuManageVO> menuList) throws BusinessException {
        try {
            for (MenuManageVO vo : menuList) {
                if ("1".equals(vo.getRowCheck())) {
                    switch (StringUtils.defaultString(vo.getRowStatus())) {
                        case "inserted":
                            ensureValidMenuItem(vo);
                            dao.insertMenu(vo);
                            break;
                        case "updated":
                            ensureValidMenuItem(vo);
                            dao.updateMenu(vo);
                            break;
                        case "deleted":
                            dao.deleteDescendentMenu(vo);
                            dao.deleteMenu(vo);
                            break;
                        default:
                            break;
                    }
                }
            }
        } catch (DataAccessException e) {
            SQLException sqlException = (SQLException) e.getCause();
            LOG.error("SQL error code: {}, state: {}, message: {}", sqlException.getErrorCode(),
                    sqlException.getSQLState(), sqlException.getLocalizedMessage());
            if (sqlException.getErrorCode() == -10007) {
                throw new BusinessException("errors.duplication", new Object[] { "field.menuId" });
            } else {
                throw new BusinessException("fail.common.sql",
                        new Object[] { sqlException.getErrorCode(), sqlException.getSQLState() });
            }
        }
    }

    private void ensureValidMenuItem(MenuManageVO item) {
        if (StringUtils.isBlank(item.getMenuId())) {
            throw new BusinessException("errors.required", new Object[] { "field.menuId" });
        }

        item.setMenuId(StringUtils.trim(item.getMenuId()));

        if (!Pattern.matches("[\\da-zA-Z\\-_]+", item.getMenuId())) {
            throw new BusinessException("errors.alphanum", new Object[] { "field.menuId" });
        }

        if (StringUtils.isBlank(item.getMenuNm())) {
            throw new BusinessException("errors.required", new Object[] { "field.menuNm" });
        }
        item.setMenuNm(StringUtils.trim(item.getMenuNm()));
    }

    @Override
    public List<ComboVO> selectModuleIdComboList(Map<String, ?> param) throws BusinessException {
        return dao.selectModuleIdComboList(param);
    }

    @Override
    public List<ComboVO> selectMenuTyComboList(Map<?, ?> map) {
        return dao.selectMenuTyComboList(map);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<ProgramVO> selectProgramSearchPopup(JnParam param) {
        return dao.selectProgramSearchPopup((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP));
    }

    @Override
    public String searchMenuId(MenuManageVO[] vos) {
        StringBuilder message = new StringBuilder();
        int cnt;
        for (MenuManageVO vo : vos) {
            if ("inserted".equals(vo.getRowType())) {
                cnt = dao.searchMenuId(vo.getMenuId());
                if (cnt > 0) {
                    if (message.length() > 0) {
                        message.append(", [").append(vo.getMenuId()).append("] 는 이미 등록된 메뉴ID입니다.");
                    } else {
                        message = new StringBuilder("[" + vo.getMenuId() + "] 는 이미 등록된 메뉴ID입니다.");
                    }
                }
            }
        }

        return message.toString();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<MenuManageVO> selectMenuManageAuthorList(JnParam param) {
        return dao.selectMenuManageAuthorList((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP));
    }

    @Override
    public List<ComboVO> getSystemIdCombo(Map<String, ?> searchMap) {
        return dao.getSystemIdCombo(searchMap);
    }

    @Override
    @SuppressWarnings("unchecked")
    public void cmMenuChangeMenuIdP(JnParam param) {
        dao.cmMenuChangeMenuIdP((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP));
    }
}
