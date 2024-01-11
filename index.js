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

