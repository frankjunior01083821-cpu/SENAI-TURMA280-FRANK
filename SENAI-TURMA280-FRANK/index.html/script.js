function somar(){
    let valor_1 = Number(document.getElementbyid('valor_1').value)
    let valor_2 = Number(document.getElementbyid('valor_2').value)
    let soma = valor_1 + valor_2
    alert(soma)

}
function multi(){
    let valor_1 = Number(document.getElementbyid('valor_1').value)
    let valor_2 = Number(document.getElementbyid('valor_2').value)
    let multi = valor_1 * valor_2
    alert(multi)

}
function sub(){
    let valor_1 = Number(document.getElementbyid('valor_1').value)
    let valor_2 = Number(document.getElementbyid('valor_2').value)
    let sub = valor_1 - valor_2
    alert(sub)

}
 if(valor_1 == 0 || valor_2 == 0 ){

 }
 else{
    divi = valor_1 / valor_2
 }
 document.getElementbyid("resultaqdo").innerHTML = "o resultado é " + divi;
 alert(divi)