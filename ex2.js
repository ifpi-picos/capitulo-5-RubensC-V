let num1 = parseInt (prompt ("Insira um número:"))
let num2 = parseInt (prompt ("Insira outro número:"))
let num3 = parseInt (prompt ("Outro número:"))

if (num1 > num2 && num1 > num3){
    console.log ("O maior número é:", num1)
}else if (num2 > num1 && num2 > num3){
    console.log ("O maior número é:", num2)
}else {
    console.log ("O maior número é:", num3)
}