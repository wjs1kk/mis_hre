package com.jnv.hlp.directorManage.service;

import java.util.List;
import java.util.Map;

import com.jnv.hlp.vo.DirectorManageVO;

public interface DirectorManageService {

    List<DirectorManageVO> getDirectorManageList(Map<String, ?> params);

    void saveDirectorManageList(List<DirectorManageVO> list);

    // 팝업 조회
//  List<ProgramVO> selectProgramSearchPopup(JnParam param) throws EgovBizException;
//  List<OrgnztDeptVO> getDeptPopupList(Map<String, Object> searchMap);
}
