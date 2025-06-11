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

let unknownValue: unknown = "This canbe anything but needs type checking before use";
// Note: Using `unknown` requires type checking before using the value, unlike `any` which can be used directly.


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