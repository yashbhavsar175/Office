let age: number = 22;

let nae: string = "Yash";


let isAdmin: (boolean | string) = "no" // true; // This can be a boolean or a string, but it's better to keep it consistent.

// let user: { name: string; age: number; isAdmin: boolean } = {
//     name: "Yash",
//     age: 25,
//     isAdmin: true
// };

let numbers: number[] = [1, 2, 3, 4, 5];


let mixedArray: (number | string)[] = [1, "two", 3, "four"];


let tuple: [string, number] = ["Yash", 25]; // Corrected tuple definition
// let tuple: [string, number] = ["Yash", 25,"extra"]; // Note: This is not a valid tuple as per TypeScript rules, tuples should have fixed length and types.


let anyValue: any = "This can be anything" + 2  ; 
// Note: Using `any` allows you to bypass type checking, but it's generally not recommended as it defeats the purpose of TypeScript's type safety.
// console.log(anyValue); // This will log "This can be anything2" without any type errors.


let unknownValue: unknown = "This canbe anything but needs type checking before use";
// Note: Using `unknown` requires type checking before using the value, unlike `any` which can be used directly.
console.log(unknownValue); // This will log the string without any type errors, but you cannot perform operations on it without type checking.

// SO WHAT IS THE DIFFERENCE BETWEEN ANY AND UNKNOWN?
// The `any` type allows you to bypass type checking, meaning you can use it without any restrictions.
// The `unknown` type, on the other hand, requires you to perform type checking before you can use the value, making it safer and more predictable.

// for example, if you want to use `unknownValue` as a string, you need to check its type first:
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // This is safe because we checked the type first.
}
// If you try to use `unknownValue` directly without checking its type, TypeScript will throw an error.
// like this:
// console.log(unknownValue.toUpperCase()); // This will throw an error because `unknownValue` is of type `unknown` and needs type checking first.  

// and if you want to use `anyValue` as a string, you can do it directly without checking its type:
console.log(anyValue.toUpperCase()); // This will log "THIS CAN BE ANYTHING2" without any type errors, because `any` allows you to bypass type checking.

let voidFunction: () => void = () => {
    console.log("This function does not return anything");
} // This function is designed to not return any value, it just logs a message.


let nullValue: null = null;


let undefinedValue: undefined = undefined;

let objectValue: object = {
    key: "value"
};

let neverFunction: () => never = () => {
    throw new Error("This function never returns");
}; // This function is designed to never return, it always throws an error.

enum Color { Red, Green, Blue }
enum Fruit { Apple, Guava, Blue}
let c: Color = Color.Blue;
let a: Fruit = Fruit.Apple; 
// Enums are a way to define a set of named constants, in this case, Color has three possible values: Red, Green, and Blue.