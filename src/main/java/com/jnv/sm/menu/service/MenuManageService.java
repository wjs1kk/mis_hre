package com.jnv.sm.menu.service;

import java.util.List;
import java.util.Map;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.vo.MenuManageVO;
import com.jnv.sm.vo.ProgramVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface MenuManageService {

    List<MenuManageVO> selectMenuManageList(Map<String, ?> param) throws BusinessException;

    void saveMenu(List<MenuManageVO> vos) throws BusinessException;

    List<ComboVO> selectModuleIdComboList(Map<String, ?> param) throws BusinessException;

    List<ComboVO> selectMenuTyComboList(Map<?, ?> commandMap) throws EgovBizException;

    List<ProgramVO> selectProgramSearchPopup(JnParam param) throws EgovBizException;

    String searchMenuId(MenuManageVO[] vo) throws EgovBizException;

    List<MenuManageVO> selectMenuManageAuthorList(JnParam param) throws EgovBizException;

    void cmMenuChangeMenuIdP(JnParam param) throws EgovBizException;
    
    List<ComboVO> getSystemIdCombo(Map<String, ?> searchMap);
}
