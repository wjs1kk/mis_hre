package com.jnv.sm.program.service.impl;

import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
import javax.annotation.Resource;

import static com.jnv.common.util.Constants.PARAM_MAP;
import static com.jnv.common.util.Constants.ROW_TYPE_DELETED;
import static com.jnv.common.util.Constants.ROW_TYPE_INSERTED;
import static com.jnv.common.util.Constants.ROW_TYPE_UPDATED;

import com.jnv.common.seq.service.IdGeneratorService;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.common.file.service.CommonFileDAO;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.jncore.util.ValidationUtil;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.jncore.vo.CommonFileVO;
import com.jnv.sm.program.service.ProgramDAO;
import com.jnv.sm.program.service.ProgramService;
import com.jnv.sm.vo.ProgramDetailVO;
import com.jnv.sm.vo.ProgramHeaderVO;
import com.jnv.sm.vo.ProgramTableVO;
import com.jnv.sm.vo.ProgramVO;
import org.apache.commons.lang3.StringUtils;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;

@Service("programService")
@Transactional
public class ProgramServiceImpl implements ProgramService {

    private static final Logger LOG = LoggerFactory.getLogger(ProgramServiceImpl.class);

    @Resource(name = "programDAO")
    private ProgramDAO dao;

    @Resource(name = "commonFileDAO")
    private CommonFileDAO fileDao;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGen;

    @Override
    public List<ProgramHeaderVO> selectProgramList(Map<String, Object> param) {
        return dao.selectProgramList(param);
    }

    @Override
    public List<ProgramDetailVO> selectFunctionList(Map<String, Object> param) {
        return dao.selectFunctionList(param);
    }

    @Override
    public List<ComboVO> selectProgTyComboList() {
        return dao.selectProgTyComboList();
    }

    @Override
    public List<ComboVO> selectFuncTypeComboList() {
        return dao.selectFuncTypeComboList();
    }

    @Override
    public List<ComboVO> seletFuncPatternTypeComboList() {
        return dao.selectFuncPatternTypeComboList();
    }

    @Override
    public void saveProgramList(List<ProgramHeaderVO> programList) {
        try {
            for (ProgramHeaderVO item : programList) {
                String status = StringUtils.defaultString(item.getRowStatus());

                switch (status) {
                    case ROW_TYPE_INSERTED:
                        item.setProgId(idGen.nextIdFor("progId"));
                        ensureValidProgram(item);
                        dao.insertProgram(item);
                        break;
                    case ROW_TYPE_UPDATED:
                        ensureValidProgram(item);
                        dao.updateProgram(item);
                        break;
                    case ROW_TYPE_DELETED:
                        dao.deleteProgram(item);
                        dao.deleteProgramFunction(item);
                        break;
                    default:
                        break;
                }
            }
        } catch (DataAccessException e) {
            SQLException sqlException = (SQLException) e.getCause();
            LOG.error("SQL error code: {}, state: {}, message: {}", sqlException.getErrorCode(),
                    sqlException.getSQLState(), sqlException.getLocalizedMessage());
            if (sqlException.getErrorCode() == -10007) {
                throw new BusinessException("errors.duplication", new Object[] { "field.progId" });
            } else {
                throw new BusinessException("fail.common.sql",
                        new Object[] { sqlException.getErrorCode(), sqlException.getSQLState() });
            }
        }
    }

    @Override
    public void saveProgramFuncList(List<ProgramDetailVO> funcList) {
        try {
            for (ProgramDetailVO item : funcList) {
                String status = StringUtils.defaultString(item.getRowStatus());

                switch (status) {
                    case ROW_TYPE_INSERTED:
                        dao.insertFunction(item);
                        break;
                    case ROW_TYPE_UPDATED:
                        dao.updateFunction(item);
                        break;
                    case ROW_TYPE_DELETED:
                        dao.deleteFunction(item);
                        break;
                    default:
                        break;
                }
            }
        } catch (DataAccessException e) {
            throw new BusinessException("fail.common.msg");
        }
    }

    @Override
    public void programMasterDelete(ProgramHeaderVO[] headerVO, ModelMap model) {
        for (ProgramHeaderVO vo : headerVO) {
            dao.deleteProgram(vo);
            dao.deleteProgramFunction(vo);
        }
    }

