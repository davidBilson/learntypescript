// TYPE ALIASES 
// Type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type
// type aliases are defined using the type keyword followed by the name of the alias, an equal sign and the type it refers to


type User = {
    name: string;
    age: number;
    location: string;
}

// provide argument, and annotate the type alias
const printUserInfo = (user: User) => {
    return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};


const response = printUserInfo({
    name: "Bilson",
    age: 25,
    location: "Ontario BC"
})
