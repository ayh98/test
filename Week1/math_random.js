'Generates a random number between 0-1'
console.log(Math.random());

'Random number (between 0-1) x10 -> a number between 0-10'
console.log(Math.random()*10);

'Random integer that has been rounded down from a decimal (1.001 -> 1)'
console.log(Math.floor(Math.random()*10))

'Random integer that has been rounded up from a decimal (1.001 -> 2)'
console.log(Math.ceil(Math.random()*10))

'In order to know the number being rounded/floored/ceiled'
let num = Math.random()*10;

console.log(num);
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));