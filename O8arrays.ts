// ARRAYS TYPES
// Arrays are a type of object that can store multiple values of the same data type.
// Arrays in TS are typed, which implies that you can specify the type of values that an array can hold

// this annotation means "number of array"
const numbers: number[] = [2, 4, 6, 8];
numbers.push(7)
numbers.push(20)

console.log(numbers);

// Multi Dimensional Arrays
const singleDimension: number[] = [1,2,3,4,5];

const multiDimension: number[][] = [
    [1,3,4,5,6],
    [1,3,4,5,6],
];

const tripleDimension: number[][][] = [
    [
        [
            1,
            2,
            3,
            4,
            5
        ],
        [
            1,
            2,
            3,
            4,
            5
        ],
    ],
    [
        [
            1,
            2,
            3,
            4,
            5
        ],
        [
            1,
            2,
            3,
            4,
            5
        ],
    ],
];

console.log(multiDimension);

