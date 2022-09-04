var animal1: string = "dinosaurus";
var animal2: string = animal1;

console.log(animal1); //dinosaurus
console.log(animal2); //dinosaurus

animal1 = "Godzilla";
console.log(animal1); //Godzilla
console.log(animal2); //dinosaurus

console.log(animal1.toUpperCase()); //GODZILLA
console.log(animal1); //Godzilla
