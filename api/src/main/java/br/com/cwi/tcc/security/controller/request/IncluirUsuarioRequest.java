package br.com.cwi.tcc.security.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter @Setter
public class IncluirUsuarioRequest {

    @NotBlank
    @Size(max = 255)
    private String nome;
    @NotBlank
    @Size(max = 255)
    private String email;
    @Size(max = 512)
    private String imagem;
    @NotBlank
    private String senha;

}

