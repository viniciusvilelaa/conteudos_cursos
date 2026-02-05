
//Eventos com addEventListener

//Event retorna um objeto com varias propiedades
function callbackImg(event) {
  console.log(event.currentTarget, event.target, event.type);
};

document.addEventListener("DOMContentLoaded", () => {

  const img = document.querySelector('.animais-lista');

  img.addEventListener('click', callbackImg);


});


//Event.preventDefault() -> Persiste o comportamento padrao do browser para que o evento nao modifique a pagina como
//click em link ou envio de formulario
//this no callback retorna o elemento em que o addEventListener foi adicionado

const link = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();

  console.log(event.currentTarget.href);
};

link.addEventListener('click', clickNoLink);


//Existem varios tipos de eventos

const h1 = document.querySelector('h1');

function eventHandle(event) {

  console.log(event.key);

};

window.addEventListener('keyup', eventHandle);

function handleKeyboard(event) {
  if (event.key === 'a')
    document.body.classList.toggle('azul');
  else if (event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

let links = document.querySelectorAll('a');

function addAtivo(event) {
  event.preventDefault();
  links.forEach((item) => {

    item.classList.remove('ativo');

  });

  event.target.classList.toggle('ativo');

}

links.forEach((item) => {
  item.addEventListener('click', addAtivo);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

todosElementos.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.currentTarget);
  });
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/*todosElementos.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.currentTarget.remove());
  });
});*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function keyPress(event){
  if(event.key === 't')
   document.documentElement.classList.toggle('big-text');
}


window.addEventListener('keydown', keyPress);