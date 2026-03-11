-- =========================================================
-- SISTEMA DE BIBLIOTECA ESCOLAR
-- EEMTI DRAGÃO DO MAR
-- Desenvolvido pelo LEI
-- by D.S. Montenegro
-- =========================================================



-- EXTENSÃO PARA UUID

create extension if not exists "uuid-ossp";



-- =========================================================
-- LIMPAR ESTRUTURA ANTIGA
-- =========================================================

drop table if exists emprestimos cascade;
drop table if exists livros cascade;



-- =========================================================
-- TABELA DE LIVROS
-- =========================================================

create table livros (

id uuid primary key default uuid_generate_v4(),

titulo text not null,
autor text,
categoria text,

estante text,
prateleira text,
secao text,

created_at timestamp default now()

);



-- =========================================================
-- TABELA DE EMPRESTIMOS
-- =========================================================

create table emprestimos (

id uuid primary key default uuid_generate_v4(),

titulo_livro text not null,

aluno_nome text,
turma text,
telefone text,

data_prevista date,

status text default 'emprestado',

email_funcionario text,

created_at timestamp default now()

);



-- =========================================================
-- INDICES (melhorar busca)
-- =========================================================

create index idx_livros_titulo on livros(titulo);
create index idx_livros_categoria on livros(categoria);

create index idx_emprestimos_livro on emprestimos(titulo_livro);
create index idx_emprestimos_data on emprestimos(data_prevista);



-- =========================================================
-- DADOS DE TESTE (opcional)
-- =========================================================

insert into livros (titulo, autor, categoria, estante, prateleira, secao)
values

('Dom Casmurro','Machado de Assis','Literatura','2','B','Clássicos'),

('O Cortiço','Aluísio Azevedo','Literatura','2','C','Clássicos'),

('Memórias Póstumas de Brás Cubas','Machado de Assis','Literatura','2','D','Clássicos');



-- =========================================================
-- FIM DO SCRIPT
-- =========================================================