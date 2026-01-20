let btn = document.querySelector(".btn")

for (let index = 0; index < 10; index++) {
    btn.innerHTML += `${index}`;

}


// Array = Lista de valores corelacionados
let hobby = ['Surf', 'Skate', 'Volei'];

//Alguns metodos do objeto Array

//let removed = hobby.pop(); //Remove o ultimo elemento do array e retorna o mesmo
hobby.push('Gym'); //Adiciona o elemento no final do Array
hobby.length; // Retorna o comprimento do Array

let mapped = hobby.map((e) => e.charAt(1)); // Map() retorna um array com o resultado de cada elemente apos a chamada da funcao especificada

// FOR LOOP
// INDEX, CONDICAO, INCREMENTO
for (let index = 0; index < hobby.length; index++) {
    console.log(hobby[index]);
};

//WHILE LOOP
let i = 5;
while (i <= 10) {
    console.log(i);
    i++;
};


//ForEach

let fruits = ['Banana', 'Pera', 'Maca', 'Uva', 'Abacaxi'];

fruits.forEach((e) => console.log(e));


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let jogosGanhos = [1959, 1962, 1970, 1944, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < jogosGanhos.length; i++) {
    console.log(`O brasil ganhou a copa do ano de ${jogosGanhos[i]}`);
};

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let i = 0; i < frutas.length; i++) {
    
    if (frutas[i] === "Uva") {
        console.log(frutas[i]);
        break;
    };
};

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length - 1];

