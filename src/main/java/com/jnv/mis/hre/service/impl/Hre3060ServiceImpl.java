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
import com.jnv.mis.hre.service.Hre3010DAO;
import com.jnv.mis.hre.service.Hre3060DAO;
import com.jnv.mis.hre.service.Hre3060Service;
import com.jnv.mis.hre.vo.Hre3060VO;
import com.jnv.sam.vo.TypeTwoVO;

@Service("Hre3060Service")
public class Hre3060ServiceImpl implements Hre3060Service{
	@Resource(name = "Hre3060DAO")
	private Hre3060DAO dao;
	
	@Override
	public List<Hre3060VO> getEvalGradeList(Map<String, Object> params){
		return dao.getEvalGradeList(params);
	}
	@Override
    public String setEvalGradeList(List<Hre3060VO> hre3060VO) throws Exception {

        String rmsg = RESULT_FAILURE;

        for (Hre3060VO hre3060vo : hre3060VO) {
            String rowCheck = StringUtils.defaultString(hre3060vo.getRowCheck());

            if("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(hre3060vo.getRowStatus());

                switch(rowStatus) {
                case ROW_TYPE_INSERTED :
                    // 중복체크
                    int cntDupl = dao.getDuplicatedKeyCnt(hre3060vo);
                    if(cntDupl > 0)
                        throw new BusinessException("errors.duplication", "평가ID와 평가등급");
                    dao.insertEvalGrade(hre3060vo);
                    break;
                case ROW_TYPE_UPDATED :
                    dao.updateEvalGrade(hre3060vo);
                    break;
                case ROW_TYPE_DELETED :
                    dao.deleteEvalGrade(hre3060vo);
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
