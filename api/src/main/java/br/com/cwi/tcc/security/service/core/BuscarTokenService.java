package br.com.cwi.tcc.security.service.core;

import br.com.cwi.tcc.security.domain.EditarSenhaToken;
import br.com.cwi.tcc.security.repository.EditarSenhaTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class BuscarTokenService {

    @Autowired
    private EditarSenhaTokenRepository editarSenhaTokenRepository;

    public EditarSenhaToken buscar(String token){

        return editarSenhaTokenRepository.findByToken(token)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Token indisponível"));
    }
}
