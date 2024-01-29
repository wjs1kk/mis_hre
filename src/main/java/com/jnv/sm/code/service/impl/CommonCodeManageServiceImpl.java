package com.jnv.sm.code.service.impl;

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
import com.jnv.sm.code.service.CommonCodeManageDAO;
import com.jnv.sm.code.service.CommonCodeManageService;
import com.jnv.sm.vo.CommonCodeHeaderVO;
import com.jnv.sm.vo.CommonCodeLineVO;

@Service("commonCodeManageService")
@Transactional
public class CommonCodeManageServiceImpl implements CommonCodeManageService {

    @Resource(name = "commonCodeManageDAO")
    private CommonCodeManageDAO dao;

    @Override
    public List<CommonCodeHeaderVO> getCodeHeaderList(Map<String, Object> paramMap) throws Exception {
        return dao.getCodeHeaderList(paramMap);
    }

    @Override
    public List<CommonCodeLineVO> getCodeLineList(Map<String, Object> paramMap) throws Exception {
        return dao.getCodeLineList(paramMap);
    }

    @Override
    public String setCodeHeaderList(List<CommonCodeHeaderVO> commonCodeHeaderList) throws Exception {
        String rmsg = RESULT_FAILURE;

        for (CommonCodeHeaderVO CodeHeader : commonCodeHeaderList) {
            String rowCheck = StringUtils.defaultString(CodeHeader.getRowCheck());
            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(CodeHeader.getRowStatus());
                switch (rowStatus) {
                case ROW_TYPE_INSERTED:
                    // 중복체크
                    int cntDupl = dao.getDuplicatedKeyCnt(CodeHeader);
                    if (cntDupl > 0) {
                        throw new BusinessException("errors.duplication", new String[] { "field.headerCode" });
                    }
                    dao.insertCodeHeader(CodeHeader);
                    break;
                case ROW_TYPE_UPDATED:
                    dao.updateCodeHeader(CodeHeader);
                    break;
                case ROW_TYPE_DELETED:
                    dao.deleteCodeHeader(CodeHeader);
                    dao.deleteCodeHeaderLine(CodeHeader);
                    break;
                default:
                    break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

    @Override
    public String setCodeLineList(List<CommonCodeLineVO> commonCodeLineList) throws Exception {
        String rmsg2 = RESULT_FAILURE;

        for (CommonCodeLineVO CodeLine : commonCodeLineList) {
            String rowCheck = StringUtils.defaultString(CodeLine.getRowCheck());
            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(CodeLine.getRowStatus());
                switch (rowStatus) {
                case ROW_TYPE_INSERTED:
                    // 중복체크
                    int cntDupl = dao.getDuplicatedKeyCnt2(CodeLine);
                    if (cntDupl > 0) {
                        throw new BusinessException("errors.duplication", new String[] { "field.lineCode" });
                    }
                    dao.insertCodeLine(CodeLine);
                    break;
                case ROW_TYPE_UPDATED:
                    dao.updateCodeLine(CodeLine);
                    break;
                case ROW_TYPE_DELETED:
                    dao.deleteCodeLine(CodeLine);
                    break;
                default:
                    break;
                }
                rmsg2 = RESULT_SUCCESS;
            }
        }
        return rmsg2;
    }
}
