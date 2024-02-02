package com.jnv.mis.hre.std.service.impl;

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
import com.jnv.mis.hre.std.service.EvalGradeDAO;
import com.jnv.mis.hre.std.service.EvalGradeService;
import com.jnv.mis.hre.std.vo.EvalGradeVO;

@Service("EvalGradeService")
public class EvalGradeServiceImpl implements EvalGradeService{
	@Resource(name = "EvalGradeDAO")
	private EvalGradeDAO dao;
	
	@Override
	public List<EvalGradeVO> getEvalGradeList(Map<String, Object> params){
		return dao.getEvalGradeList(params);
	}
	@Override
    public String setEvalGradeList(List<EvalGradeVO> evalGradeVO) throws Exception {

        String rmsg = RESULT_FAILURE;

        for (EvalGradeVO vo : evalGradeVO) {
            String rowCheck = StringUtils.defaultString(vo.getRowCheck());

            if("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(vo.getRowStatus());

                switch(rowStatus) {
                case ROW_TYPE_INSERTED :
                    // 중복체크
                    int cntDupl = dao.getDuplicatedKeyCnt(vo);
                    if(cntDupl > 0) throw new BusinessException("errors.duplication", "평가ID와 평가등급");
                    ensureValidMenuItem(vo);
                    dao.insertEvalGrade(vo);
                    break;
                case ROW_TYPE_UPDATED :
                    dao.updateEvalGrade(vo);
                    break;
                case ROW_TYPE_DELETED :
                    dao.deleteEvalGrade(vo);
                    break;
                default:
                    break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }
	private void ensureValidMenuItem(EvalGradeVO item) {
        if (StringUtils.isBlank(item.getEvalId())) {
            throw new BusinessException("errors.required", "평가 ID");
        }
        if (StringUtils.isBlank(item.getEvalGrade())) {
            throw new BusinessException("errors.required", "평가 등급");
        }
    }

}