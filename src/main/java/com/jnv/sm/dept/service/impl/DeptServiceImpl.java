package com.jnv.sm.dept.service.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.dept.service.DeptDAO;
import com.jnv.sm.dept.service.DeptService;
import com.jnv.sm.vo.DeptVO;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("deptService")
@Transactional
public class DeptServiceImpl implements DeptService {

    @Resource(name = "deptDAO")
    private DeptDAO dao;

    @Override
    public List<DeptVO> selectDeptList(JnParam param) throws EgovBizException {
        return dao.selectDeptList((Map<String, ?>) param.getDatasetFirstItem("paramMap"));
    }

    @Override
    public void saveDept(JnParam param) {
        List<DeptVO> deptVO = param.getDataset("deptVO", DeptVO.class);
        for (DeptVO vo : deptVO) {
            switch (vo.getRowType()) {
                case "inserted":
                    dao.insertDept(vo);
                    break;
                case "updated":
                    dao.updateDept(vo);
                    break;
                default:
                    break;
            }
        }
    }

    @Override
    public void deleteDept(JnParam param) {
        List<DeptVO> deptVO = param.getDataset("deptVO", DeptVO.class);
        for (DeptVO vo : deptVO) {
            dao.deleteDept(vo);
        }
    }

    @Override
    public List<ComboVO> selectDeptCombo(Map<?, ?> commandMap) {
        return dao.selectDeptCombo(commandMap);
    }

    @Override
    public List<ComboVO> selectOrganCombo(Map<?, ?> commandMap) {
        return dao.selectOrganCombo(commandMap);
    }
}
