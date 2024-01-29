package com.jnv.ast.resources.service;

import java.util.List;
import java.util.Map;

import com.jnv.ast.vo.ResourcesListVO;

public interface ResourcesListService {

    List<ResourcesListVO> getResourcesList(Map<String, Object> searchMap);

}
