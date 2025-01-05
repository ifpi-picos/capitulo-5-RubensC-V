let aleatorio = Math.floor (Math.random() * 101)

let palpite = Number (prompt ("Tente adivinhar o número:"))

while (palpite !== aleatorio) {
    if (aleatorio > palpite){
        
        console.log ("O número é maior");

    } else {
        
        console.log ("É menor");

    } 

palpite = Number (prompt ("Tente outra vez:"));

}

console.log ("Parabéns, você acertou!")