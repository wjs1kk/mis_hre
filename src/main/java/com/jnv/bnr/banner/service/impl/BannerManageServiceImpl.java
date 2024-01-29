package com.jnv.bnr.banner.service.impl;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bnr.banner.service.BannerManageDAO;
import com.jnv.bnr.banner.service.BannerManageService;
import com.jnv.bnr.vo.BannerVO;
import com.jnv.common.seq.service.IdGeneratorService;

@Service("bannerManageService")
@Transactional
public class BannerManageServiceImpl implements BannerManageService {

    @Resource(name = "bannerManageDAO")
    private BannerManageDAO dao;

    // 자동 채번 서비스를 가져옴
    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGenerator;

    /**
     * 배너 등록 - 조회
     */
    @Override
    public BannerVO getBannerManageInfo(BannerVO banner) {
        return dao.getBannerManageItem(banner);
    }

    /**
     * 배너 등록 입력 / 수정
     */
    @Override
    public void setBannerManageInfo(BannerVO banner) {
        if (StringUtils.isEmpty(banner.getBnrId())) {
            String bnrId = idGenerator.nextIdFor("bnrId");
            banner.setBnrId(bnrId);
            dao.insertBannerManageItem(banner);
//        }
//        if (StringUtils.isEmpty(banner.getBnrId())) {
//            String FileId = idGenerator.nextIdFor("fileId");
//            banner.setBnrImgFile(FileId);
//            dao.insertBannerManageItem(banner);
        } else {
            dao.updateBannerManageItem(banner);
        }
    }

    /**
     * 배너 삭제
     */
    @Override
    public void deleteBannerManageInfo(BannerVO banner) {
        dao.deleteBannerManageItem(banner);
    }

    /**
     * 파일 ID 생성
     */
//    @Override
//    public String generateFileId() {
//        return idGenerator.nextIdFor("fileId");
//    }
}