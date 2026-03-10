//metodos e propriedades string
let comida = "Macarrão";

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let totalTaxa = 0;
let totalRecebimento = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.toLowerCase().replace('r$', '');
    if(item.descricao.toLowerCase().includes('taxa')){
        totalTaxa += numeroLimpo;
    } else if(item.descricao.toLowerCase().includes('rece')){
        totalRecebimento += numeroLimpo;
    }
   
});

console.log('Total Taxas:', totalTaxa);           // 297
console.log('Total Recebimentos:', totalRecebimento); // 148



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);


// Substitua todos os span's por a's
let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

html = html.split('span').join('a');
console.log(html);
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);

// Retorne o total de taxas
const transacao = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let total = 0;
transacao.forEach((item) => {
    item = item.trim().toLowerCase();
    if(item.includes('taxa')){
        total ++;
    }
});

console.log(total);

