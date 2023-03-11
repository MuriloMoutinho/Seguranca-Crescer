package br.com.cwi.tcc.security.controller.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UsuarioResponse {

    private Long id;
    private String nome;
    private String imagem;
    private String email;
    private LocalDateTime atualizado_em;
    private LocalDateTime criado_em;
}



