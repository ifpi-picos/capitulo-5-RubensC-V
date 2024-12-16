let num1 = Number (prompt ("Digite um número:"))

let num2 = Number (prompt ("Outro número:"))

if (num1 % num2 === 0 || num2 % num1 === 0){
    console.log ("Pelo menos um dos números é múltiplo do outro.")
}else {
    console.log ("Nenhum dos número é múltiplo do outro.")
}