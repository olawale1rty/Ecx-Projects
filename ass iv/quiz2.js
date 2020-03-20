async function checkUser(username, password) {
    //... fetch user from a db etc.
    const bcrypt = require('bcrypt');
    let key = require('./db.js');
    const user = key.username;
    const pass = key.password;
    const result = await bcrypt.compare(password, pass);
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

checkUser("Mustaha", "qwert")








