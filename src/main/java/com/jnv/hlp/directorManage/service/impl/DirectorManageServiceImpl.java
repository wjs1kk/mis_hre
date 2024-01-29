package com.jnv.hlp.directorManage.service.impl;

import static com.jnv.common.util.Constants.ROW_TYPE_INSERTED;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.common.util.Constants;
import com.jnv.hlp.directorManage.service.DirectorManageDAO;
import com.jnv.hlp.directorManage.service.DirectorManageService;
import com.jnv.hlp.vo.DirectorManageVO;
import com.jnv.jncore.exception.BusinessException;

@Service("directorManageService")
@Transactional
public class DirectorManageServiceImpl implements DirectorManageService {

    @Resource(name = "directorManageDAO")
    private DirectorManageDAO dao;

    @Override
    public List<DirectorManageVO> getDirectorManageList(Map<String, ?> params) {
        return dao.getDirectorManageList(params);
    }

    @Override
    public void saveDirectorManageList(List<DirectorManageVO> list) {
        for (DirectorManageVO item : list) {
            if ("1".equals(item.getRowCheck())) {

                switch (StringUtils.defaultString(item.getRowStatus())) {
                    case ROW_TYPE_INSERTED:
                        // 중복체크
                        int cutDupl = dao.getDuplicateKeyCnt(item);
                        if (cutDupl > 0) {
                            throw new BusinessException("errors.duplication", new String[] { "field.hlpPicId" });
                        }
                        dao.insertDirectorManageItem(item);
                        break;
                    case Constants.ROW_TYPE_UPDATED:
                        dao.updateDirectorManageItem(item);
                        break;
                    case Constants.ROW_TYPE_DELETED:
                        dao.deleteDirectorManageItem(item);
                        break;
                    default:
                        break;
                }
            }
        }
    }

}
