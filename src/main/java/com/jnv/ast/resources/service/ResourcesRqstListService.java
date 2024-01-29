package com.jnv.ast.resources.service;

import java.util.List;
import java.util.Map;

import com.jnv.ast.vo.ResourcesRqstListVO;

public interface ResourcesRqstListService {

    List<ResourcesRqstListVO> getAstRqst(Map<String, Object> searchMap);

    String getAstRqstApply(List<ResourcesRqstListVO> resDetailList);

}
