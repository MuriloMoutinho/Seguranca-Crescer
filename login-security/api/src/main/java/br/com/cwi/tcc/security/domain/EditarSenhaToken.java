package br.com.cwi.tcc.security.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id") @ToString(of = "id")
public class EditarSenhaToken {

    private static final int MINUTOS_EXPIRACAO = 30;

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String token;
    private boolean utilizado;
    private LocalDateTime data_expiracao;

    @OneToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    public void adicionarDataToken(LocalDateTime data){
        this.setData_expiracao(data.plusMinutes(MINUTOS_EXPIRACAO));
    }

}
