package com.jnv.org.orgnzt.service.impl;

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

import com.jnv.common.seq.service.IdGeneratorService;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.org.orgnzt.service.OrgnztManageDAO;
import com.jnv.org.orgnzt.service.OrgnztManageService;
import com.jnv.org.orgnzt.vo.OrgnztDeptVO;
import com.jnv.org.orgnzt.vo.OrgnztManageVO;
import com.jnv.org.orgnzt.vo.OrgnztStdVO;

@Service("orgnztManageService")
@Transactional
public class OrgnztManageServiceImpl implements OrgnztManageService {

    @Resource(name = "orgnztManageDAO")
    private OrgnztManageDAO dao;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGen;

    /**
     * 조직정보 - 조직관리 - 기준일 조회
     */
    @Override
    public List<OrgnztStdVO> getOrgnStdYmdList(Map<String, Object> searchMap) {
        return dao.getOrgnStdYmdList(searchMap);
    }

    /**
     * 조직정보 - 조직관리 조회
     */
    @Override
    public List<OrgnztManageVO> getOrgnztManageList(Map<String, Object> searchMap) {
        return dao.getOrgnztManageList(searchMap);
    }

    /**
     * 조직정보 - 부서목록 조회
     */
    @Override
    public List<OrgnztDeptVO> getOrgnztDeptList(Map<String, Object> searchMap) {
        return dao.getOrgnztDeptList(searchMap);
    }

    /**
     * 조직정보 - 기준일 / 조직관리 / 부서목록 - 저장
     */
    @Override
    public String setOrgnztManage(List<OrgnztStdVO> orgnztStdVO, List<OrgnztManageVO> orgnztManageVO,
            List<OrgnztDeptVO> orgnztDeptVO) {

        String rMsg = RESULT_FAILURE;

        // 기준일
        if (RESULT_SUCCESS.equals(setOrgnztStd(orgnztStdVO))) {
            rMsg = RESULT_SUCCESS;
        }

        // 조직관리
        if (RESULT_SUCCESS.equals(setOrgnztManage(orgnztManageVO))) {
            rMsg = RESULT_SUCCESS;
        }

        // 부서목록
        if (RESULT_SUCCESS.equals(setOrgnztDept(orgnztDeptVO))) {
            rMsg = RESULT_SUCCESS;
        }
        return rMsg;

    }

    /**
     * 조직정보 - 부서목록 - 저장
     */
    private String setOrgnztDept(List<OrgnztDeptVO> orgnztDeptVO) {
        String rMsg = RESULT_FAILURE;

        for (OrgnztDeptVO vo : orgnztDeptVO) {
            String rowCheck = StringUtils.defaultString(vo.getRowCheck());
            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(vo.getRowStatus());
                switch (rowStatus) {
                    case ROW_TYPE_INSERTED:
                        // 중복체크
                        int cntDupl = dao.getDeptDuplicatedKeyCnt(vo);
                        if (cntDupl > 0) {
                            throw new BusinessException("errors.duplication", new String[] { "field.lineCode" });
                        }
                        dao.insertOrgnztDept(vo);
                        break;
                    case ROW_TYPE_UPDATED:
                        dao.updateOrgnztDept(vo);
                        break;
                    case ROW_TYPE_DELETED:
                        dao.deleteOrgnztDept(vo);
                        break;
                    default:
                        break;
                }
                rMsg = RESULT_SUCCESS;
            }
        }
        return rMsg;
    }

    /**
     * 조직정보 - 조직관리 - 저장
     */
    private String setOrgnztManage(List<OrgnztManageVO> orgnztManageVO) {
        String rMsg = RESULT_FAILURE;

        for (OrgnztManageVO vo : orgnztManageVO) {
            String rowCheck = StringUtils.defaultString(vo.getRowCheck());
            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(vo.getRowStatus());
                switch (rowStatus) {
                    case ROW_TYPE_INSERTED:

                        String orgnCd = idGen.nextIdFor("orgnCd");
                        vo.setOrgnCd(orgnCd);

                        dao.insertOrgnztManage(vo);
                        break;
                    case ROW_TYPE_UPDATED:
                        dao.updateOrgnztManage(vo);
                        break;
                    case ROW_TYPE_DELETED:
                        dao.deleteOrgnztManage(vo);
                        break;
                    default:
                        break;
                }
                rMsg = RESULT_SUCCESS;
            }
        }
        return rMsg;
    }

    /**
     * 조직정보 - 기준일- 저장
     */
    private String setOrgnztStd(List<OrgnztStdVO> orgnztStdVO) {
        String rMsg = RESULT_FAILURE;
        for (OrgnztStdVO vo : orgnztStdVO) {
            String rowCheck = StringUtils.defaultString(vo.getRowCheck());

            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(vo.getRowStatus());

                switch (rowStatus) {
                    case ROW_TYPE_INSERTED:
                        // 중복체크
                        int cntStdYmdDup = dao.getStdYmdDuplicatedKeyCnt(vo);
                        if (cntStdYmdDup > 0) {
                            throw new BusinessException("errors.duplication", new String[] { "field.stdYmd" });
                        }
                        dao.insertOrgnStdYmd(vo);
                        break;
                    case ROW_TYPE_UPDATED:
                        dao.updateOrgnStdYmd(vo);
                        break;
                    case ROW_TYPE_DELETED:
                        dao.deleteOrgnStdYmd(vo);
                        break;
                    default:
                        break;
                }
                rMsg = RESULT_SUCCESS;
            }
        }
        return rMsg;
    }

    /**
     * 조직정보 - 부서관리 팝업 조회
     */
    @Override
    public List<OrgnztDeptVO> getDeptPopupList(Map<String, Object> searchMap) {
        return dao.getDeptPopupList(searchMap);
    }

}
