package br.com.cwi.tcc.security.controller;

import br.com.cwi.tcc.security.controller.request.EditarSenhaUsuarioRequest;
import br.com.cwi.tcc.security.controller.request.IncluirUsuarioRequest;
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
    private ValidarTokenSenhaUsuarioService validarTokenSenhaUsuarioService;

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

    @PostMapping("{email}/resetar-senha")
    @ResponseStatus(HttpStatus.CREATED)
    public void resetarSenha(@PathVariable String email) {
        resetarSenhaUsuarioService.resetar(email);
    }

    @GetMapping("/{id}/validar-token/{token}")
    public boolean validarToken(@PathVariable Long id, @PathVariable String token) {
        return validarTokenSenhaUsuarioService.validar(id, token);
    }

    @PutMapping("/{id}/editar-senha/{token}")
    public UsuarioResponse editarSenha(@PathVariable Long id, @PathVariable String token, @Valid @RequestBody EditarSenhaUsuarioRequest request) {
        return editarSenhaUsuarioService.editar(id, token, request);
    }

}

