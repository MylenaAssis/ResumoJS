//Estudo da sintaxe JS
//O JS é case sensitive.

//exibir aviso de erro
console.error("Mensagem de erro.");
//exibir aviso
console.warn("Mensagem de aviso.");
//exibir informação
console.info("Mensagem de informação");
//popup - usado para direcionar mensagem ao usuario
alert("Mensagem do popup");
//Mensagem deixadas com console.log() serão lidas pelo dev tools

//criando variável
//o JS aceita uso de _ e $ na declaração das variáveis
let nome = "Gian"

//constante - não pode ser reatribuida
const a = 3;

//conferindo o tipo da variavel
typeof nome;

//opções para concatenação (as duas incluem espaço entre as variaveis)
nome + ' ' + a;
`$[nome] $[a]`

//contar caracteres da string
nome.length

//selecionando pedaço da string, parametro primeiro caractere e ultimo desejado
nome.slice(0,3)

//buscar caracteres na string, ele retorna a posição
nome.search('a')

//declarar tipo lógico
let feriado = true

//Em JS basicamente so se usa number para trabalhar com numeros
let nota = 10.5 //no type of imprime number, mas também é conhecido como float
//Para verificar se um numero é inteiro ou não, utilizar:
Number.isInteger(nota); //vai retornar true or false

//operações
10**2 //potenciação
10%3 //resto da divisão

//converter numero que foi passado como string para number
parseFloat(variavel)

//converter decimal para inteiro
parseInt(variavel)

//se no desenvolvimento for necessário converter uma string em numero, ela pode apresentar erro por não ter sido passado um numero. Nesse caso fazer a verificação:
parseFloat(variavelTexto) //vai aparecer o erro NaN = not a number
Number.isNaN(parseFloat(variavelTexto)) // essa verificação vai retornar true or false

//array = conjunto de dados
let TecWeb = ["CSS", "HTML", "JAVASCRIPT"];
//o array trabalha com índice, inicando do 0
TecWeb.length //mostra o tamanho
TecWeb[3] //mostra qual caractere esta nessa posição
TecWeb.push["Adicional"] //adiciona mais um item ao array, retorna a quantidade atualizada de itens do array

//Os array nao sao um tipo nativo do javascript. No typeof ele retorna object que é o tipo mais primitivo do JS. O array do JS não precisa ser homogeneo, comporta diversos tipos.


//Laços
for (variavel i = 0; i < nomes.length; i++) { //(posição atual do array; posição final para parar o laço; incremento)
    comandos
}
//no laço for não é preciso se preocupar com o tamanho do array, porque ao ultrapassar ele aparece como undefined
//mesmo resultado com menos codigo:
for (indiceAtual in nomes(array)) {
    console.log("O nome é: " + nomes(array)[indiceAtual])
}


while ( condicao ) {
    comandos
    incremento++
}

do {
    comandos
    incremento
} while ( condicao );

//Comparadores logicos
== //compara valores igual
=== //compara valor e tipo iguais
!= //valor diferente
!== //valor e tipo diferente

//exemplo condicional
let idade = prompt("Digite sua idade: ")
idade = parseInt(idade)
let estaAcompanhada = false

if (idade >= 18) {
    console.log("Pode entrar");
    else if (estaAcompanhada == true) {
        console.log("Pode entrar pois esta acompanhada.")
        else {
            console.log("Não pode entrar, pois é menor de idade e não está acompanhada.")
        }
    }
}

//em JS podemos verificar se uma condição é verdadeira ou falsa de duas maneiras:
(condicao == true) ou (condicao)
(condicão != false) ou (!condicao)

//ao utilizar o operador ternário, pode-se adotar outra estrutura
//É possivel escrever algo como: let podeEntrar = if (idade>=18) {true} else {false} com o operador ternario:
let podeEntrar = idade >= 18 ? true : false

//function
let base = prompt("Valor da base? ");
let altura = prompt("Valor da altura? ");

function calculaArea (base, altura) {
    return base * altura
}

console.log("A área calculada é " + calculaArea(base, altura));

//INTEGRANDO HTML E JS

//utilidades devtools
window.location.href //recupera a URL da pagina
window.location.pathname //pega a parte do URL que vem depois do domínio
window.history.back() //acessar a página anterior

//DOM - Document Object Model
document.title = "Conteudo" //alteração de conteudo do DOM com JS
document.body //comando que mostra todo o html da pagina
document.body.innerHTML = "conteudo" //inserir conteúdo HTML na página

//selecionando elemento com js pelo devtool
document.querySelector('input[type+number]')//seleciona elemento de input number

//Podemos selecionar um ou mais elementos através de alguns critérios:
//Nome da tag– retorna todos os elementos da tag: 
document.getElementsByTagName('input’) 
//ID – retorna apenas um elemento: 
document.getElementById('btn-depositar’)
//Classe –retorna todos os elementos que usam a classe: 
document.getElementsByClassName('container’)
//Seletores especiais: 
document.querySelector('input[type=number]’) 
//para retornar todos os itens que atendam ao critério da busca: 
document.querySelectorAll('input[type=number]')

if (document.querySelector('h3')) //o if serve para evitar que a interação seja feita com elemento que nao existe

document.head //acessar conteudo do head

//validações customizadas
//validação de campo obrigatório é feita pelo HTML, mas para obrigar a preencher nome completo, por exemplo, precisa do JS
//acessando o conteudo do campo nome completo:
nomecompleto.value
//acessando como um array:
nomecompleto.value.split(' ')
nomecompleto.value.split(' ').length //diz o tamanho do array
//a partir do tamanho do array determinado na condição acima, desativamos o button com:
document.getElementById('btn-depositar').disabled = true
//resultado:
document.getElementById('btn-depositar').disabled = nomecompleto.value.split(' ').length < 3

