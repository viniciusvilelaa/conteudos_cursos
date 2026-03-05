function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade
    this.abracar = function () {
        return 'Abraçou'
    }
    this.andar = function andar() {
        return this.nome + 'Andou Objeto'
    }
}

console.log(Pessoa.prototype);

Pessoa.prototype.andar = function () {
    return this.nome + " Pessoa andou";
}

Pessoa.prototype.nadou = function () {
    return this.nome + " nadou"
}

const vinicius = new Pessoa('vinicius', 23);

const rio = new String('RIO');

const lista = document.querySelectorAll('li');

//É poossivel acessar a func do protótipo
// const arrayList = Array.prototype.slice.call(lista);

const arrayList = Array.from(lista);

const Carro = {
    marca: 'ford',
    preco: 2000,
    andar(){
        return true;
    }
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function (){
    return `${this.nome} ${this.sobrenome} tem ${this.idade}`;
}

const andre = new Pessoa("vinicius", "vilela", 23);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
const arrayDados = [NodeList, HTMLCollection, Document];
arrayDados.forEach((item) => {
    console.log(Object.getOwnPropertyNames(item.prototype));
});

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; // Function
li.innerText; //Text
li.value; //Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); //Undefined



// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //Stringx