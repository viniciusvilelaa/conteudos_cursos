
const h1 = document.querySelector('h1');

h1.innerHTML; //Retorna todo html do elemento

h1.outerHTML; //Retorna todo o html tambem em volta do elemento

h1.innerText; //Retorna o conteudo de texto que o elemento possui

//Trasversing -> Naveganbdo pelo DOM utilizando suas propriedades e metodos

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement); //Retorna o elemento pai do elemento selecionado

console.log(lista.parentElement.parentElement); //Pai do pai

lista.previousElementSibling; //Elemento acima do elemento selecionado

lista.nextElementSibling; //Elemento abaixo

lista.children; //HTMLCollection com todos os filhos do elemento

//Manipulando o DOM

const contato = document.querySelector('.contato');

const tituloFaq = document.querySelector('.faq h1');

const cloneFaq = tituloFaq.cloneNode(true);

tituloFaq.appendChild(cloneFaq);

//contato.appendChild(lista);

//contato.replaceChild(h1, titulo);

//contato.insertBefore(lista, titulo);

//contato.removeChild(lista);

// Duplique o menu e adicione ele em copy
let menu = document.querySelector('.menu');
let copy = document.querySelector('.copy');

let menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
let dt = document.querySelector('.faq dt');

console.log(dt);

// Selecione o DD referente ao primeiro DT
let DD = dt.nextElementSibling;

DD.remove();


// Substitua o conteúdo html de .faq pelo de .animais

let faq = document.querySelector('.faq');

let animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;

