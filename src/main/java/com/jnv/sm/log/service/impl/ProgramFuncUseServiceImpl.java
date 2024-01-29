package com.jnv.sm.log.service.impl;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.sm.log.service.ProgramFuncUseDAO;
import com.jnv.sm.log.service.ProgramFuncUseService;
import com.jnv.sm.vo.ProgramFuncUseVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@Service("programFuncUseService")
@Transactional
public class ProgramFuncUseServiceImpl implements ProgramFuncUseService {

    @Resource(name = "programFuncUseDAO")
    private ProgramFuncUseDAO dao;

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("uuuuMMdd");

    @Override
    public List<ProgramFuncUseVO> getUserByMenuStat(Map<String, Object> params) {
        validateSrchDate(params);
        return dao.getUserByMenuStat(params);
    }

    @Override
    public List<ProgramFuncUseVO> getTxByMenuStat(Map<String, Object> params) {
        validateSrchDate(params);
        return dao.getTxByMenuStat(params);
    }

    @Override
    public List<ProgramFuncUseVO> getMenuByUserStat(Map<String, Object> params) {
        validateSrchDate(params);
        return dao.getMenuByUserStat(params);
    }

    @Override
    public List<ProgramFuncUseVO> getTxByUserStat(Map<String, Object> params) {
        validateSrchDate(params);
        return dao.getTxByUserStat(params);
    }

    private void validateSrchDate(Map<String, Object> item) {
        if (StringUtils.isEmpty((String) item.get("accessFromDt"))) {
            throw new BusinessException("error.required", new Object[] { "field.fromDt" });
        }

        if (StringUtils.isEmpty((String) item.get("accessToDt"))) {
            throw new BusinessException("error.required", new Object[] { "field.toDt" });
        }

        LocalDate from = LocalDate.from(formatter.parse((String) item.get("accessFromDt")));
        LocalDate to = LocalDate.from(formatter.parse((String) item.get("accessToDt")));

        if (from.isAfter(to)) {
            throw new BusinessException("errors.daterange", new Object[] { "field.fromDt", "field.toDt" });
        }
    }
}
