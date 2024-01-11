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


