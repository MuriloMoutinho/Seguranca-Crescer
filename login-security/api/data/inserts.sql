insert into usuario (email, nome, senha, criado_em) values ('admin@cwi.com.br', 'admin', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', '1995-03-03');
insert into usuario (email, nome, senha, criado_em) values ('usuario@cwi.com.br', 'usuario', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', '1995-03-03');

insert into permissao (funcao, usuario_id) values ('ADMIN', 1);
insert into permissao (funcao, usuario_id) values ('USUARIO', 1);
insert into permissao (funcao, usuario_id) values ('USUARIO', 2);