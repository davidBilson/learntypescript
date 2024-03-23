// VOID IN TYPESCRIPT
// Void is a type that represents the absence of any value. It is often used as the return type for functions that do not return a value
function printMessage(message: string): void {
    console.log(`this is my ${message}`);
}
printMessage("message")
// In TypeScript, the void type is used to indicate that a function does not return a value. This is commonly used for functions that perform actions but do not produce a result that needs to be used elsewhere in the program.
// If your function is intended to return a value, you should specify the return type accordingly. It's not that you should avoid using void, but rather you should use it when appropriate and specify the return type accurately based on the function's behavior.