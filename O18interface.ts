// INTERFACE
// Interface is a way to define a contract for the shape of an object. It specifies the properties and their types that an object must have.
// Interfaces are a powerful tool for enforcing a certain structure in your code

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

//  example 0
const examplePerson: Person = {
    firstName: "string",
    lastName: "string",
    age: 33,
}


// interface can also be used to describe the shape of functions and classes
// Interface for a function 
//  example 1
interface MathOperationn {
    (x: number, y: number): number;
}

const add : MathOperationn = (a, b) => a + b;

console.log(add(2, 5));



//  example 2
interface Movie {
    readonly name: string;
    ratings: number;
    genra?: string;
}

const movie: Movie = {
    name: "Star Wars",
    ratings: 8.9,
};

console.log(movie.name);



//continue at 2hr