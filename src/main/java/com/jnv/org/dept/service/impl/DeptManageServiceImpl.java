package com.jnv.org.dept.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.org.dept.service.DeptManageDAO;
import com.jnv.org.dept.service.DeptManageService;
import com.jnv.org.dept.vo.DeptManageVO;

@Service("deptManageService")
@Transactional
public class DeptManageServiceImpl implements DeptManageService {

    @Resource(name = "deptManageDAO")
    private DeptManageDAO dao;

    /**
     * 조직관리 - 부서관리 - 부서관리 조회
     */
    @Override
    public List<DeptManageVO> getDeptManageList(Map<String, Object> searchMap) {
        return dao.getDeptManageList(searchMap);
    }

    /**
     * 조직관리 - 부서관리 - 부서관리 저장
     */
    @Override
    public String saveDeptManageList(List<DeptManageVO> voList) {
        String rmsg = RESULT_FAILURE;

        for (DeptManageVO vo : voList) {
            if("1".equals(vo.getRowCheck())) {
                switch (StringUtils.defaultString(vo.getRowStatus())) {
                    case "inserted":
                        // 중복체크
                        int cntDupl = dao.getDuplicateKeyCnt(vo);
                        if (cntDupl > 0) {
                            throw new BusinessException("errors.duplication", new String[] { "field.deptCd" });
                        }
                        dao.insertDept(vo);
                        break;
                    case "updated":
                        dao.updateDept(vo);
                        break;
                    case "deleted":
                        dao.deleteDept(vo);
                        break;
                    default:
                        break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

    /**
     * 조직관리 - 부서관리 - 상위부서코드 팝업
     */
    @Override
    public List<DeptManageVO> getUpDeptPopupList(Map<String, Object> searchMap) {
        return dao.getUpDeptPopupList(searchMap);
    }
}
