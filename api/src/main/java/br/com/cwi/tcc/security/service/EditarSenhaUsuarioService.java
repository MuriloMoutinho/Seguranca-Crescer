package br.com.cwi.tcc.security.service;

import br.com.cwi.tcc.security.controller.request.EditarSenhaUsuarioRequest;
import br.com.cwi.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.tcc.security.domain.EditarSenhaToken;
import br.com.cwi.tcc.security.domain.Usuario;
import br.com.cwi.tcc.security.mapper.UsuarioMapper;
import br.com.cwi.tcc.security.repository.EditarSenhaTokenRepository;
import br.com.cwi.tcc.security.repository.UsuarioRepository;
import br.com.cwi.tcc.security.service.core.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class EditarSenhaUsuarioService {

    @Autowired
    private NowService nowService;

    @Autowired
    private EditarSenhaTokenRepository editarSenhaTokenRepository;

    @Autowired
    private GerarSenhaCriptografadaService gerarSenhaCriptografadaService;

    @Autowired
    private BuscarTokenService buscarTokenService;

    @Autowired
    private GerarHashShaService gerarHashShaService;

    @Transactional
    public UsuarioResponse editar(String token, EditarSenhaUsuarioRequest request) {

        String haskToken = gerarHashShaService.gerar(token);
        EditarSenhaToken tokenValue = buscarTokenService.buscar(haskToken);

        if(tokenValue.isUtilizado()){
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "Este token já foi utilizado");
        }

        if(nowService.getDate().isAfter(tokenValue.getData_expiracao())){
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "Este token está expirado");
        }

        tokenValue.getUsuario().setSenha(gerarSenhaCriptografadaService.getSenhaCriptografada(request.getSenha()));
        tokenValue.setUtilizado(true);
        editarSenhaTokenRepository.save(tokenValue);

        return UsuarioMapper.toResponse(tokenValue.getUsuario());
    }
}
