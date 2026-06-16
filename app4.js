let lado1 = prompt("informe o primeiro lado do seu triangulo")
let lado2 = prompt("informe o segundo lado do seu triangulo")
let lado3 = prompt("informe o terceiro lado do seu triangulo")



// isocéles => dois lados iguais
// escaleno => tres lados difrentes
// equilátero => todos lados sao iguais

if (lado1 == lado2 == lado3){
    alert(" O TRIANGULO INFORMADO É EQUILÁTERO CHEFIA")
}else if (lado2 != lado3){

}else if (lado2 != lado3 && lado3 != lado1 && lado2 != lado1){
     alert ("o triangulo é escaleno parceirao")
}else{
    alert ("o triangulo é um isósceles camaradas")
}

