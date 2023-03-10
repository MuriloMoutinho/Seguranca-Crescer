package br.com.cwi.tcc.security.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class EditarSenhaUsuarioRequest {

    @NotBlank
    @Size(max = 128)
    private String senha;

}
