package com.jnv.ast.resources.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.ast.vo.ResourcesAddVO;
import com.jnv.ast.vo.ResourcesDetailAddVO;

@Mapper("resourcesManageDAO")
public interface ResourcesManageDAO {

    ResourcesAddVO getResourcesItem(Map<String, Object> params);

    List<ResourcesDetailAddVO> getResourcesDetailItem(Map<String, Object> params);

    void insertResourcesManage(ResourcesAddVO resourcesAddVO);

    void updateResourcesManage(ResourcesAddVO resourcesAddVO);

    // 자원 등록 삭제
    void deleteResourcesManage(ResourcesAddVO resourcesAddVO);

    void insertDetailResManage(ResourcesDetailAddVO resDetailAddVO);

    void updateDetailResManage(ResourcesDetailAddVO resDetailAddVO);

    // 자원 상세정보 삭제
    void deleteDetailResManage(ResourcesDetailAddVO resDetailAddVO);

    // 자원 상세정보 행 삭제
    void deleteOneDetailResManage(ResourcesDetailAddVO resDetailAddVO);

}
