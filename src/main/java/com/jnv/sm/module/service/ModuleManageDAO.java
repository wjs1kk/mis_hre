package com.jnv.sm.module.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.ModuleManageVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("moduleManageDAO")
public interface ModuleManageDAO {

    List<ModuleManageVO> getModuleManageList(Map<String, Object> params);

    void selectModuleManage(ModuleManageVO moduleManageVO);

    void insertModuleManage(ModuleManageVO moduleManageVO);

    void updateModuleManage(ModuleManageVO moduleManageVO);

    void deleteModuleManage(ModuleManageVO moduleManageVO);

}
