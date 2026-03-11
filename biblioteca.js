import { supabase } from "./supabase.js"

window.totalLivros = async function(){

const { count } = await supabase
.from("livros")
.select("*", { count: "exact", head: true })

document.getElementById("resultado").innerHTML =
"Total de livros cadastrados: " + count

}

window.emprestimosHoje = async function(){

const hoje = new Date().toISOString().split("T")[0]

const { data } = await supabase
.from("emprestimos")
.select("*")
.eq("data_emprestimo", hoje)

document.getElementById("resultado").innerHTML =
JSON.stringify(data, null, 2)

}

window.devolucoesHoje = async function(){

const hoje = new Date().toISOString().split("T")[0]

const { data } = await supabase
.from("emprestimos")
.select("*")
.eq("data_prevista", hoje)

document.getElementById("resultado").innerHTML =
JSON.stringify(data, null, 2)

}

window.cadastrarLivro = async function(){

const titulo = prompt("Título do livro")
const autor = prompt("Autor")

await supabase
.from("livros")
.insert({
titulo: titulo,
autor: autor
})

alert("Livro cadastrado")

}

window.registrarEmprestimo = async function(){

const livro = prompt("ID do livro")
const aluno = prompt("Nome do aluno")
const data = prompt("Data devolução (AAAA-MM-DD)")

await supabase
.from("emprestimos")
.insert({

livro_id: livro,
aluno_nome: aluno,
data_prevista: data

})

alert("Empréstimo registrado")

}

window.registrarDevolucao = async function(){

const id = prompt("ID do empréstimo")

await supabase
.from("emprestimos")
.update({

status:"devolvido",
data_devolucao:new Date()

})
.eq("id", id)

alert("Livro devolvido")

}