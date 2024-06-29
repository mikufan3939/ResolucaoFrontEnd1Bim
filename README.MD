<a href="https://www.youtube.com/watch?v=nwuW98yLsgY"><img src="https://c.tenor.com/Zf35nqIQW2cAAAAd/tenor.gif"></a>

# Resolução Profa Front-End 1º Bimestre ☝️🤓

## Objetivas✅
- 1 - D
- 2 - A
- 4 - E

## Discursivas📝
*Obs1: Se vo quiser testar na prática (algo que eu fortemente recomendo), todos códigos estão nos arquivos do repositório para download.*
*Obs2: Eu não uso arrow functions (=>) então todos códigos estão com function(), mas é o mesmo funcionamento*
#### 3 - ANALISE o código CSS  e EXPLIQUE por qual motivo é utilizado a media query (@media) E qual seu comportamento neste código.
>A media query é utilizada paar tornar os elementos com a classe ".titulo" responsivos a diferentes tamanhos de tela, mais especificamente, se limitando a uma largura de 420 px.

#### 5 - EXPLIQUE o que é uma Função de Primeira Classe (conhecidos também como callbacks).
*Obs: Minha resposta original tirou 1.3 de 1.5 nesta questão, então eu dei uma alterada aqui, mas ainda não sei se é o que o professor queria.*
>Função de Primeira Classe é uma função chamada como parâmetro de outra função, para ser utilizados devemos passar a palavra "function()" ou uma arrouw function (=>) para os parâmetros de uma função.

#### 6 - ESCREVA um exemplo de código (em JavaScript) de Função de Primeira Classe (callbacks) utilizando os métodos de Arrays da linguagem Javascript.
*Obs: Recomendo aprender o forEach bem certinho, é de longe a função mais útil da pra fazer basicamente tudo com ela.*
```
let array=[1,2,3]
array.forEach(function(numero){
    numero=numero+1;
});

console.log(array); //Resultado esperado: "[2, 3, 4]"
```


#### 7 - ANALISE o código JavaScript a seguir E ESCREVA os resultados do print da função console.log().
*Obs: Maiores expliicações no código.*
>Passo a passo:<br>let numeros = [1, 2, 3, 5, 7, 8]<br>numeros.push(14, 6) ---> *[1, 2, 3, 5, 7, 8, 14, 6]*<br>numeros.pop ---> *[1, 2, 3, 5, 7, 8, 14]*<br>numeros.push(16, 77, 81, 22) ---> *[1, 2, 3, 5, 7, 8, 14, 16, 77, 81, 22]*<br>numeros.splice(5, 0, 11) ---> *[1, 2, 3, 5, 7, 11, 8, 14, 16, 77, 81, 22]*<br>numeros.sort ---> *[1, 11, 14, 16, 2, 22, 3, 5, 7, 77, 8, 81]*<br>numeros.lenght ---> 12

#### 8 - ESCREVA um código JavaScript capaz de ler o objeto a seguir e retornar um resultado com as seguintes regras:<br> a) A média dos alunos deve ser maior ou igual a 7.0.<br>   b) O array/lista deve retornar apenas os atributos *nomes* com o resultado em ordem alfabética.<br>   c) Utilize apenas métodos/funções da própria linguagem JavaScript para manipular o array da variável alunos
```
let alunos=[ //Aqui temos um array "[]" de objetos "{}", cada objeto tem tres propriedades: "nome", "notaPrimeiroBim", "notaSegundoBim"
             //Para realizar o exercicio precisamos passar por cada objeto e verificar se a média da nota1 com a nota2 é maior que 7, e se esse for o caso guardar o nome.
    {
        nome:'Goku', notaPrimeiroBim:6.7, notaSegundoBim:8.0
    },
    {
        nome:'Kuririn', notaPrimeiroBim:9.0, notaSegundoBim:8.4
    },
    {
        nome:'Vegeta', notaPrimeiroBim:5.5, notaSegundoBim:6.9
    },
    {
        nome:'Freeza', notaPrimeiroBim:5.7, notaSegundoBim:4.6
    },
    {
        nome:'Picollo', notaPrimeiroBim:7.2, notaSegundoBim:6.9
    },
    {
        nome:'Gohan', notaPrimeiroBim:4.2, notaSegundoBim:9.9
    },
    {
        nome:'Majin Boo', notaPrimeiroBim:8.3, notaSegundoBim:8.6
    },
]


// Resolução com forEach
let nomesNotaMaior7=[] //Inicializando o array onde vamos colocar os nomes dos alunos com notas >=7.

alunos.forEach(function(aluno){ //Chamando o forEach e passando uma function(aluno), onde "aluno" é cada um dos objetos com "nome", "nota1" e "nota2".
    if((aluno[notaPrimeiroBim]+aluno[notaSegundoBim])/2 >= 7){ // Para acessar as propriedades "notaPrimeiroBim" e "notaSegundoBim" utilizamos os [], assim fazemos a média e verificamos se ela é >=7
        nomesNotaMaior7.push(aluno[nome]) // Adicionando no array nomesNotaMaior7 a propriedade "nome" do aluno que passou no "if".
    } 
});

nomesNotaMaior7.sort() // Ordenando o array em ordem alfabetica.

console.log(nomesNotaMaior7) // Printando.


//Resolução com filter
let nomesNotaMaior7FILTER = alunos.filter(function(aluno){ // Como o filter NÃO altera o array original, temos que passar o resultado dele para outra variável, o restante é o mesmo esquema do forEach, "aluno" vai ser cada um dos objetos.
    return (aluno[notaPrimeiroBim]+aluno[notaSegundoBim])/2>=7;                                        
});

nomesNotaMaior7FILTER.sort(); // Ordenando o array em ordem alfabetica.

console.log(nomesNotaMaior7FILTER) // Printando
```
#### 9 - ANALISE o código Js a seguir E ESCREVA um código utilizando Template Strings para obter o resultado esperado.<br>
```let nomes='Joao';
let profissao='advogado trabalhista';
let formacaoAcademica='Direito';

//Template Strings são strings onde você pode inserir uma variavel diretamente nela, utilizando a sintaxe ${variavel} entre crases,
//entao só precisamos colocar as variaveis nos lugares corretos.

//Resolucao
let mensagem=`Sou ${nome} e estou muito feliz por estar aqui. Com formação em ${formacaoAcademica}, estou focado em atuar como
              ${profissao}.` //Substituimos do texto original Joao por ${nome}, Direito por ${formacaoAcademica} e profissao por
                             //${profissao}, no final o resultado acaba sendo o mesmo.
```

#### 10 - ANALISE as figuras geométricas a seguir E ESCREVA o código da classe CSS pra obter o desenho correspondente.<br>
```.quadrado{
    width: 10px; /*Definindo a largura*/
    height: 10px; /*Definindo a altura*/
    border-width: 10px; /*Definindo a largura da borda*/
    border-color: black; /*Definindo a cor da borda*/
}

.quadrado{
    width: 10px; /*Definindo a largura*/
    height: 10px; /*Definindo a altura*/
    border-width: 10px; /*Definindo a largura da borda*/
    border-color: black; /*Definindo a cor da borda*/
    border-radius: 50%; /*Transformando em um circulo*/
}
```

### BOA SORTE NA PROVA 🙏 ESTUDEM QUE VOCÊS PASSARÃO <br> AGUARDO VOCÊS NO PRÓXIMO SEMESTRE 
<img src="https://i.imgur.com/QTRmFhF.gif">
