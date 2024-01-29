package com.jnv.common.encrypt.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

public interface FileEncryptService {

    void encryptFile(File src, File dest) throws FileNotFoundException, IOException;

    void decryptFile(File src, File dest) throws FileNotFoundException, IOException;
}