    @Override
    public void programDetailDelete(ProgramDetailVO[] detailVO, ModelMap model) {
        for (ProgramDetailVO vo : detailVO) {
            dao.deleteFunction(vo);
        }
    }

    private void ensureValidProgram(ProgramHeaderVO item) {
        if (ROW_TYPE_INSERTED.equals(item.getRowStatus()) || ROW_TYPE_UPDATED.equals(item.getRowStatus())) {
            if (StringUtils.isBlank(item.getProgId())) {
                throw new BusinessException("errors.required", new Object[] { "field.progId" });
            } else {
                item.setProgId(item.getProgId().trim());
            }

            if (!Pattern.matches("[a-zA-Z\\-_\\d]+", item.getProgId())) {
                throw new BusinessException("errors.illegalCharInProgId");
            }

            if (item.getProgId().getBytes(StandardCharsets.UTF_8).length >= 20) {
                throw new BusinessException("errors.maxlength", new Object[] { "field.progId", 20 });
            }
        }
    }

    @Override
    public String programMasterSaveValidation(ProgramHeaderVO[] headerVO, ModelMap model) throws EgovBizException {
        String message = "1";
        for (ProgramHeaderVO vo : headerVO) {
            if (StringUtils.isEmpty(vo.getProgId())) {
                return "프로그램 ID는 필수 값입니다.";
            }
            if (StringUtils.isNotEmpty(vo.getRowType())) {
                message = programMasterSaveChk(vo);
            }
        }
        return message;
    }

    private String programMasterSaveChk(ProgramHeaderVO vo) {
        String message = "1";
        if (StringUtils.isEmpty(vo.getProgTy())) {
            return "프로그램타입은 전체를 선택 할 수 없습니다.";
        }
        if (ROW_TYPE_INSERTED.equals(vo.getRowType())) {
            message = dao.selectSaveValidation(vo);
        }
        if ("1".equals(message)) {
            if (Pattern.matches("^[ㄱ-ㅎ가-힣]*$", vo.getProgId())) {
                return "한글은 입력할 수 없습니다.";
            }
            if (!ValidationUtil.lengthCheckMessage(vo.getProgId(), 20)) {
                return "20자를 넘을 수 없습니다.";
            }
        }
        return message;
    }

    @SuppressWarnings("unchecked")
    @Override
    public void cmProgChangeProgIdP(JnParam param) {
        dao.cmProgChangeProgIdP((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP));
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<ProgramVO> selectProgTableList(JnParam param) {
        return dao.selectProgTableList((Map<String, ?>) param.getDatasetFirstItem(PARAM_MAP));
    }

    @Override
    public void progTableListSave(ProgramVO[] vos, ModelMap model) {
        for (ProgramVO vo : vos) {
            switch (vo.getRowType()) {
                case ROW_TYPE_INSERTED:
                    dao.insertProgTableList(vo);
                    break;
                case ROW_TYPE_UPDATED:
                    dao.updateProgTableList(vo);
                    break;
                default:
                    break;
            }
        }
    }

    @Override
    public void progTableListDelete(ProgramVO[] vos, ModelMap model) {
        for (ProgramVO vo : vos) {
            dao.deleteProgTableList(vo);
        }
    }

    @Override
    public void saveAtchFileId(Map<String, Object> params, ModelMap model) {
        List<CommonFileVO> list = fileDao.selectFileList(params);
        if (list == null || list.isEmpty()) {
            params.put("fileId", "");
        }
        dao.updateAtchFileId(params);
    }

    @Override
    public List<ProgramTableVO> getAvailableTableList(Map<String, ?> params) {
        return dao.getAvailableTableList(params);
    }

    @Override
    public List<ProgramTableVO> getSelectedTableList(Map<String, ?> params) {
        return dao.getSelectedTableList(params);
    }

    @Override
    public void setSelectedTableList(List<ProgramTableVO> selectedTables, String sysId, String progId) {
        dao.deleteTableList(sysId, progId);

        for (ProgramTableVO item : selectedTables) {
            item.setSysId(sysId);
            item.setProgId(progId);
            dao.setTable(item);
        }
    }
}
