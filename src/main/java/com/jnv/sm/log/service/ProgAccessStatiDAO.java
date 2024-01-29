package com.jnv.sm.log.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.AccessStatisticsVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("progAccessStatiDAO")
public interface ProgAccessStatiDAO {
    List<AccessStatisticsVO> selectProgAccess(Map<String, ?> map);
}
