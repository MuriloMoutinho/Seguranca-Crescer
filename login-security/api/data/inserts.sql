insert into usuario (email, nome, senha, criado_em, ativo) values ('admin@cwi.com.br', 'admin', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', '1995-03-03', true);
insert into usuario (email, nome, senha, criado_em, ativo) values ('usuario@cwi.com.br', 'usuario', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', '1995-03-03', true);

insert into permissao (funcao, usuario_id) values ('ADMIN', 1);
insert into permissao (funcao, usuario_id) values ('USUARIO', 1);
insert into permissao (funcao, usuario_id) values ('USUARIO', 2);