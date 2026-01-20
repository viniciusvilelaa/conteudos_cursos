let menuAnimais = document.querySelector(".animais-lista");

//Dimensões e distancias

let heightAnimais = menuAnimais.clientHeight; //height do objeto + padding

let scrollAnimais = menuAnimais.scrollHeight; // height do objeto + height do scroll

console.log(heightAnimais);

//OFFSETTOP E OFFSETLEFT

let section = document.querySelector(".animais");

//Distancia entre o elemento e o topo da página
console.log(section.offsetTop); 

//OFFSETLEFT distancia entre parte esquerda do elemento e o canto esquerdo da página
let primeiroh2 = document.querySelector('h2');

const h2Left = primeiroh2.offsetLeft;

console.group(h2Left);


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









