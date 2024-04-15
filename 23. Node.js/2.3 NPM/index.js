import generateName from "sillyname";
import superheroes from "superheroes";

const sillyName = generateName();
console.log(`Mi nombre es ${sillyName}.`);

const name = superheroes.random();
console.log(`Pero soy ${name}!!!`);