package br.com.cwi.tcc.security.service;

import br.com.cwi.tcc.security.controller.request.EditarUsuarioRequest;
import br.com.cwi.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.tcc.security.domain.Usuario;
import br.com.cwi.tcc.security.mapper.UsuarioMapper;
import br.com.cwi.tcc.security.repository.UsuarioRepository;
import br.com.cwi.tcc.security.service.core.BuscarUsuarioService;
import br.com.cwi.tcc.security.service.core.GerarSenhaCriptografadaService;
import br.com.cwi.tcc.security.service.core.NowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EditarUsuarioService {

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private GerarSenhaCriptografadaService gerarSenhaCriptografadaService;

    @Autowired
    private NowService nowService;

    @Transactional
    public UsuarioResponse editar(Long id, EditarUsuarioRequest request) {

        Usuario usuario = buscarUsuarioService.buscarPorId(id);

        usuario.setNome(request.getNome());
        usuario.setImagem(request.getImagem());
        usuario.setEmail(request.getEmail());
        usuario.setSenha(gerarSenhaCriptografadaService.getSenhaCriptografada(request.getSenha()));
        usuario.setAtualizado_em(nowService.getDate());

        usuarioRepository.save(usuario);

        return UsuarioMapper.toResponse(usuario);
    }
}
