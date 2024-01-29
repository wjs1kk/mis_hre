package com.jnv.hlp.directorManage.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.hlp.vo.DirectorManageVO;

@Mapper("directorManageDAO")
public interface DirectorManageDAO {

    List<DirectorManageVO> getDirectorManageList(Map<String, ?> params);

    void insertDirectorManageItem(DirectorManageVO item);

    void updateDirectorManageItem(DirectorManageVO item);

    void deleteDirectorManageItem(DirectorManageVO item);

    int getDuplicateKeyCnt(DirectorManageVO item); // 중복체크

}
