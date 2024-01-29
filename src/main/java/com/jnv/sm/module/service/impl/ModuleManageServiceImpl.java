package com.jnv.sm.module.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;
import static com.jnv.common.util.Constants.ROW_TYPE_DELETED;
import static com.jnv.common.util.Constants.ROW_TYPE_INSERTED;
import static com.jnv.common.util.Constants.ROW_TYPE_UPDATED;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.sm.module.service.ModuleManageDAO;
import com.jnv.sm.module.service.ModuleManageService;
import com.jnv.sm.vo.ModuleManageVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

@Service("moduleManageService")
@Transactional
public class ModuleManageServiceImpl implements ModuleManageService {

    @Resource(name = "moduleManageDAO")
    private ModuleManageDAO dao;

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");

    @Override
    public List<ModuleManageVO> getModuleManageList(Map<String, Object> paramMap) throws EgovBizException {
        return dao.getModuleManageList(paramMap);
    }

    @Override
    public String setModuleManageList(List<ModuleManageVO> moduleManageList) throws EgovBizException {

        String rmsg = RESULT_FAILURE;

        for (ModuleManageVO moduleManage : moduleManageList) {
            String rowCheck = StringUtils.defaultString(moduleManage.getRowCheck());

            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(moduleManage.getRowStatus());

                switch (rowStatus) {
                case ROW_TYPE_INSERTED:
                    validateModuleInfo(moduleManage);
                    dao.insertModuleManage(moduleManage);
                    break;
                case ROW_TYPE_UPDATED:
                    validateModuleInfo(moduleManage);
                    dao.updateModuleManage(moduleManage);
                    break;
                case ROW_TYPE_DELETED:
                    dao.deleteModuleManage(moduleManage);
                    break;
                default:
                    break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

    private void validateModuleInfo(ModuleManageVO item) {
        if (StringUtils.isEmpty(item.getUseYmd())) {
            throw new BusinessException("errors.required", new Object[] { "field.module.useYmd" });
        }

        if (StringUtils.isEmpty(item.getEndYmd())) {
            throw new BusinessException("errors.required", new Object[] { "field.module.useYmd" });
        }

        LocalDate from = LocalDate.from(formatter.parse(item.getUseYmd()));
        LocalDate to = LocalDate.from(formatter.parse(item.getEndYmd()));

        if (from.isAfter(to)) {
            throw new BusinessException("errors.daterange", new Object[] { "field.module.useYmd", "field.module.endYmd" });
        }
    }
}
