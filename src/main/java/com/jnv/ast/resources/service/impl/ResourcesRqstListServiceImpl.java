package com.jnv.ast.resources.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.ast.resources.service.ResourcesListDAO;
import com.jnv.ast.resources.service.ResourcesListService;
import com.jnv.ast.vo.ResourcesListVO;

@Service("resourcesListService")
@Transactional
public class ResourcesRqstListServiceImpl implements ResourcesListService {

    @Resource(name = "resourcesListDAO")
    private ResourcesListDAO dao;

    /**
     * 자원 목록 조회
     */
    @Override
    public List<ResourcesListVO> getResourcesList(Map<String, Object> searchMap) {
        return dao.getResourcesList(searchMap);
    }

}
