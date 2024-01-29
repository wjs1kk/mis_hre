package com.jnv.ast.resources.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.ast.resources.service.ResourcesStatusDAO;
import com.jnv.ast.resources.service.ResourcesStatusService;
import com.jnv.ast.vo.ResourcesAddVO;
import com.jnv.ast.vo.ResourcesDetailAddVO;
import com.jnv.ast.vo.ResourcesRqstListVO;

@Service("resourcesStatusService")
@Transactional
public class ResourcesStatusServiceImpl implements ResourcesStatusService {

    @Resource(name = "resourcesStatusDAO")
    private ResourcesStatusDAO dao;

    @Override
    public List<ResourcesRqstListVO> getResourcesStatusList(Map<String, Object> searchMap) {
        return dao.getResourcesStatusList(searchMap);
    }

    @Override
    public String getResourcesUpdate(ResourcesAddVO vo) {
        String rmsg = RESULT_FAILURE;

        dao.updateResourcesManage(vo);
        rmsg = RESULT_SUCCESS;

        return rmsg;
    }

    @Override
    public String getResourcesUpdate2(ResourcesAddVO vo, List<ResourcesDetailAddVO> resDetailList) {
        String rmsg = RESULT_FAILURE;
        for (ResourcesDetailAddVO addVo : resDetailList) {
            if ("1".equals(addVo.getRowCheck())) {
                dao.updateDetailResManage(vo);
                dao.updateDetailResManage2(vo);
            }
            rmsg = RESULT_SUCCESS;
        }
        return rmsg;
    }

}
