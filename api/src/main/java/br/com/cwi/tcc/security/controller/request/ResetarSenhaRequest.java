package br.com.cwi.tcc.security.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
public class ResetarSenhaRequest {

    @NotEmpty
    @Size(min = 3, max = 255)
    private String email;
}
