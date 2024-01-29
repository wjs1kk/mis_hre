package com.jnv.main.businessmain.service;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.jnv.main.vo.CompLangVO;
import com.jnv.main.vo.MenuVO;
import com.jnv.main.vo.MessageVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("businessMenuDAO")
public interface BusinessMenuDAO {

    /**
     * 권한을 가진 menu tree조회
     *
     * @param  condMap
     *
     * @return
     *
     * @throws EgovBizException
     */
    List<MenuVO> selectMenuTreeByPath(Map<String, ?> param) throws EgovBizException;

    List<MenuVO> selectMenuSearch(Map<String, ?> map) throws EgovBizException;

    String selectMenuSearchOftenUseCount(Map<String, ?> map) throws EgovBizException;

    String selectMenuPath(Map<String, ?> map) throws EgovBizException;

    String selectPassword(Map<String, ?> map) throws EgovBizException;

    void passwordChange(Map<String, ?> map) throws EgovBizException;

    List<Map<String, String>> selectEquipList();

    List<MenuVO> selectNexacroMenuList(Map<String, ?> param) throws DataAccessException;

    List<MenuVO> selectNexacroMenuLangList(Map<String, ?> param) throws DataAccessException;

    List<MessageVO> selectNexacroMessageList() throws DataAccessException;

    List<CompLangVO> selectNexacroCompLangList() throws DataAccessException;

    void setFavoriteMenu(Map<String, Object> map);
    void unsetFavoriteMenu(Map<String, Object> map);

    List<MenuVO> selectFavoriteMenuList(Map<String, ?> map);
}
