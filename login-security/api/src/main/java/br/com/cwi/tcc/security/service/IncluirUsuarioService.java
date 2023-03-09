package br.com.cwi.tcc.security.service;

import br.com.cwi.tcc.security.controller.request.IncluirUsuarioRequest;
import br.com.cwi.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.tcc.security.domain.Permissao;
import br.com.cwi.tcc.security.domain.Usuario;
import br.com.cwi.tcc.security.repository.UsuarioRepository;
import br.com.cwi.tcc.security.service.core.GerarSenhaCriptografadaService;
import br.com.cwi.tcc.security.service.core.NowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static br.com.cwi.tcc.security.domain.Funcao.USUARIO;
import static br.com.cwi.tcc.security.mapper.UsuarioMapper.toEntity;
import static br.com.cwi.tcc.security.mapper.UsuarioMapper.toResponse;
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class IncluirUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private GerarSenhaCriptografadaService gerarSenhaCriptografadaService;

    @Autowired
    private NowService nowService;

    @Transactional
    public UsuarioResponse incluir(IncluirUsuarioRequest request) {

        if(usuarioRepository.existsByEmail(request.getEmail())){
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "Esse email já existe");
        }

        Usuario usuario = toEntity(request);
        usuario.setSenha(gerarSenhaCriptografadaService.getSenhaCriptografada(request.getSenha()));
        usuario.adicionarPermissao(getPermissaoPadrao());
        usuario.setCriado_em(nowService.getDate());
        usuario.setAtivo(true);

        usuarioRepository.save(usuario);

        return toResponse(usuario);
    }


    private Permissao getPermissaoPadrao() {
        Permissao permissao = new Permissao();
        permissao.setFuncao(USUARIO);
        return permissao;
    }
}
