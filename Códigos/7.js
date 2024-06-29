let numeros=[1,2,3,5,7,8]

numeros.push(14,6) // Push ADICIONA no FINAL do array. ---> [1,2,3,5,7,8,14,6]

numeros.pop() // Pop REMOVE um elemento do FINAL do array ---> [1,2,3,5,7,8,14]

numeros.push(16,77,81,22) // [1,2,3,5,7,8,14,16,77,81,22]

numeros.splice(5,0,11) // Primeiro parâmetro (5) diz a posição onde vai ser removido/adicionado, 
                       //segundo parãmetro (0) diz quandos elementos vão ser removidos, neste caso nenhum
                       //terceiro parãmetro (11) diz qual elemento vai ser adicionado, então neste caso nós 
                       //vamos até a posição 5 e adicionamos o 11, sem remover nenhum elemento --> [1,2,3,5,7,11,8,14,16,77,81,22]

numeros.sort()// Sort ORDENA os elementos em ordem ALFABÉTICA, então começamos com todos números que começam com 1, 
              //depois os que começam com 2, etc. Você pode vizualizar com letras pra ficar mais fácil, imagine CA, AB, AA e BA, como
              //você ordenaria alfabeticamente?

console.log(numeros) // Números ordenados alfabeticamente ---> [1, 11, 14, 16, 2, 22, 3, 5, 7, 77, 8, 81] 

console.log(numeros.lenght) // .lenght retorna o NÚMERO de ELEMENTOS do array ---> 12
