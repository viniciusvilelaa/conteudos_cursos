let animais = document.querySelectorAll("img");
console.log(animais);

let imagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens);

let links = document.querySelectorAll('a[href^="#"]');
console.log(links);

let primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2);

let ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);


//forEach
imagens.forEach((item,index,array) => {
    console.log(index);
});


// Mostre no console cada parágrado do site
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach((item) => {
    console.log(item);
});

// Mostre o texto dos parágrafos no console

paragraphs.forEach((item) => {
    console.log(item.textContent);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( ()=> {
  console.log(i++);
});

imgs.forEach(() => i++);

