package com.jnv.bnr.site.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bnr.site.service.SiteManageDAO;
import com.jnv.bnr.site.service.SiteManageService;
import com.jnv.bnr.vo.SiteVO;
import com.jnv.common.seq.service.IdGeneratorService;
import com.jnv.common.util.Constants;

@Service("siteManageService")
@Transactional
public class SiteManageServiceImpl implements SiteManageService {

    @Resource(name = "siteManageDAO")
    private SiteManageDAO dao;

    // 자동 채번 서비스를 가져옴
    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGenerator;

    @Override
    public List<SiteVO> selectSiteManageList(Map<String, ?> params) {
        return dao.selectSiteManageList(params);
    }

    @Override
    public void saveSiteManageList(List<SiteVO> list) {
        for (SiteVO item : list) {

            if ("1".equals(item.getRowCheck())) {

                switch (StringUtils.defaultString(item.getRowStatus())) {
                    case Constants.ROW_TYPE_INSERTED:
                        // 채번 기준 'siteId'을 사용하여 새로운 키 값을 생성한다.
                        String siteId = idGenerator.nextIdFor("siteId");
                        item.setSiteId(siteId);
                        dao.insertSiteManageItem(item);
                        break;
                    case Constants.ROW_TYPE_UPDATED:
                        dao.updateSiteManageItem(item);
                        break;
                    case Constants.ROW_TYPE_DELETED:
                        dao.deleteSiteManageItem(item);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}