// FUNCTION RETURN ANNOTATION
function double1(x: number): number {
    return x * x; // the return annotation implies that the function must return a number
};

const resp = double1(2)
console.log(resp);

function addFriend(b: string, a: string = "David"): string {
    return a + " is a boyfriend to " + b 
}

const newFriendship = addFriend("Jemimah"); //default for `a` has already been provided, but for params with default value that won't be modified, they must be made the last params
console.log(newFriendship);