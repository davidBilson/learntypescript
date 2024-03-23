//TUPLES
// Tuple is a type that represents an array with a fixed number of elements and where each element can have a different type
// the order of the types in the tuple definition corresponds to the order of the values in the actual array
// they are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths

let myTupleArray: [string, number] = ["david", 25];
// denoting that the first item on the array  should be a string and the second should be a number


//destructuring individual elements of an array
let myTupleArr: [string, number] = ["david", 25];
let [firstItem, secondItem] = myTupleArr;
console.log(firstItem);
console.log(secondItem);

const games : [string, string, string] = ["game 1", "game 2", "game 3"];
