// Crie uma função para verificar se um valor é Truthy
function itsTruthy(valor) {
    if (!!valor) {
        console.log("O valor é truthy")
    } else {
        console.log("O valor é falsy")
    }
}

itsTruthy(1);
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(comprimento){
    return comprimento * 4;
}

console.log(perimetro(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
    return `Ola ${nome} ${sobrenome}!, tudo bem?`
}
// Crie uma função que verifica se um número é par
function pares(numero){
    if((numero % 2) == 0){
        console.log("Numero é par")
    } else {
        console.log("Numero é impar")
    }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function type(valor){
    return console.log(typeof(valor));
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function (){
    console.log(nomeCompleto("Vinicius","Vilela"))
});


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados,totalPaises) {
        return console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
}
function jaVisitei(paisesVisitados,totalPaises) {
    return console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
}
precisoVisitar(20,totalPaises);
jaVisitei(20,totalPaises);