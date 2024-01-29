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
import com.jnv.sm.log.service.AccessLogDAO;
import com.jnv.sm.log.service.AccessLogService;
import com.jnv.sm.vo.AccessLogViewVO;

@Service("accessLogService")
@Transactional
public class AccessLogServiceImpl implements AccessLogService {

    @Resource(name = "accessLogDAO")
    private AccessLogDAO dao;

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("uuuuMMdd");

    @Override
    public List<AccessLogViewVO> getAccessLog(Map<String, Object> paramMap) throws Exception {
        validateSrchDate(paramMap);
        return dao.getAccessLog(paramMap);
    }


    private void validateSrchDate(Map<String, Object> item) {
        if (StringUtils.isEmpty((String) item.get("accessFromDt"))) {
            throw new BusinessException("error.required", new Object[] { "field.rgstFromDt" });
        }

        if (StringUtils.isEmpty((String) item.get("accessToDt"))) {
            throw new BusinessException("error.required", new Object[] { "field.rgstToDt" });
        }

        LocalDate from = LocalDate.from(formatter.parse((String) item.get("accessFromDt")));
        LocalDate to = LocalDate.from(formatter.parse((String) item.get("accessToDt")));

        if (from.isAfter(to)) {
            throw new BusinessException("errors.daterange", new Object[] { "field.accessFromDt", "field.accessToDt" });
        }
    }


}
