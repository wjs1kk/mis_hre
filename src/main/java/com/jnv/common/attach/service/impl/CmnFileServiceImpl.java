package com.jnv.common.attach.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.jnv.common.attach.service.CmnFileDAO;
import com.jnv.common.attach.service.CmnFileService;
import com.jnv.common.util.Constants;
import com.jnv.common.vo.CmnFileVO;

@Service("cmnFileService")
public class CmnFileServiceImpl implements CmnFileService {

    @Resource(name = "cmnFileDAO")
    private CmnFileDAO dao;

    @Override
    public List<CmnFileVO> getList(Map<String, Object> params) {
        return dao.getList(params);
    }

    @Override
    public void setList(List<CmnFileVO> fileList) {
        for (CmnFileVO file : fileList) {
            String rowStatus = StringUtils.defaultString(file.getRowStatus());

            switch (rowStatus) {
                case Constants.ROW_TYPE_INSERTED:
                    dao.setFile(file);
                    break;
                case Constants.ROW_TYPE_UPDATED:
                    dao.updateFile(file);
                    break;
                case Constants.ROW_TYPE_DELETED:
                    dao.deleteFile(file);
                    break;
                default:
                    break;
            }
        }
    }

}
