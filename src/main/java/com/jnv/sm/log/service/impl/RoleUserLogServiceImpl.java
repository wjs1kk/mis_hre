package com.jnv.sm.log.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.sm.log.service.RoleUserLogDAO;
import com.jnv.sm.log.service.RoleUserLogService;
import com.jnv.sm.vo.RoleUserLogVO;

@Service("roleUserLogService")
@Transactional
public class RoleUserLogServiceImpl implements RoleUserLogService {

    @Resource(name = "roleUserLogDAO")
    private RoleUserLogDAO dao;

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("uuuuMMdd");

    @Override
    public List<RoleUserLogVO> getRoleLog(Map<String, Object> paramMap) throws Exception {

        if (!StringUtils.isEmpty((String) paramMap.get("processFromDt")) || !StringUtils.isEmpty((String) paramMap.get("processToDt"))) {
            validateFromToDate(paramMap);
        }

        return dao.getRoleLog(paramMap);
    }

    // 날짜타입 체크
    private void validateFromToDate(Map<String, Object> item) {

        if (StringUtils.isEmpty((String) item.get("processFromDt"))) {
            throw new BusinessException("errors.required2", new Object[] { "field.rgstFromDt" });
        }

        if (StringUtils.isEmpty((String) item.get("processToDt"))) {
            throw new BusinessException("errors.required2", new Object[] { "field.rgstToDt" });
        }

        LocalDate from = LocalDate.from(formatter.parse((String) item.get("processFromDt")));
        LocalDate to = LocalDate.from(formatter.parse((String) item.get("processToDt")));

        if (from.isAfter(to)) {
            throw new BusinessException("errors.daterange", new Object[] { "field.rgstFromDt", "field.rgstToDt" });
        }
    }
}
