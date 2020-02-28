let today = "ecx"
console.log(today)	


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

let obj = {

}
for(let i=0 ; i<list.length; i++){
	obj[list[i]] = i
}																			
console.log(obj)

/*let celsius = alert('celsius To Fahreheit Scale',' 50 C')
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit)*/