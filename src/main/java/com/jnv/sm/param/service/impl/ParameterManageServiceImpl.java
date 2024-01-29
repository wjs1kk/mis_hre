package com.jnv.sm.param.service.impl;

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
import org.springframework.transaction.annotation.Transactional;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.sm.param.service.ParameterManageDAO;
import com.jnv.sm.param.service.ParameterManageService;
import com.jnv.sm.vo.ParameterManageVO;

@Service("parameterManageService")
@Transactional
public class ParameterManageServiceImpl implements ParameterManageService {

    @Resource(name = "parameterManageDAO")
    private ParameterManageDAO dao;

    @Override
    public List<ParameterManageVO> getParam(Map<String, Object> paramMap) throws Exception {
        return dao.getParam(paramMap);
    }

    @Override
    public String setParam(List<ParameterManageVO> ParamList) throws Exception {
        String rmsg = RESULT_FAILURE;

        for (ParameterManageVO param : ParamList) {
            String rowCheck = StringUtils.defaultString(param.getRowCheck());
            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(param.getRowStatus());
                switch (rowStatus) {
                case ROW_TYPE_INSERTED:
                    // 중복체크
                    int cntDupl = dao.getDuplicatedKeyCnt(param);
                    if (cntDupl > 0) {
                        throw new BusinessException("errors.duplication", new String[] { "field.paramId" });
                    }
                    dao.insertParam(param);
                    break;
                case ROW_TYPE_UPDATED:
                    dao.updateParam(param);
                    break;
                case ROW_TYPE_DELETED:
                    dao.deleteParam(param);
                    break;
                default:
                    break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

}
