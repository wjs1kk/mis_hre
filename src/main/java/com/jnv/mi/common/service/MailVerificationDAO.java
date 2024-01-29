package com.jnv.mi.common.service;

import com.jnv.mi.vo.MailVerificationVO;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("mailVerificationDAO")
public interface MailVerificationDAO {

    boolean isMailAddressUsed(MailVerificationVO params);
}
