import { supabase } from "./supabase.js"

window.login = async function(){

const email = document.getElementById("email").value
const senha = document.getElementById("senha").value

const { error } = await supabase.auth.signInWithPassword({
email: email,
password: senha
})

if(error){

alert("Erro no login")

return

}

window.location.href = "dashboard.html"

}

window.criarConta = async function(){

const email = prompt("Digite o email")
const senha = prompt("Digite a senha")

const { error } = await supabase.auth.signUp({
email: email,
password: senha
})

if(error){

alert(error.message)

}else{

alert("Conta criada")

}

}

window.esqueciSenha = async function(){

const email = prompt("Digite seu email")

await supabase.auth.resetPasswordForEmail(email)

alert("Email de recuperação enviado")

}