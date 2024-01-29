package com.jnv.ast.resources.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.ast.vo.ResourcesAddVO;
import com.jnv.ast.vo.ResourcesRqstListVO;

@Mapper("resourcesStatusDAO")
public interface ResourcesStatusDAO {

    List<ResourcesRqstListVO> getResourcesStatusList(Map<String, Object> searchMap);

    void updateResourcesManage(ResourcesAddVO vo);

    void updateDetailResManage(ResourcesAddVO vo);

    void updateDetailResManage2(ResourcesAddVO vo);

}
