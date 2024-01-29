package com.jnv.common.encrypt.service.impl;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.jnv.common.encrypt.service.FileEncryptService;

import org.egovframe.rte.fdl.cryptography.EgovCryptoService;

@Service("fileEncryptService")
public class FileEncryptServiceImpl implements FileEncryptService {

    @Resource(name = "ariaCryptoService")
    private EgovCryptoService cryptoService;

    @Value("#{crypto['password']}")
    private String password;

    @Override
    public void encryptFile(File src, File dest) throws FileNotFoundException, IOException {
        cryptoService.encrypt(src, password, dest);
    }

    @Override
    public void decryptFile(File src, File dest) throws FileNotFoundException, IOException {
        cryptoService.decrypt(src, password, dest);
    }

}
