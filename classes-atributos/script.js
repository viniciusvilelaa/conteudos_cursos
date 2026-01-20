//Trabalhando com classes dos objetos
let menu = document.querySelector('.menu');

//Adiciona
menu.classList.add('ativo', 'azul');

menu.classList.toggle('azul'); //Toggle adiciona ou remove classe se tiver ou nao

//.contains retorna valor booleano true ou false
if(menu.classList.contains("azul")){
  console.log("tem classe azul");
}else{
  console.log("nao tem classe azul");
}

//Metodo antigo para modificar classes
menu.className += ' adicinado';

let animais = document.querySelector('.animais');

let idAnimais = animais.getAttribute("id");

console.log(idAnimais);

console.log(animais.hasAttribute("alt"));


// Adicione a classe ativo a todos os itens do menu
let itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
  item.classList.toggle("ativo");
});


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
let arrayMenus = Array.from(itensMenu);

arrayMenus.slice(1).forEach((item) => {
  item.classList.toggle("ativo");
});

// Verifique se as imagens possuem o atributo alt

let imagensSite = document.querySelectorAll("img");

imagensSite.forEach((item) => {
  console.log(`A imagem ${item} tem alt? ${item.hasAttribute("alt")}`);
});

// Modifique o href do link externo no menu

let hrefExterno = document.querySelector('a[href^="https"]');

hrefExterno.setAttribute("href", "https://www.google.com/?hl=pt_BR");
