package com.jnv.sm.seq.service.impl;

import java.sql.SQLException;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.jnv.common.seq.service.IdGeneratorService;
import com.jnv.common.util.Constants;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.sm.seq.service.SeqManageDAO;
import com.jnv.sm.seq.service.SeqManageService;
import com.jnv.sm.vo.SeqManageVO;

@Service("seqManageService")
@Transactional
public class SeqManageServiceImpl implements SeqManageService, IdGeneratorService {

    @Resource(name = "seqManageDAO")
    private SeqManageDAO dao;

    @Override
    @Transactional(Transactional.TxType.REQUIRED)
    public String nextIdFor(String seqId) {
        SeqManageVO item = dao.selectSeqManageItemById(seqId, true);
        if (item == null) {
            throw new BusinessException("errors.noSeqId");
        }

        String prefix = "";
        String suffix = "";
        String current = StringUtils.defaultString(item.getSeqCurr());
        String next = "";

        try {
            Integer.parseUnsignedInt(item.getSeqDigits(), 10);
            Integer.parseUnsignedInt(item.getSeqMin(), 10);
            Integer.parseUnsignedInt(item.getSeqInc(), 10);
            prefix = format(item.getSeqPrefix());
            suffix = format(item.getSeqSuffix());
        } catch (NumberFormatException e) {
            throw new BusinessException("errors.invalidSeqConfig");
        }

        if (!current.startsWith(prefix) || !current.endsWith(suffix)) {
            next = String.format("%s%s%s",
                prefix,
                StringUtils.leftPad(item.getSeqMin(), Integer.parseInt(item.getSeqDigits()), '0'),
                suffix);
        } else {
            String numPart = current.substring(prefix.length());
            numPart = numPart.substring(0, numPart.length() - suffix.length());
            int currentNum = Integer.parseUnsignedInt(numPart, 10);
            int inc = Integer.parseInt(item.getSeqInc(), 10);

            currentNum += inc;
            next = String.format(String.format("%%s%%0%dd%%s", Integer.parseUnsignedInt(item.getSeqDigits(), 10)),
                prefix, currentNum, suffix);
        }

        item.setSeqCurr(next);
        dao.updateSeqCurrentValue(item);

        return next;
    }

    @Override
    public List<SeqManageVO> selectSeqManageList(Map<String, ?> params) {
        return dao.selectSeqManageList(params);
    }

    @Override
    public void saveSeqManageList(List<SeqManageVO> list) {
        try {
            for (SeqManageVO item : list) {
                if ("1".equals(item.getRowCheck())) {
                    switch (StringUtils.defaultString(item.getRowStatus())) {
                        case Constants.ROW_TYPE_INSERTED:
                            ensureValidItem(item);
                            dao.insertSeqManageItem(item);
                            break;
                        case Constants.ROW_TYPE_UPDATED:
                            ensureValidItem(item);
                            dao.updateSeqManageItem(item);
                            break;
                        case Constants.ROW_TYPE_DELETED:
                            dao.deleteSeqManageItem(item);
                            break;
                        default:
                            break;
                    }
                }
            }
        } catch (DataAccessException e) {
            SQLException original = (SQLException) e.getCause();
            if (original.getErrorCode() == -10007) {
                throw new BusinessException("errors.duplication", new Object[] { "field.seqId" });
            } else {
                throw new BusinessException("fail.common.msg");
            }
        }
    }

    private void ensureValidItem(SeqManageVO item) {
        if (!Pattern.matches("[\\da-zA-Z_\\-]+", item.getSeqId())) {
            throw new BusinessException("errors.alphanum", new Object[] { "field.seqId" });
        }

        try {
            SequencePattern.of(item.getSeqPrefix());
        } catch (PatternFormatException e) {
            throw new BusinessException("errors.format", new Object[] { "field.prefix" });
        }

        try {
            SequencePattern.of(item.getSeqPrefix());
        } catch (PatternFormatException e) {
            throw new BusinessException("errors.format", new Object[] { "field.postfix" });
        }
    }

    private String format(String pattern) {
        return SequencePattern.of(pattern).format(Instant.now());
    }
}
