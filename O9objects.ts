// OBJECTS
// An object in Typescript is a structured data type that represents a collection ofo properties, each with a key and value pair
// the properties of an object can have specific types, the object itself can be annotated with a type 

// annotating a function that returns an object
function printUser(name: string, age: number, location: string): {name: string; age: number; location: string} {
    return {
        name: name, 
        age: age, 
        location: location
    }
}

console.log(printUser("David", 25, "Nigeria"));


// annotating an object
const myPerson: {firstName: string; lastName: string; age: number} = {
    firstName: "Davido",
    lastName: "Adeleke",
    age: 30
}


