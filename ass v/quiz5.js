async function checkUser(username, password) {
    //... fetch user from a db etc.
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
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
    const result1 = await bcrypt.compare(password, pass1);
    const result2 = await bcrypt.compare(password, pass2);
    const result3 = await bcrypt.compare(password, pass3);
    const result4 = await bcrypt.compare(password, pass4);
    const result5 = await bcrypt.compare(password, pass5);

    
    //if statement for checking if the username and password are in the database file and give output.
           
    if ( username == user1 && result1){        
        console.log(key.studentA)
    } 
    else if ( username == user2 && result2){
        console.log(key.studentB)
     } 
     else if ( username == user3 && result3){
        console.log(key.studentC)
     } 
     else if ( username == user4 && result4){
        console.log(key.studentD)
     } 
     else if ( username == user5 && result5){
        console.log(key.studentE)
     }  
    else {
        console.log('Login Failed')
     }     

    
        
}

checkUser("Mustapha", "qwerty")







