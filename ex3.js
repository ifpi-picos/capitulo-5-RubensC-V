let nota1 = prompt ("Primeira nota:")
nota1 = parseFloat (nota1)

let nota2 = prompt ("Segunda nota:")
nota2 = parseFloat (nota2)

let nota3 = prompt ("Terceira nota:")
nota3 = parseFloat (nota3)

let soma = (nota1 + nota2 + nota3)
soma = parseFloat (soma)

let media = (soma /= 3)
media = parseFloat (soma)

console.log ("Média:", media)

if (media < 7){
    console.log ("Aluno reprovado!")
} else {
console.log ("Aluno aprovado!")
}