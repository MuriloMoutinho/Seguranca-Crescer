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

    @Autowired
    private NowService nowService;

    public EditarSenhaToken buscar(String token){
        EditarSenhaToken tokenUsuario = editarSenhaTokenRepository.findByToken(token)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Este token não existe"));

        if(tokenUsuario.isUtilizado()){
            throw new ResponseStatusException(NOT_FOUND, "Este token já foi utilizado");
        }

        if(nowService.getDate().isAfter(tokenUsuario.getData_expiracao())){
            throw new ResponseStatusException(NOT_FOUND, "Este token está expirado");
        }
        return tokenUsuario;
    }
}
