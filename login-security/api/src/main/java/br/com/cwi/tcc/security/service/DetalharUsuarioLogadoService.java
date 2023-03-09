package br.com.cwi.tcc.security.service;

import br.com.cwi.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.tcc.security.domain.Usuario;
import br.com.cwi.tcc.security.mapper.UsuarioMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetalharUsuarioLogadoService {
    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    public UsuarioResponse detalhar() {
        Usuario usuarioAutenticado = usuarioAutenticadoService.get();
        return UsuarioMapper.toResponse(usuarioAutenticado);
    }
}
