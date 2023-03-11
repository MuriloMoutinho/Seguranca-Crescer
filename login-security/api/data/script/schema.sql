DROP TABLE IF EXISTS permissao CASCADE;
DROP TABLE IF EXISTS usuario CASCADE;
DROP TABLE IF EXISTS editar_senha_token CASCADE;

CREATE TABLE usuario (
                         id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
                         nome VARCHAR(255) NOT NULL,
                         email VARCHAR(255) NOT NULL,
                         senha VARCHAR(128) NOT NULL,
                         imagem VARCHAR(512),
                         criado_em TIMESTAMP NOT NULL,
                         atualizado_em TIMESTAMP,
                         ativo BOOLEAN NOT NULL,

                         CONSTRAINT pk_usuario PRIMARY KEY (id),
                         CONSTRAINT uk_usuario_email UNIQUE (email)
);




CREATE TABLE permissao (
                           id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
                           funcao VARCHAR(100) NOT NULL,
                           usuario_id BIGINT NOT NULL,

                           CONSTRAINT pk_permissao PRIMARY KEY (id),
                           CONSTRAINT uk_permissao UNIQUE (funcao, usuario_id),
                           CONSTRAINT fk_permissao_usuario FOREIGN KEY (usuario_id) REFERENCES usuario
);

CREATE TABLE editar_senha_token(
                                   id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
                                   token VARCHAR(50) NOT NULL,
                                   id_usuario BIGINT NOT NULL,
                                   data_expiracao TIMESTAMP NOT NULL,
                                   utilizado BOOLEAN NOT NULL,

                                   CONSTRAINT pk_editar_senha_token PRIMARY KEY (id),
                                   CONSTRAINT fk_editar_senha_token_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id)
);