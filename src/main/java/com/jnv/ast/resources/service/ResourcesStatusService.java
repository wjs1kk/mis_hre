package com.jnv.ast.resources.service;

import java.util.List;
import java.util.Map;

import com.jnv.ast.vo.ResourcesAddVO;
import com.jnv.ast.vo.ResourcesDetailAddVO;
import com.jnv.ast.vo.ResourcesRqstListVO;

public interface ResourcesStatusService {

    List<ResourcesRqstListVO> getResourcesStatusList(Map<String, Object> searchMap);

    String getResourcesUpdate(ResourcesAddVO vo);

    String getResourcesUpdate2(ResourcesAddVO vo, List<ResourcesDetailAddVO> resDetailList);

}
