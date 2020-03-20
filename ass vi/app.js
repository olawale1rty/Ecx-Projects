const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({exteneded:true}))

 //student database
 let student = {
    name: "Olawale",
    password: "qwerty"
}

//Using POST method

app.post("/class", (req, res) => {
    console.log(req.headers)
    console.log(req.body)
   
    
    
    //Checking database for correct login details and giving output
    if ( req.body.name == student.name && req.body.password == student.password){
        res.json({
            message: "welcome to ECX",
        
        })
    } 
    else if (req.body.name == student.name || req.body.password == student.password){
        res.json({
            message: "Login Incorrect"
        
        })
    } 
    else {
        res.json({
            message: "Failed Login"
        
        })
    }      
    console.log(req.query)
    console.log(req.baseUrl)
    console.log(req.params)

   
})
//using GET method
app.get("/class/:stud",  (req, res) => {
    console.log(req.headers)
    console.log(req.body)
    console.log(req.query)
    let name = req.params.stud
    let pass = req.query.password
     //Checking database for correct login details and giving output
     if ( name === student.name && pass === student.password){
        res.json({
            message: "welcome to ECX",
        
        })
    } 
    else if (name === student.name || pass === student.password){
        res.json({
            message: "Login Incorrect"
        
        })
    } 
    else {
        res.json({
            message: "Failed Login"
        
        })
    }      
   
    console.log(req.baseUrl)
    console.log(req.params)
})

app.listen(8080, ( ) => {
    console.log("the server is running on 8080")
})