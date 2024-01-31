package com.jnv.mis.hre.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;
import static com.jnv.common.util.Constants.ROW_TYPE_DELETED;
import static com.jnv.common.util.Constants.ROW_TYPE_INSERTED;
import static com.jnv.common.util.Constants.ROW_TYPE_UPDATED;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.mis.hre.service.Hre3050DAO;
import com.jnv.mis.hre.service.Hre3050Service;
import com.jnv.mis.hre.vo.Hre3050VO;

@Service("hre3050Service")
public class Hre3050ServiceImpl implements Hre3050Service{
    
    @Resource(name = "hre3050DAO")
    private Hre3050DAO dao;

    //리스트 조회
    @Override
    public List<Hre3050VO> getEvalEmpList(Map<String, Object> paramMap) throws Exception {
        // TODO Auto-generated method stub
        return dao.getEvalEmpList(paramMap);
    }

    @Override
    public String setEvalEmpList(List<Hre3050VO> evalEmpList) throws Exception {
        // TODO Auto-generated method stub
        return null;
    }


    
    

}
