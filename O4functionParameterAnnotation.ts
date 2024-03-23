// FUNCTION PARAMETERS ANNOTATIONS
// function parameter annotations in typescript are used to specify the expected types of the parameters that a function takes

// regular function annotations
function addOne(num: number) {
    return num + 1
}

// arrow function annotation
const double = (x: number, y: number) => x + y;
const res = double(3, 5);

// DEFAULT PARAMS VALUE
function greetAll(person: string = "Anonymous") {
    return `Hello ${person}`;
};

const check = greetAll();
console.log(check);