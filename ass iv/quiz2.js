const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPassword = 'qwerty';

// const salt = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync(myPassword, salt);

async function checkUser(username, password) {
    //... fetch user from a db etc.
    let key = require('./db.js');
    
    const user = await bcrypt.compare(username, key.username);
    const pass = await bcrypt.compare(password, key.password);
    
    console.log(user)
    console.log(pass)
    // if (password == key.password){
    //     console.log('correct')
    // }else{
    //     console.log('incorrect')
    // }        
}

checkUser("Mustapha", "qwerty")







