package br.com.cwi.tcc.security.service;

import br.com.cwi.tcc.security.domain.EditarSenhaToken;
import br.com.cwi.tcc.security.domain.Usuario;
import br.com.cwi.tcc.security.repository.EditarSenhaTokenRepository;
import br.com.cwi.tcc.security.service.core.BuscarUsuarioService;
import br.com.cwi.tcc.security.service.core.GerarHashShaService;
import br.com.cwi.tcc.security.service.core.NowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class ResetarSenhaUsuarioService {

    @Autowired
    private EditarSenhaTokenRepository editarSenhaTokenRepository;

    @Autowired
    private EnviarEmailService enviarEmailService;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private NowService nowService;

    @Autowired
    private GerarHashShaService gerarHashShaService;

    @Transactional
    public void resetar(String email) {

        Usuario usuario = buscarUsuarioService.buscarPorEmail(email);

        String token = UUID.randomUUID().toString();
        String tokenHash = gerarHashShaService.gerar(token);

        EditarSenhaToken tokenUsuario = new EditarSenhaToken();
        tokenUsuario.setToken(tokenHash);
        tokenUsuario.adicionarDataToken(nowService.getDate());
        tokenUsuario.setUsuario(usuario);

        editarSenhaTokenRepository.save(tokenUsuario);

        enviarEmailService.enviar(
                usuario.getEmail(),
                "Editar sua senha",
                "localhost:3000/usuario/" + usuario.getId() + "/editar-senha/" + token);
    }
}
