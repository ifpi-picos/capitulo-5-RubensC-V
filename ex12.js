let numero = Number (prompt ("digite um número:"))

let fatorial = 1

for (let i = numero; i > 0; i--){
    fatorial *= i;
}
console.log ("O fatorial de", numero, "é", fatorial)