// //Generic Function Example

// function a<t>(b:t):void{
// 	console.log(`Value is ${b}`)
// }

// a<string>("Yash")
// a<number>(22)
// a<boolean>(true)


// Classes with Generic

// class a<t> {
// 	value:t
// 	error?:string
// 	constructor(data:t,error?:string)
// 	{
// 		this.value=data
// 		this.error=error
// 	}
// 	b():void{
// 		console.log(`Value is ${this.value}`)
// 	}
// }

// let c = new a<string>("Yash")
// c.b()
// let d = new a<number>(123)
// d.b()

// Type Narrowing

// Example of Type Narrowing

// function print(val:string| number | any ):void{
// 	if(typeof val === "string"){
// 		console.log("This is string :- "+val)
// 	}
// 	else if(typeof val=== "number"){
// 		console.log ("This is Number :- "+val)
// 	}
// 	else
// 	{
// 		console.log("This is Unknown Type")
// 	}
// }

// print("Hello World")
// print(123)

//Utility Type

// Partial

interface a {
	name:string
	age?:number
	email:string
}

let b : Partial<a>= {
	name:"Yash",
	age:22
}

//console.log(b)

// Required

let c : Required<a>={
	name:"Yash",
	age:22,
	email:"Yash@gmail.com"
}

// console.log(c)

// Pick

let d : Pick<a,"name">={
	name:"Yash"
}
//console.log(d)

//Omit

let e: Omit<a,"email">={
	name:"Yash",
	age:123
}

///console.log(e)

//Readonly

let f: Readonly<a>={
	name:"Yash",
	age:123,
	email:"Yash@gmail.com"
}

// console.log(f)

// let g = f.name="Yash";

// Record
let h: Record<string,boolean>={
	"Yash":true,
	"John":false
}
// console.log(h)

//Keyof
let j: keyof a;
j="age"; // Valid
// let k: i = "unknown"; // Invalid, will cause a TypeScript error
// console.log(j);

// literal types
type i = "Yash" | "John" | "Doe";

let k: i = "Yash";

function printName(name): void {
	if (name === k) {
		console.log(`Admin is ${name}!`);
	}
	else {
		console.log("Name not recognized.");
	}
}
printName("Yash"); 
