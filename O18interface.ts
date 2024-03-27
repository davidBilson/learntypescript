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


interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre  extends MovieDetails {
    genre: string;
}

const movie1: MovieGenre = {
    name: "Star Wars",
    genre: "Actions",
    ratings: 8.9,
    printMovieInfo(
        name: string,
        price: number,
        ratings: number
    ): string | number {
        return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`
    }
}

// Declaration merging
// once an interface is declared, it cannot be directly modified. However, ts allows what is informally referred to as "declaration meging" or "interface extension", which is often misconstrued as "re-opening"

// DM refers to the ability to extend or augment an existing declaration, including interfaces.
// DM can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration
// example of interface merging

// Original interface 
interface Car {
    brand: string;
    start(): void;
}

// Declaration merging (interface extension)
interface Car {
    model: string;
    stop(): void;
}

//usage of the extended interface
const myCar: Car = {
    brand: "Toyota",
    model: "Hilux",
    start() {
        console.log("car is starting");
    },
    stop() {
        console.log("car is stopped")
    }
}