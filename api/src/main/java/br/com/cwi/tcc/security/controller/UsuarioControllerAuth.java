package br.com.cwi.tcc.security.controller;

import br.com.cwi.tcc.security.controller.request.EditarSenhaUsuarioRequest;
import br.com.cwi.tcc.security.controller.request.IncluirUsuarioRequest;
import br.com.cwi.tcc.security.controller.request.ResetarSenhaRequest;
import br.com.cwi.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.tcc.security.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @Autowired
    private ResetarSenhaUsuarioService resetarSenhaUsuarioService;

    @Autowired
    private EditarSenhaUsuarioService editarSenhaUsuarioService;

    @PostMapping("/login")
    public UsuarioResponse login() {
        return usuarioAutenticadoService.getResponse();
    }

    @PostMapping("/registrar")
    @ResponseStatus(CREATED)
    public UsuarioResponse incluir(@Valid @RequestBody IncluirUsuarioRequest request) {
        return incluirUsuarioService.incluir(request);
    }

    @PostMapping("/resetar-senha")
    @ResponseStatus(HttpStatus.CREATED)
    public void resetarSenha(@Valid @RequestBody ResetarSenhaRequest request) {
        resetarSenhaUsuarioService.resetar(request);
    }

    @PutMapping("/editar-senha")
    public UsuarioResponse editarSenha(@RequestParam String token, @Valid @RequestBody EditarSenhaUsuarioRequest request) {
        return editarSenhaUsuarioService.editar(token, request);
    }

}

