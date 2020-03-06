async function checkUser(username, password) {
    //... fetch user from a db etc.
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    let key = require('./db.js');
    const user = key.username;
    const pass = key.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(pass, salt);
    const result = await bcrypt.compare(password, hash);
    
    // console.log(result)
    if (username == user && result ){
        console.log('Login Correct')
    } 
    else if (username == user || result){
        console.log('Login Incorrect')
    } 
    else {
        console.log('Login Failed')
    }      
}

checkUser("Mustapha", "qwerty")







