let lado1 = Number (prompt ("Digite o primeiro lado do triângulo:"))

let lado2 = Number (prompt ("Digite o segundo lado:"))

let lado3 = Number (prompt ("Digite o terceiro lado:"))

if ((lado1 + lado2) > lado3 && 
    (lado1 + lado3) > lado2 && 
    (lado2 + lado3) > lado1){
        
        if (lado1 === lado2 && lado1 === lado3){

            console.log ("Triângulo Equilátero.")

        } else if ((lado1 === lado2 && lado1 !== lado3) || 
            
            (lado1 === lado3 && lado1 !== lado2) || 
            
            (lado2 === lado3 && lado2 !== lado1)){

            console.log ("Triângulo Isóceles.")

        } else {

            console.log ("Triangulo Escaleno.")

        }


} else {

console.log ("Triângulo inválido!")

}
