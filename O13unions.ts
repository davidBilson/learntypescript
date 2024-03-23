// UNIONS
// Unions are used to declare a type that can have one of several possible types
// Unions are useful when we want to allow a variable or parameter to accept multiple types.
// The syntax for defining a union type in Typescript uses the pipe symbol |

// this means it can only contain one out of three, not a combination 
// let variable: Type1 | Type2 | Type3;

let variable: number | string | boolean;

variable = 10;    // Valid, as it's a number
variable = "hello";  // Valid, as it's a string
variable = true; // Valid, as it's a boolean

variable = "world"; // Valid, as it's a string
variable = 20; 
console.log(variable)

// In this example, variable can hold either a number, a string, or a boolean, but it cannot hold values that are a combination of these types. Each assignment to variable must be of one of the specified types in the union

// example 1
let password: string | number = 22;


// example 2
type UserInfo = {
    first: string;
    last: string;
    age: number
}

type AccountDetails = {
    email: string;
    password: string;
}

let user: UserInfo | AccountDetails = {
    email: "david@gmail.com",
    password: "david"
}

// example 4
const items: (number | string)[] = [1, 4, 7, 8, 9, "unions"];