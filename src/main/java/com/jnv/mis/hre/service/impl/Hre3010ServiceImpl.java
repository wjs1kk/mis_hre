package com.jnv.mis.hre.service.impl;

import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import javax.annotation.Resource;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.jnv.jncore.vo.ComboVO;
import com.jnv.mis.hre.service.Hre3010DAO;
import com.jnv.mis.hre.service.Hre3010Service;
import com.jnv.mis.hre.vo.Hre3010VO;

@Service("Hre3010Service")
public class Hre3010ServiceImpl implements Hre3010Service{
	@Resource(name = "Hre3010DAO")
    private Hre3010DAO dao;
	@Override
	public List<Hre3010VO> getStdMgtList(){
		return dao.getStdMgtList();
	}
	@Override
    public List<ComboVO> selectHreCodeCombo(Map<String, ? extends Object> params) {
        return dao.selectHreCodeCombo(params);
    }
	@Async
    public CompletableFuture<List<ComboVO>> selectCommonCodeComboAsync(Map<String, String> params) {
        List<ComboVO> comboList = dao.selectHreCodeCombo(params);
        return CompletableFuture.completedFuture(comboList);
    }
}
