package br.com.cwi.tcc.security.service.core;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class NowService {

    public LocalDateTime getDate() {
        return LocalDateTime.now();
    }
}
