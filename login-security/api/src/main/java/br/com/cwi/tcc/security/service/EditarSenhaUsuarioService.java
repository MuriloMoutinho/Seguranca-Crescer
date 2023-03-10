package br.com.cwi.tcc.security.service;

import br.com.cwi.tcc.security.controller.request.EditarSenhaUsuarioRequest;
import br.com.cwi.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.tcc.security.domain.Usuario;
import br.com.cwi.tcc.security.mapper.UsuarioMapper;
import br.com.cwi.tcc.security.repository.UsuarioRepository;
import br.com.cwi.tcc.security.service.core.BuscarUsuarioService;
import br.com.cwi.tcc.security.service.core.GerarSenhaCriptografadaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EditarSenhaUsuarioService {

    @Autowired
    private ValidarTokenSenhaUsuarioService validarTokenSenhaUsuarioService;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private GerarSenhaCriptografadaService gerarSenhaCriptografadaService;

    @Transactional
    public UsuarioResponse editar(Long id, String token, EditarSenhaUsuarioRequest request) {

        Usuario usuario = buscarUsuarioService.buscarPorId(id);
        validarTokenSenhaUsuarioService.validar(id, token);

        usuario.setSenha(gerarSenhaCriptografadaService.getSenhaCriptografada(request.getSenha()));
        usuario.getEditarSenhaToken().setUtilizado(true);
        usuarioRepository.save(usuario);

        return UsuarioMapper.toResponse(usuario);
    }
}
