package br.com.cwi.tcc.security.repository;

import br.com.cwi.tcc.security.domain.EditarSenhaToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EditarSenhaTokenRepository extends JpaRepository<EditarSenhaToken, Long> {

    Optional<EditarSenhaToken> findByToken(String token);
}
