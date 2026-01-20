//OBJETOS em javascript
//Objetos é um conjunto de variaveis e funções(propiedades e metodos)
// CHAVE: VALOR parece um dict?

let pessoaPrincipal = {
    nome: 'Vinicius',
    idade: 28,
    profissao: 'Developer',
    hasSchool: true
};

let quadrado = {
    //Propiedades
    lados: 4,

    //Metodo
    area: function(lado){
        return lado * lado;
    },

    //this. se refere ao objeto do contexto
    //this. esta se referindo a variavel lados do objeto quadrado(objeto atual do contexto)
    perimetro: function(lado){
        return this.lados * lado
    }

}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))



// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let eu = {
    nome: 'Vinicius',
    sobrenome: 'Vilela',
    idade: 28,
    profissao: 'Developer',
    hasSchool: true,

    
};
// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function (){return `Ola ${this.nome} ${this.sobrenome}`}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
    nome: "Labrador",
    cor: "Preto",
    idade: 10,
    viuHomem(pessoa){
        
        if(pessoa.toLowerCase() === "homem"){
            return console.log("Roof Roof")
        }else {
            return console.log("Chill boyyz")
        }
    }
}

//Tudo em javascrip é um objeto basicamente
//String
let nome = "Vinicius";

nome.length;
nome.toUpperCase();
nome.charAt(3);

//Number
let number = 22;
console.log(number.toPrecision(5));

let btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
    alert("Botao clicado")
});

// nomeie 3 propriedades ou métodos de strings
nome.length;
nome.slice(0,3);
nome.replace("cius", "cuis");
// nomeie 5 propriedades ou métodos de elementos do DOM
/*btn.classList.add();
btn.innerHTML;
btn.addEventListener();
btn.firstElementChild;
document.querySelector(".classe");
document.querySelectorAll("")*/

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

document.addEventListener('click', function(){
    navigator.clipboard.writeText("Texto copiado");
    alert("Texto copiado")
});