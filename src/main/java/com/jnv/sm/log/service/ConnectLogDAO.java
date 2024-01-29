package com.jnv.sm.log.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.ConnectLogVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("connectLogDAO")
public interface ConnectLogDAO {

    List<ConnectLogVO> selectConnectLog(Map<String, ?> map);

}
