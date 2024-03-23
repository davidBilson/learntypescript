//  INTERSECTION TYPES
// An intersection type is a way to combine multiple types into a single type that includes all the properties and methods of constituent type.

//  intersection is denoted by ampersand symbol

type Person = {
    name: string;
    age: number;
}

type Employee = {
    id: number;
    title: string;
}

type PersonAndEmployee = Person & Employee;

const alice: PersonAndEmployee = {
    name: "Mimah",
    age: 25,
    id: 123,
    title: "Manager"
};