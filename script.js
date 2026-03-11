const SUPABASE_URL = "https://fwemutmkbvnriqxxufhx.supabase.co"

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3ZW11dG1rYnZucmlxeHh1Zmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNjM2MzMsImV4cCI6MjA4ODczOTYzM30.HCXIoI_r7_yGJntTPIizhrP4apxXV3Ahd6Jk2AkvKas"

let supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

console.log("SCRIPT CARREGADO")


if(document.getElementById("login")){

console.log("BOTÃO LOGIN DETECTADO")

document.getElementById("login").onclick = async () => {

alert("BOTÃO CLICADO")

const email = document.getElementById("email").value
const senha = document.getElementById("senha").value

console.log("EMAIL:", email)

const { data, error } = await supabase.auth.signInWithPassword({
email: email,
password: senha
})

console.log("RESPOSTA:", data, error)

if(error){

alert(error.message)
return

}

alert("LOGIN OK")

window.location.href = "dashboard.html"

}

}