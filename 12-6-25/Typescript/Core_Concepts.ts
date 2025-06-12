//Functions
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(5, 10));

function add(a?: number, b?: number): void {
      console.log((a ?? 0) + (b ?? 0));
}
// add(5, 10);
add();

function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Yash"));

function log(message?: string): void {
    console.log(message ?? "No message"); 
} // The `message` parameter is optional, if not provided, it defaults to "No message".

log();

function logifff(name:string, age?:number ):void{
	console.log(!name ? "Enter Your name": "Name :- " +name  +( age!==undefined ? " Age :- " + age : "")+ `!` );
}
// logifff()
logifff("Yash",22);


// function log(name:string):void{
// console.log(`hello ${name}! `)
// }

// log("Yash")

// function logif(name:string ="Guest"):void{
// 	console.log('Hello '+ name + '!');
// }
// logif("Yash")
	
// function logiff(name?:string):void{
// 	console.log(name ??"Hey please enter your name" );
// }

// logiff()

// function logifff(name?:string, age?:number ):void{
// 	console.log(!name ? "Enter Your name": "Name :- " +name+ "\n"  +( age==undefined ? "" : "Age :- " + age+"\n" +(age >= 18 ? name + " You are eligble for licence "  : name + "You are not elligble for licence"))+ `!` );
// }
// logifff(" ",16)
// logifff("Yash",22);

// interface employee{
// 	id:number
// 	name:string
// 	age:number
// 	mobile_no?:number
// }

// let person1:employee= {
// 	id:1,
// 	name:"Yash",
// 	age:22
// }

//console.log(person1)

// interface employee_greeting{
// 	name:string;
// 	greet():void;
// }

// let person1 : employee_greeting = {
// 	name:"Yash",
// 	greet(){
// 		console.log(`Welcome ${this.name} to our company`)
// 	}
// }

// // console.log(person1.greet)
// person1.greet()

// Type Alieas

// Union

// type p= string | number

// let p1:p = "abc";
// let p2:p = 123

// console.table([p1,p2])

//intersection

// type address = {
// 	country:string
// 	state:string
// }

// type person = {
// 	name:string
// 	age:number
// }

// type detail_Of_person = address&person

// let id_details : detail_Of_person={
// 	name:"Yash",
// 	age:22,
// 	state:"Gujarat",
// 	country:"India"
// }

// console.log(id_details)


// // Generics
// function log<T>(name:T):void{
// 	console.log(`Hello ${name}!`);
// }
// log<number>(123);

// //type assertion
// let a: any = "Hello World";
// console.log(typeof a);

// let b: string = a as string;
// console.log(b); 
// // let c: string = <string>a; // alternative syntax
// // console.log(c)
// let d:number = (a as string).length;
// console.log(d);

//Classes

// class is a blueprint for creating objects with specific properties and methods.
// It allows you to define the structure and behavior of objects in a more organized way.
// In TypeScript, classes can have properties, methods, and constructors.
// Classes can also have access modifiers like public, private, and protected to control visibility.

// class Person {
// 	constructor(public name: string, public age: number) {
// 	}

// 	greet(): void {
// 		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// 	}
// }	

// let person1 = new Person("Yash", 22);
// person1.greet();

// // private properties
// class Employee {
// 	private id: number;	
// 	private name: string;// private properties cannot be accessed outside the class // they can only be accessed within the class itself
// 	constructor(id: number, name: string) {
// 		this.id = id;
// 		this.name = name;
// 	}

// 	getDetails(): string {
// 		return `ID: ${this.id}, Name: ${this.name}`;
// 	}
// }
// let emp1 = new Employee(1, "Yash");
// console.log(emp1.getDetails());


// public properties outside the class
// class User {
// 	public id: number;	
// 	public name: string; // public properties can be accessed outside the class
// 	constructor(id: number, name: string) {
// 		this.id = id;
// 		this.name = name;
// 	}
// }
// let user1 = new User(2, "John");
// console.log(`User ID: ${user1.id}, User Name: ${user1.name}`);	


// // protected properties
// class Base {	
// 	protected id: number;	
// 	protected name: string; // protected properties can be accessed within the class and its subclasses
// 	constructor(id: number, name: string) {
// 		this.id = id;
// 		this.name = name;
// 	}
// }
// // Subclassing the Base class to access protected properties
// class Derived extends Base {
// 	getDetails(): string {
// 		return `ID: ${this.id}, Name: ${this.name}`;
// 	}
// }
// let derived1 = new Derived(3, "Alice");
// console.log(derived1.getDetails());

