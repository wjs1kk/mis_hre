package com.jnv.common.attach.service;

import java.util.List;
import java.util.Map;

import com.jnv.common.vo.CmnFileVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("cmnFileDAO")
public interface CmnFileDAO {

    List<CmnFileVO> getList(Map<String, ?> params);

    void setFile(CmnFileVO item);

    void updateFile(CmnFileVO item);

    void deleteFile(CmnFileVO item);
}
