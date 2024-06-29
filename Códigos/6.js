//Versão com function()
let array=[1,2,3]

array.forEach(function(numero){
    numero=numero+1;
});

console.log(array); //Resultado esperado: "[2, 3, 4]"

//Versão com arrow function (=>)
let array2=[1,2,3]

array.forEach(numero => numero+1);

console.log(array2); //Resultado esperado: "[2, 3, 4]"