package br.com.cwi.tcc.security.controller;

import br.com.cwi.tcc.security.controller.request.EditarUsuarioRequest;
import br.com.cwi.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.tcc.security.service.DetalharUsuarioLogadoService;
import br.com.cwi.tcc.security.service.EditarUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private EditarUsuarioService editarUsuarioService;

    @Autowired
    private DetalharUsuarioLogadoService detalharUsuarioLogadoService;

    @PutMapping("/{id}/editar")
    public UsuarioResponse editar(@PathVariable Long id, @Valid @RequestBody EditarUsuarioRequest request) {
        return editarUsuarioService.editar(id, request);
    }

    @GetMapping("/me")
    public UsuarioResponse detalharUsuarioLogado() {
        return detalharUsuarioLogadoService.detalhar();
    }



}

