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
