package com.jnv.sm.log.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.ProgramFuncUseVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("programFuncUseDAO")
public interface ProgramFuncUseDAO {

    List<ProgramFuncUseVO> getUserByMenuStat(Map<String, ?> params);

    List<ProgramFuncUseVO> getTxByMenuStat(Map<String, ?> params);

    List<ProgramFuncUseVO> getMenuByUserStat(Map<String, ?> params);

    List<ProgramFuncUseVO> getTxByUserStat(Map<String, ?> params);
}
