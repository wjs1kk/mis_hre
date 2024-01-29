package com.jnv.sam.typetwo.service.impl;

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
import com.jnv.sam.typetwo.service.TypeTwoDAO;
import com.jnv.sam.typetwo.service.TypeTwoService;
import com.jnv.sam.vo.TypeTwoVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

@Service("typeTwoService")
@Transactional
public class TypeTwoServiceImpl implements TypeTwoService {

    @Resource(name = "typeTwoDAO")
    private TypeTwoDAO dao;

    @Override
    public List<TypeTwoVO> getTypeTwoList(Map<String, Object> paramMap) throws EgovBizException {
        return dao.getTypeTwoList(paramMap);
    }

    @Override
    public String setTypeTwoList(List<TypeTwoVO> typeTwoList) throws Exception {

        String rmsg = RESULT_FAILURE;

        for (TypeTwoVO typeTwo : typeTwoList) {
            String rowCheck = StringUtils.defaultString(typeTwo.getRowCheck());

            if("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(typeTwo.getRowStatus());

                switch(rowStatus) {
                case ROW_TYPE_INSERTED :
                    // 중복체크
                    int cntDupl = dao.getDuplicatedKeyCnt(typeTwo);

                    if(cntDupl > 0)
                        // 1. 직접
                        // throw new BusinessException("시스템ID와 프로그램ID가 중복되었습니다.");
                        // 2. message id 사용: 인자를 줄 수 없다. {0} 등
                        // throw new BusinessException("CM_MSG_INVALID_DUPLICATION");
                        // 3. message source property 사용: 3번째 인자 default 없이 property 값이 없으면 error
                        // BusinessException(메세지 키값, 대체 메세지 키값 배열, 메세지 기본값, 로케일)
//                        throw new BusinessException("errors.duplication", new String[]{"시스템ID와 프로그램ID"});
                        throw new BusinessException("errors.duplication");
//                    throw new BusinessException("errors.duplication", new String[]{"field.sysid.progid"});

                    dao.insertTypeTwo(typeTwo);
                    break;
                case ROW_TYPE_UPDATED :
                    dao.updateTypeTwo(typeTwo);
                    break;
                case ROW_TYPE_DELETED :
                    dao.deleteTypeTwo(typeTwo);
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
