let i = 0;

let numero = Number (prompt ("Digite um número positivo:"))

while (i < numero){
console.log (i);
i += 2;
} 

/* Se a colocar a adição da variavel dentro do console.log, vai contar a partir de 2 e não de 0 e 
vai contar dois números a mais a cima do valor da variável numero. por isso, vai estar errado.
i += 2 no console.log: Incrementa antes de exibir, omitindo o valor inicial.
Correção: Separe o incremento da exibição para ter controle sobre o comportamento do loop.*/