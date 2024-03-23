// NEVER
// The never keyword is used to indicate that a function will not return anything or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached
// Use cases of "Never" in typescript
// == A function that always throws an error
// == A function that has an infinite loop
// == A variable that can never have a value

function throwError(msg: string): never {
    throw new Error(msg);
}

// throwError("geez, she a mopol!");

let x : never;