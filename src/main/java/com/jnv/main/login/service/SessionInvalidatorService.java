package com.jnv.main.login.service;

public interface SessionInvalidatorService {

    boolean invalidate(String username);
}
