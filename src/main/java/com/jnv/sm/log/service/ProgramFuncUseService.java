package com.jnv.sm.log.service;

import com.jnv.sm.vo.ProgramFuncUseVO;

import java.util.List;
import java.util.Map;

public interface ProgramFuncUseService {

    List<ProgramFuncUseVO> getUserByMenuStat(Map<String, Object> params);

    List<ProgramFuncUseVO> getTxByMenuStat(Map<String, Object> params);

    List<ProgramFuncUseVO> getMenuByUserStat(Map<String, Object> params);

    List<ProgramFuncUseVO> getTxByUserStat(Map<String, Object> params);

}
