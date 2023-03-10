package br.com.cwi.tcc.security.service;

import br.com.cwi.tcc.security.domain.EditarSenhaToken;
import br.com.cwi.tcc.security.domain.Usuario;
import br.com.cwi.tcc.security.service.core.BuscarTokenService;
import br.com.cwi.tcc.security.service.core.BuscarUsuarioService;
import br.com.cwi.tcc.security.service.core.GerarHashShaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class ValidarTokenSenhaUsuarioService {

    @Autowired
    private BuscarTokenService buscarTokenService;
    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private GerarHashShaService gerarHashShaService;

    public boolean validar(Long id, String token) {

        Usuario usuario = buscarUsuarioService.buscarPorId(id);
        String haskToken = gerarHashShaService.gerar(token);
        EditarSenhaToken tokenValue = buscarTokenService.buscar(haskToken);

        if(!usuario.getEditarSenhaToken().equals(tokenValue)){
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "Este token não corresponde ao usúario informado");
        }

        return true;
    }
}
