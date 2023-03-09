package br.com.cwi.tcc.security.mapper;

import br.com.cwi.tcc.security.controller.request.IncluirUsuarioRequest;
import br.com.cwi.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.tcc.security.domain.Usuario;

public class UsuarioMapper {

    public static Usuario toEntity(IncluirUsuarioRequest request) {
        Usuario entity = new Usuario();

        entity.setNome(request.getNome());
        entity.setEmail(request.getEmail());
        entity.setImagem(request.getImagem());
        entity.setEmail(request.getEmail());
        entity.setSenha(request.getSenha());

        return entity;
    }

    public static UsuarioResponse toResponse(Usuario entity) {
        UsuarioResponse response = new UsuarioResponse();

        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setImagem(entity.getImagem());
        response.setEmail(entity.getEmail());
        response.setAtualizado_em(entity.getAtualizado_em());
        response.setCriado_em(entity.getCriado_em());

        return response;
    }

}

