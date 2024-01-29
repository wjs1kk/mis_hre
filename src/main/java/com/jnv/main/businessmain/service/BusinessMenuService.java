package com.jnv.main.businessmain.service;

import java.util.List;
import java.util.Map;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.main.vo.CompLangVO;
import com.jnv.main.vo.MenuVO;
import com.jnv.main.vo.MessageVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface BusinessMenuService {

    /**
     * menu tree조회
     *
     * @param  commandMap
     *
     * @return
     *
     * @throws EgovBizException
     */
    List<MenuVO> selectTreeMenu(Map<String, ?> param) throws EgovBizException;

    List<MenuVO> selectMenuSearch(JnParam param) throws EgovBizException;

    String selectMenuSearchOftenUseCount(JnParam param) throws EgovBizException;

    String selectMenuPath(JnParam param) throws EgovBizException;

    boolean comparePassword(JnParam param) throws EgovBizException;

    void passwordChange(JnParam param) throws EgovBizException;

    List<MenuVO> selectNexacroMenuList();
    List<MenuVO> selectNexacroMenuLangList(String lang);

    List<MessageVO> selectNexacroMessageList();

    List<CompLangVO> selectNexacroCompLangList();

    void setFavoriteMenu(Map<String, Object> map);

    List<MenuVO> getFavoriteMenu();
}
