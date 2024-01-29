package com.jnv.ast.resources.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.ast.vo.ResourcesListVO;

@Mapper("resourcesListDAO")
public interface ResourcesListDAO {

    List<ResourcesListVO> getResourcesList(Map<String, Object> searchMap);

}
