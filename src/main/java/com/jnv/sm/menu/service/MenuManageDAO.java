package com.jnv.sm.menu.service;

import java.util.List;
import java.util.Map;

import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.vo.MenuManageVO;
import com.jnv.sm.vo.ProgramVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("menuManageDAO")
public interface MenuManageDAO {

    List<MenuManageVO> selectMenuManageList(Map<String, ?> map);

    void insertMenu(MenuManageVO vo);

    void updateMenu(MenuManageVO vo);

    void deleteMenu(MenuManageVO vo);

    List<ComboVO> selectModuleIdComboList(Map<String, ?> map);

    List<ComboVO> selectMenuTyComboList(Map<?, ?> map);

    List<ProgramVO> selectProgramSearchPopup(Map<String, ?> map);

    int searchMenuId(String string);

    List<MenuManageVO> selectMenuManageAuthorList(Map<String, ?> map);

    void cmMenuChangeMenuIdP(Map<String, ?> map);

    void deleteDescendentMenu(MenuManageVO item);
    
    List<ComboVO> getSystemIdCombo(Map<String, ?> searchMap);
}
