package com.jnv.ast.resources.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.ast.resources.service.ResourcesManageDAO;
import com.jnv.ast.resources.service.ResourcesManageService;
import com.jnv.ast.vo.ResourcesAddVO;
import com.jnv.ast.vo.ResourcesDetailAddVO;
import com.jnv.common.seq.service.IdGeneratorService;

@Service("resourcesManageService")
@Transactional
public class ResourcesManageServiceImpl implements ResourcesManageService {

    @Resource(name = "resourcesManageDAO")
    private ResourcesManageDAO dao;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGen;

    /**
     * 자원 등록 조회
     */
    @Override
    public ResourcesAddVO getResourcesItem(Map<String, Object> params) {
        return dao.getResourcesItem(params);
    }

    /**
     * 자원 상세정보 조회
     */
    @Override
    public List<ResourcesDetailAddVO> getResourcesDetailItem(Map<String, Object> params) {
        return dao.getResourcesDetailItem(params);
    }

    /**
     * 자원 정보 저장
     *
     * @return
     */
    @Override
    public String setResourcesManage(ResourcesAddVO resourcesAddVO) {
        String rmsg = RESULT_FAILURE;

        // 요청번호가 없으면
        if (StringUtils.isEmpty(resourcesAddVO.getAstNo())) {
            // 요청번호 만들어줌
            String astNo = idGen.nextIdFor("astNo");
            resourcesAddVO.setAstNo(astNo);
            dao.insertResourcesManage(resourcesAddVO);
        } else {
            dao.updateResourcesManage(resourcesAddVO);
        }
        rmsg = RESULT_SUCCESS;
        return rmsg;
    }

    /**
     * 자원 전체 삭제
     */
    @Override
    public void deleteAllResourcesManage(ResourcesDetailAddVO resVO, ResourcesAddVO vo) {
        dao.deleteDetailResManage(resVO);
        dao.deleteResourcesManage(vo);
    }

    /**
     * 자원 상세 정보 저장 및 삭제
     */
    @Override
    public String setDetailResManage(ResourcesAddVO addVo, List<ResourcesDetailAddVO> resDetailAddList) {

        String rmsg = RESULT_FAILURE;
        String astNo = addVo.getAstNo();
        for (ResourcesDetailAddVO vo : resDetailAddList) {
            vo.setAstNo(astNo);
            if ("1".equals(vo.getRowCheck())) {
                switch (StringUtils.defaultString(vo.getRowStatus())) {
                    case "inserted":
                        dao.insertDetailResManage(vo);
                        break;
                    case "updated":
                        dao.updateDetailResManage(vo);
                        break;
                    case "deleted":
                        dao.deleteOneDetailResManage(vo);
                        break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

}