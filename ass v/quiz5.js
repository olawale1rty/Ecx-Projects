welcome = (username, password) => {
    
    //... fetch user from a db etc.
    const bcrypt = require('bcrypt');
    let key = require('./db.js');
    
    //creating variables for receiving the passwords from database.
    const pass1 = key.studentA.password;
    const pass2 = key.studentB.password;
    const pass3 = key.studentC.password;
    const pass4 = key.studentD.password;
    const pass5 = key.studentE.password;

    //creating variables for receiving the usernames from database.
    const user1 = key.studentA.username;
    const user2 = key.studentB.username;
    const user3 = key.studentC.username;
    const user4 = key.studentD.username;
    const user5 = key.studentE.username;

    //variables for receiving the hashed passwords.
    const result1 =  bcrypt.compare(password, pass1);
    const result2 =  bcrypt.compare(password, pass2);
    const result3 =  bcrypt.compare(password, pass3);
    const result4 =  bcrypt.compare(password, pass4);
    const result5 =  bcrypt.compare(password, pass5);

    
    //if statement for checking if the username and password are in the database file and give output.
           
    if ( username == user1 && result1){   
      let output = `${user1} is ${key.studentA.age} years old. His matriculation number is ${key.studentA.matric}. He is in ${key.studentA.dept}. He was born on ${key.studentA.dob}.`     
      console.log(output)  
    } 
    else if ( username == user2 && result2){
      let output = `${user2} is ${key.studentB.age} years old. His matriculation number is ${key.studentB.matric}. He is in ${key.studentB.dept}. He was born on ${key.studentB.dob}.`     
      console.log(output)
     } 
     else if ( username == user3 && result3){
      let output = `${user3} is ${key.studentC.age} years old. His matriculation number is ${key.studentC.matric}. He is in ${key.studentC.dept}. He was born on ${key.studentC.dob}.`     
      console.log(output)
     } 
     else if ( username == user4 && result4){
      let output = `${user4} is ${key.studentD.age} years old. His matriculation number is ${key.studentD.matric}. He is in ${key.studentD.dept}. He was born on ${key.studentD.dob}.`     
      console.log(output)
     } 
     else if ( username == user5 && result5){
      let output = `${user5} is ${key.studentE.age} years old. His matriculation number is ${key.studentE.matric}. He is in ${key.studentE.dept}. He was born on ${key.studentE.dob}.`     
      console.log(output)
     }  
    else {
        console.log('Login Failed')
     }     

    
        
}


welcome("Olawale", "qwerty")









