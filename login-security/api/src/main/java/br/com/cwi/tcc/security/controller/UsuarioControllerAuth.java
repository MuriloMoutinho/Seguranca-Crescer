package br.com.cwi.tcc.security.controller;

import br.com.cwi.tcc.security.controller.request.IncluirUsuarioRequest;
import br.com.cwi.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.tcc.security.service.IncluirUsuarioService;
import br.com.cwi.tcc.security.service.UsuarioAutenticadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/auth")
public class UsuarioControllerAuth {

    @Autowired
    private IncluirUsuarioService incluirUsuarioService;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @PostMapping("/login")
    public UsuarioResponse login() {
        return usuarioAutenticadoService.getResponse();
    }

    @PostMapping("/registrar")
    @ResponseStatus(CREATED)
    public UsuarioResponse incluir(@Valid @RequestBody IncluirUsuarioRequest request) {
        return incluirUsuarioService.incluir(request);
    }

}

