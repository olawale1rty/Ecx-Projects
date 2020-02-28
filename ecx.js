// COnsole log test
let today = "ecx"
console.log(today)	

// an array of numbers and loop to check if odd or even
let name =[1,2,3,4,5,6,7,8,9,0]
let list = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w", "x","y","z"]
for (let i=0 ; i<name.length; i++){
 	if (name[i] % 2 == 0){ 		
 		console.log(name[i]  + " is even")
 	}
 	else{
 		console.log(name[i]  + " is odd")
    }
}


// An object to store letters and position in numbers.
let obj = {

}
for(let i=0 ; i<list.length; i++){
	obj[list[i]] = i
}																			
console.log(obj)
/*

// Celsius to Fahrenheit Converter and vice versa
let celsius = prompt("Enter the celsius measurement", "50 C")
let fahrenheit = (celsius * 9/5) + 32  
alert(fahrenheit + ' Fahrenheit' )

let fahrenheit2 = prompt("Enter the fahrenhheit measurement", "50 F")
let celsius2 = (fahrenheit2 - 32)  * 5/9
alert(celsius2 + ' Celsius')


// Prograam to check if three numbers are in thee range 1-50 inclusive.
let number_1 = prompt('Input first number', '1')
let number_2 = prompt('Input second number', '2')
let number_3 = prompt('Input third number', '3')
if( number_1 < 51 || number_2 < 51 || number_3	< 51){
	alert('true')
}
else{
	alert('false')
}


 */


 //Function to add values in an array
 
function add(array){
	let app = array.reduce(function(a, b){
	return a + b;
	}, 0);
	console.log(app)
	}

add([1, 4, 10])

//async function that converts string to number 

async function asd(asdd){
	try{
		
		// asdd.tolowercase()
		const a = asdd.toLowerCase()
		console.log(a)	
	}
	catch(error){
		console.log("This is an error")
	}
}

asd('ASDFGHJKL')
/*finally{
	console.log("This is me")
}*/
// function toLower(string){

// }

const old = require('is-odd')
console.log(old(5))

const arr = require('is-array')
console.log(arr(45))


let a = "sudo"
if (typeof(a) == "string") {
	console.log(a)
	let b = "baah"
}



