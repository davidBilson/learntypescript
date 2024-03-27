// GENERICS
// In TS, generics allow you to create reusable components that can work with a variety of types. generics make it possible for you to define functions, classes, and interfaces  that can work with different data types without duplicating code


function printInfo<T>(x: T) : T {
    return x;
}

const str = printInfo<string>("Hello");

const num = printInfo<number>(66);

function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue]
}

const numb = uniqueDataTypesFunc<number>(10, 20)
const strin = uniqueDataTypesFunc<string>("hello", "david")
const bool = uniqueDataTypesFunc<boolean>(true, false)

console.log(bool)