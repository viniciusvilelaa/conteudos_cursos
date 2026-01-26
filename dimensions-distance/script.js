let menuAnimais = document.querySelector(".animais-lista");

//Dimensões e distancias

let heightAnimais = menuAnimais.clientHeight; //height do objeto + padding

let scrollAnimais = menuAnimais.scrollHeight; // height do objeto + height do scroll


//OFFSETTOP E OFFSETLEFT

let section = document.querySelector(".animais");

//Distancia entre o elemento e o topo da página
section.offsetTop;

//OFFSETLEFT distancia entre parte esquerda do elemento e o canto esquerdo da página
let primeiroh2 = document.querySelector('h2');

const h2Left = primeiroh2.offsetLeft;

h2Left;


//getBoundingClientRect() retorna um objeto com valores de dimensão e coordenadas do elemento selecionado

let h2Rect = primeiroh2.getBoundingClientRect();

console.log(
  h2Rect.width,
  h2Rect.height,
  h2Rect.top // < 0 o elemento passou do topo da pagina ja
);


//ELEMENTO WINDOW

window.innerWidth // Retorna a largura da página em pixels
window.innerHeight // Retorna a altura


// METODO matchMedia() mais recomendado para validar largura do browser
// Utiliza media querie

let windowSize = window.matchMedia("(width <= 600px");

if (windowSize.matches) {
  console.log("A tela esta em 600px");
} else {
  console.log("A tela é maior que 600");
};

//console.log(window.scrollY);

// Verifique a distância da primeira imagem
// em relação ao topo da página

let firstImg = document.querySelector('img');
console.log(`Distancia da primeira imagem ao topo é ${firstImg.offsetTop}`);

// Retorne a soma da largura de todas as imagens

function somaLarguraImgs() {
  let listaImagens = document.querySelectorAll('img');
  let somaLargura = 0;

  listaImagens.forEach((item) => {
    const rectItem = item.getBoundingClientRect();
    somaLargura += rectItem.width;
  });

  console.log(`A soma das larguras das imagens é: ${somaLargura}`);
};

somaLarguraImgs();


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

let listaLinks = document.querySelectorAll('a');

listaLinks.forEach((item) => {
  const rectItem = item.getBoundingClientRect();

  if (rectItem.width >= 48 && rectItem.height >= 48) {
    console.log(item, 'Possui acessibilidade');
  } else {
    console.log(item, 'Nao possui acessibilidade')
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

let is720 = window.matchMedia("(width <= 720px)").matches;

let menuNav = document.querySelector('.menu');

if (is720) {
  menuNav.classList.toggle("menu-mobile");
  console.log("classe mobile adicinada ao menu")
};






