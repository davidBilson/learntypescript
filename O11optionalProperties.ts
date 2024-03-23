// OPTIONAL PROPERTIES
// You can make a certain property optional in an object type by adding a question mark (?) after the property name

type Admin = {
    name: string;
    age?: number;
    readonly location: string;
}

// adding readonly property
const admin: Admin = {
    name: "David Bilson",
    age: 25,
    location: "Hanoi Vietnam"
};
// when a property is 'readonly', it cannot be reassigned
