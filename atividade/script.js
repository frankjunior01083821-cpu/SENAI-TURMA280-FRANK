const alunos = ["lorenzo","gabriel","amanda"]

console.log(alunos)

function somar(n1,n2){
    return n1 + n2 
}

//let titulo = document.getElementById("titulo")

//titulo.innerText = "jojo"
function sendText(){
let texto  = document .getElementById("texto").value 
alert(texto)
document.getElementById("texto").value = ""
}

function somarNumero(){
    let n1 = Number(document .getElementById(n1).value)
    let n2 = Number(document .getElementById(n2).value)
    alert(n1+n2)
}