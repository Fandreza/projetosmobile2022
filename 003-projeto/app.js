var salario = 2000.50
var aumento = 0.15
var inflacao = 0.07
novosalario = salario + (aumento * salario);
novosalarioinflacao = novosalario - (aumento * salario );
console.log (novosalario);
console.log (novosalarioinflacao);

var strnovosalario = `o novo salario e:\n r$\t\t${novosalario}`;
var strnovosalarioinflacao =`o novo salario aplicada inflacao e:\n r$ ${novosalarioinflacao}`
;
console.log(strnovosalario);
console.log(strnovosalarioinflacao);
