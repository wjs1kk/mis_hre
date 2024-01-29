package com.jnv.ast.resources.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.ast.vo.ResourcesRqstListVO;

@Mapper("resourcesRqstListDAO")
public interface ResourcesRqstListDAO {

    List<ResourcesRqstListVO> getAstRqst(Map<String, Object> searchMap);

    void getAstRqstApply(ResourcesRqstListVO vo);

}
