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

import com.jnv.mis.hre.service.Hre3030DAO;
import com.jnv.mis.hre.service.Hre3030Service;
import com.jnv.mis.hre.vo.EvalStepVO;

@Service("hre3030Service")
public class Hre3030ServiceImpl implements Hre3030Service {

	@Resource(name = "hre3030DAO")
    private Hre3030DAO dao;

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");

	@Override
	public List<EvalStepVO> getEvalStepList(Map<String, Object> paramMap) throws Exception {
		return dao.getEvalStepList(paramMap);
	}

	@Override
	public String setEvalStepList(List<EvalStepVO> evalStepList) throws Exception {
		String rmsg = RESULT_FAILURE;

        for (EvalStepVO evalStep : evalStepList) {
            String rowCheck = StringUtils.defaultString(evalStep.getRowCheck());

            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(evalStep.getRowStatus());

                switch (rowStatus) {
                case ROW_TYPE_INSERTED:
                    dao.insertEvalStep(evalStep);
                    break;
                case ROW_TYPE_UPDATED:
                    dao.updateEvalStep(evalStep);
                    break;
                case ROW_TYPE_DELETED:
                    dao.deleteEvalStep(evalStep);
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
