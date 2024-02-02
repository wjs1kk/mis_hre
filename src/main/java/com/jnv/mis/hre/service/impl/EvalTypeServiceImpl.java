package com.jnv.mis.hre.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;
import static com.jnv.common.util.Constants.ROW_TYPE_DELETED;
import static com.jnv.common.util.Constants.ROW_TYPE_INSERTED;
import static com.jnv.common.util.Constants.ROW_TYPE_UPDATED;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.jnv.mis.hre.service.EvalTypeDAO;
import com.jnv.mis.hre.service.EvalTypeService;
import com.jnv.mis.hre.vo.EvalTypeVO;

@Service("evalTypeService")
public class EvalTypeServiceImpl implements EvalTypeService {

	@Resource(name = "evalTypeDAO")
    private EvalTypeDAO dao;

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");

	@Override
	public List<EvalTypeVO> getEvalTypeList(Map<String, Object> paramMap) throws Exception {
		return dao.getEvalTypeList(paramMap);
	}

	@Override
	public String setEvalTypeList(List<EvalTypeVO> evalTypeList) throws Exception {
		String rmsg = RESULT_FAILURE;

        for (EvalTypeVO evalType : evalTypeList) {
            String rowCheck = StringUtils.defaultString(evalType.getRowCheck());

            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(evalType.getRowStatus());

                switch (rowStatus) {
                case ROW_TYPE_INSERTED:
                    dao.insertEvalType(evalType);
                    break;
                case ROW_TYPE_UPDATED:
                    dao.updateEvalType(evalType);
                    break;
                case ROW_TYPE_DELETED:
                    dao.deleteEvalType(evalType);
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
