package com.jnv.common.attach.service;

import java.util.List;
import java.util.Map;

import com.jnv.common.vo.CmnFileVO;

public interface CmnFileService {

    List<CmnFileVO> getList(Map<String, Object> params);

    void setList(List<CmnFileVO> fileList);
}
