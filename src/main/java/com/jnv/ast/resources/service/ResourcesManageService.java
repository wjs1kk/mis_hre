package com.jnv.ast.resources.service;

import java.util.List;
import java.util.Map;

import com.jnv.ast.vo.ResourcesAddVO;
import com.jnv.ast.vo.ResourcesDetailAddVO;

public interface ResourcesManageService {

    // 자원등록 상세조회
    ResourcesAddVO getResourcesItem(Map<String, Object> params);

    // 상세정보 상세조회
    List<ResourcesDetailAddVO> getResourcesDetailItem(Map<String, Object> params);

    // 자원 등록 입력 및 저장
    String setResourcesManage(ResourcesAddVO vo);

    // 자원 상세 정보 저장 및 삭제
    String setDetailResManage(ResourcesAddVO vo, List<ResourcesDetailAddVO> dtlVO);

    // 자원 정보 전부 삭제
    void deleteAllResourcesManage(ResourcesDetailAddVO resVO, ResourcesAddVO vo);

}
