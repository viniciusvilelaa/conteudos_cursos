function Carro(marca, preco) {
    //This faz referencia ao objeto construido
    this.marca = marca,
        this.preco = preco
}

const honda = new Carro("honda", 10000);

function Aviao(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const hornet = new Aviao('f15', 10000);

function Dom(seletor) {
    this.element = () => {
        return document.querySelector(seletor);
    }

    this.ativar = () => {
        this.element().classList.add('ativar');
    }
}


//EXERCICIO
// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade,
    this.andar = () => {
        console.log(this.nome + ' andou');
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("Joao", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom2(elemento){
    this.elements = () => {
        return document.querySelectorAll(elemento);
    }

    this.addClass = (classe) => {
        const nodeList = this.element();
        nodeList.forEach(element => {
            element.classList.add(classe);
        });
    }

    this.removeClass = (classe) => {
        const nodeList = this.element();
        nodeList.forEach(element => {
            element.classList.remove(classe);
        });
    }

}

const li = new Dom2('li');

