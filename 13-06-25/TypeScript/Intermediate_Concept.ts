// //Generic Function Example

// function a<t>(b:t):void{
// 	console.log(`Value is ${b}`)
// }

// a<string>("Yash")
// a<number>(22)
// a<boolean>(true)


// Classes with Generic

class a<t> {
	value:t
	error?:string
	constructor(data:t,error?:string)
	{
		this.value=data
		this.error=error
	}
	b():void{
		console.log(`Value is ${this.value}`)
	}
}

let c = new a<string>("Yash")
c.b()
let d = new a<number>(123)
d.b()