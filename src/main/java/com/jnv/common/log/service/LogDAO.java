 package com.jnv.common.log.service;

import com.jnv.common.vo.LogVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("logDAO")
public interface LogDAO {

    void insertExceptionLog(LogVO logVO);

}
