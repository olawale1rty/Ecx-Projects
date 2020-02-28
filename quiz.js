const bcrypt = require('bcrypt')
const saltRounds = 10;
const myPlaintextPassword = 'olawale';
const someOtherPlaintextPassword = 'moshood';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash)
        console.log(myPlaintextPassword)
        // Store hash in your password DB.
        //bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
           // console.log(result)
       // });
        // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
        
        //     console.log(result)
        // });

        async function checkUser(username, password) {
            //... fetch user from a db etc.
         
            const match = await bcrypt.compare(password, user.passwordHash);
         
            if(match) {
                //login
                console.log("Login")
            }
         
            //...
        }

    });
});





