const express = require('express');
const app  = express ();
app.use(express.json());
app.use(express.urlencoded({exteneded:true}))

db = require("./db.js")
reply = db.student

app.post('/ass', (req,res) => {
    db.student.email = req.body.email
    db.student.password = req.body.password

    res.json({
        reply
    
    })

})

app.get('/ass', (req,res) => {
    db.student.email = req.body.email
    db.student.password = req.body.password

    res.json({
        reply
    
    })

})

app.put('/ass', (req,res) => {
    db.student.email = req.body.email
    db.student.password = req.body.password

    res.json({
        reply
    
    })

})



app.listen(8080, ( ) => {
    console.log("the server is running on 8080")
})