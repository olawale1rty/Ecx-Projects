// const express = require('express');
// const app  = express ();
// app.use(express.json());
// app.use(express.urlencoded({exteneded:true}))

// db = require("./db.js")
// reply = db.student

// app.post('/ass', (req,res) => {
//     db.student.email = req.body.email
//     db.student.password = req.body.password

//     res.json({
//         reply
    
//     })

// })

// app.get('/ass', (req,res) => {
//     db.student.email = req.body.email
//     db.student.password = req.body.password

//     res.json({
//         reply
    
//     })

// })

// app.put('/ass', (req,res) => {
//     db.student.email = req.body.email
//     db.student.password = req.body.password

//     res.json({
//         reply
    
//     })

// })



// app.listen(8080, ( ) => {
//     console.log("the server is running on 8080")
// })


// Ecx day 13 challenge

// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({exteneded:true}));

// db = {};

// app.post('/createdata',(req, res)=>{
//     db = req.body
//     console.log(db)

// });

// app.get('/getdata',(req, res)=>{
//     res.json({ db }); 

// });

// app.listen(8080, ( ) => {
//     console.log("the server is running on 8080")
// })

// ECX day 15 challenge

// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({exteneded:true}));

// let db = {};
// let sgpa = {};
// let output = 0;
// let total_units= 0;
// // POST REQUEST TO GET INFO FROM SERVER 
// app.post('/createdata',(req, res)=>{
//     db = req.body;
//     // LOOPING TO GET THE TOTAL UNITS
//     for (let i=0; i<db.courses.length; i++){
//     	let courses = db.courses[i];
//     	total_units += courses.units;	
//     }
//     // FOR EACH TO GET EACH UNITS AND SCORE
//     let course = db.courses;
//     course.forEach((input)=>{
//     	// IF STATEMENT TO GET THE GP FOR EACH COURSE AND CALCULATE THE SGPA.
//     	if (input.score >= 70){
//     		grade = 5.00;
//     		output += (input.units*grade)/total_units; 
//     	}else if(input.score >= 60){
//     		grade = 4.00;
//     		output += (input.units*grade)/total_units; 
//     	}else if(input.score >= 50){
//     		grade = 3.00;
//     		output += (input.units*grade)/total_units; 
//     	}else if(input.score >= 45){
//     		grade = 2.00;
//     		output += (input.units*grade)/total_units; 
//     	}else if(input.score >= 40){
//     		grade = 1.00;
//     		output += (input.units*grade)/total_units; 
//     	}else{
//     		grade = 0.00;
//     		output += (input.units*grade)/total_units; 
//     	}

    	  	
//     });    
//     // console.log(output);
// });
// // GET REQUEST TO SHOW THE RESULT
// app.get('/getdata',(req, res)=>{
// 	sgpa = output;
//     res.json({ sgpa });
// });

// app.listen(8080, ( ) => {
//     console.log("the server is running on 8080")
// })
// ECX day 16 challenge
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({exteneded:true}));
// const bcrypt = require('bcrypt');

// let db = {
// 	"password":""
// };
// let db2 = {};
// let pass = '';
// app.post('/signup',(req, res)=>{
//     db = req.body;
//     // console.log(db);
//     pass = bcrypt.hashSync(db.password, bcrypt.genSaltSync(10));
//     res.json("Successfully Signed In");
// });
    
// app.post('/login',(req, res)=>{
// 	db2 = req.body;
// 	bcrypt.compare(db2.password,pass).then((result) => {
// 		console.log(result)
// 		if( db.email == db2.email && result ){
// 			res.json( "Login Successful" );
// 		}else if(db.username == db2.username && result){
// 			res.json( "Login Successful" );
// 		}else{
// 			res.json( "Login Incorrect" );
// 		}
    
// 	});
	
	
// });

// app.listen(8080, ( ) => {
//     console.log("the server is running on 8080")
// })

// Day 17 
// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// app.use(express.json());
// app.use(express.urlencoded({exteneded:true}));
// const bcrypt = require('bcrypt');

// let db = {
// 	"password":""
// };
// let db2 = {};
// let pass = '';
// let db3 = {};
// let email, time, date = {};

// app.post('/signup',(req, res)=>{
//     db = req.body;
//     // console.log(db);
//     pass = bcrypt.hashSync(db.password, bcrypt.genSaltSync(10));
//     const date_signup = new Date();
//     let month = date_signup.getMonth()+1;
//     date = date_signup.getDate()+"-"+month+'-'+date_signup.getFullYear();
//     time = date_signup.toLocaleString('en-US', {hour: 'numeric',hour12: true, minute:'numeric', second:'numeric'}) 
//     res.json("Successfully Signed In");
// });
// // authetication of the login and getuser  
// let secret='ecxbackend'; 
// //middleware to check if the authetification is correct


// let checkToken = (req, res, next)=>{
// 	try{
// 		let token = req.headers['authorization'];
// 		if (token.startsWith('Bearer')){
// 			token = token.slice(7, token.length);
// 		}
// 		if (token){
// 			jwt.verify(token, secret, (err, decoded)=>{
// 				if(err){
// 					return res.json('Token is not valid');
// 				}else{
// 					req.decoded = decoded;
// 					next();
// 				}
// 			});
// 		}
// 	}catch(error){
// 		return res.json('Auth token is not supplied');
// 	}
// };
// //server that creates the token.


// app.post('/login',(req, res)=>{
// 	db2 = req.body;
// 	bcrypt.compare(db2.password,pass).then((result) => {
// 		// console.log(result)
// 		if( db.email == db2.email && result ){
// 			let token_pass = jwt.sign({email: db2.email},
// 				secret, {expiresIn: '24h'});
// 			res.json({  
// 				message:"Authentication Successful",
// 				token: token_pass});
// 		}else if(db.username == db2.username && result){
// 			let token_pass = jwt.sign({password: db2.username},
// 				secret, {expiresIn: '24h'});
// 			res.json({  
// 				message:"Authentication Successful",
// 				token: token_pass});
// 		}else{
// 			res.json( "Login Incorrect" );
// 		}
    
// 	});
	
	
// });

// app.get('/getuser', checkToken, (req, res)=>{
//     db3 = req.query;
//     email = db3.email;
	 //   bcrypt.compare(db3.password,pass).then((result) => {
	 //   // console.log(result)
		//     if(db3.email == db.email || result){
		//     	res.json({
		// 	    	email,
		// 	    	date,
		// 	    	time
		//     	});
	 //    	}else{
	 //    		res.json('username or password not correct');
	 //    	}
		// };
	       
// });

// app.listen(8080, ( ) => {
//     console.log("the server is running on 8080")
// })

















// Day18

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// app.use(express.json());
// app.use(express.urlencoded({exteneded:true}));
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');



// let db = {};
// let db2 = {};
// let db3 = {};
// let  time, date = {};
// app.post('/signup',(req, res)=>{
//     db = req.body;
//     // console.log(db);
//     //database
// 	mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
// 	  let inputData = new ecxModel({
// 	  	username: db.username,
// 	  	email: db.email,
// 	  	password: bcrypt.hashSync(db.password, bcrypt.genSaltSync(10)),
// 	  	time: time,
// 	  	date: date
// 	  });
// 	  inputData.save()
// 	  	.then(doc =>{
// 	  		console.log(doc);
	  		
// 	  	})
// 	  	.catch(err=>{
// 	  		console.log(err);
// 	  	})
// 	});


    
//     const date_signup = new Date();
//     let month = date_signup.getMonth()+1;
//     date = date_signup.getDate()+"-"+month+'-'+date_signup.getFullYear();
//     time = date_signup.toLocaleString('en-US', {hour: 'numeric',hour12: true, minute:'numeric', second:'numeric'}) 
//     res.json("Successfully Signed In");
// });



// // authetication of the login and getuser  
// let secret='ecxbackend'; 
// //middleware to check if the authetification is correct


// let checkToken = (req, res, next)=>{
// 	try{
// 		let token = req.headers['authorization'];
// 		if (token.startsWith('Bearer')){
// 			token = token.slice(7, token.length);
// 		}
// 		if (token){
// 			jwt.verify(token, secret, (err, decoded)=>{
// 				if(err){
// 					return res.json('Token is not valid');
// 				}else{
// 					req.decoded = decoded;
// 					next();
// 				}
// 			});
// 		}
// 	}catch(error){
// 		return res.json('Auth token is not supplied');
// 	}
// };
// //server that creates the token.


// app.post('/login',(req, res)=>{
// 	db2 = req.body;
// 	mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  
// 	  if(db2.email == undefined){
// 		//query for the username
// 		  ecxModel
// 			.find({
// 				username: db2.username
// 				// email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(index);
				
// 				bcrypt.compare(db2.password,index.password).then((result) => {
				
// 					if( index.email == db2.email && result ){
// 						let token_pass = jwt.sign({email: db2.email},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else if(index.username == db2.username && result){
// 						let token_pass = jwt.sign({password: db2.username},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else{
// 						res.json( "Login Incorrect" );
// 					}
// 		    	});

// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}else{
// 			//query for the email
// 		  ecxModel
// 			.find({
// 				// username: db2.username
// 				email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(doc);
				
// 				bcrypt.compare(db2.password,index.password).then((result) => {
				
// 					if( index.email == db2.email && result ){
// 						let token_pass = jwt.sign({email: db2.email},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else if(index.username == db2.username && result){
// 						let token_pass = jwt.sign({password: db2.username},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else{
// 						res.json( "Login Incorrect" );
// 					}
// 		    	});

// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}
	  	
// 	  });	
	
// });

// app.get('/getuser', checkToken, (req, res)=>{
//     db3 = req.body;
//     mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  
// 	  if(db3.email == undefined){
// 		//query for the username
// 		  ecxModel
// 			.find({
// 				username: db3.username
// 				// email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(index);
// 				let id = index._id;
// 			    let email =	index.email;
// 			    let username = index.username;
// 			    let date =	index.date;
// 			    let time =	index.time
// 				res.json({
// 					id,
// 					email,
// 					username,
// 					date,
// 					time
					
// 		    	});
// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}else{
// 			//query for the email
// 		  ecxModel
// 			.find({
// 				// username: db2.username
// 				email: db3.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(doc);
// 				let id = index._id;
// 			    let email =	index.email;
// 			    let username = index.username;
// 			    let date =	index.date;
// 			    let time =	index.time
// 				res.json({
// 					id,
// 					email,
// 					username,
// 					date,
// 					time
					
// 		    	});
				

// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}
	  	
// 	  });		
    
// });


// app.listen(8080, ( ) => {
//     console.log("the server is running on 8080")
// })

//day 19

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// app.use(express.json());
// app.use(express.urlencoded({exteneded:true}));
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');



// let db = {};
// let db2 = {};
// let db3 = {};
// let db4 = {};
// let db5 = {};
// let db6 = {};
// let  time, date = {};
// app.post('/signup',(req, res)=>{
//     db = req.body;
//     // console.log(db);
//     //database
// 	mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
// 	  let inputData = new ecxModel({
// 	  	username: db.username,
// 	  	email: db.email,
// 	  	password: bcrypt.hashSync(db.password, bcrypt.genSaltSync(10)),
// 	  	time: time,
// 	  	date: date
// 	  });
// 	  inputData.save()
// 	  	.then(doc =>{
// 	  		console.log(doc);
	  		
// 	  	})
// 	  	.catch(err=>{
// 	  		console.log(err);
// 	  	})
// 	});


    
//     const date_signup = new Date();
//     let month = date_signup.getMonth()+1;
//     date = date_signup.getDate()+"-"+month+'-'+date_signup.getFullYear();
//     time = date_signup.toLocaleString('en-US', {hour: 'numeric',hour12: true, minute:'numeric', second:'numeric'}) 
//     res.json("Successfully Signed In");
// });



// // authetication of the login and getuser  
// let secret='ecxbackend'; 
// //middleware to check if the authetification is correct


// let checkToken = (req, res, next)=>{
// 	try{
// 		let token = req.headers['authorization'];
// 		if (token.startsWith('Bearer')){
// 			token = token.slice(7, token.length);
// 		}
// 		if (token){
// 			jwt.verify(token, secret, (err, decoded)=>{
// 				if(err){
// 					return res.json('Token is not valid');
// 				}else{
// 					req.decoded = decoded;
// 					next();
// 				}
// 			});
// 		}
// 	}catch(error){
// 		return res.json('Auth token is not supplied');
// 	}
// };
// //server that creates the token.


// app.post('/login',(req, res)=>{
// 	db2 = req.body;
// 	mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  
// 	  if(db2.email == undefined){
// 		//query for the username
// 		  ecxModel
// 			.find({
// 				username: db2.username
// 				// email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(index);
				
// 				bcrypt.compare(db2.password,index.password).then((result) => {
				
// 					if( index.email == db2.email && result ){
// 						let token_pass = jwt.sign({email: db2.email},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else if(index.username == db2.username && result){
// 						let token_pass = jwt.sign({password: db2.username},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else{
// 						res.json( "Login Incorrect" );
// 					}
// 		    	});

// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}else{
// 			//query for the email
// 		  ecxModel
// 			.find({
// 				// username: db2.username
// 				email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(doc);
				
// 				bcrypt.compare(db2.password,index.password).then((result) => {
				
// 					if( index.email == db2.email && result ){
// 						let token_pass = jwt.sign({email: db2.email},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else if(index.username == db2.username && result){
// 						let token_pass = jwt.sign({password: db2.username},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else{
// 						res.json( "Login Incorrect" );
// 					}
// 		    	});

// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}
	  	
// 	  });	
	
// });

// app.get('/getuser', checkToken, (req, res)=>{
//     db3 = req.body;
//     mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  
// 	  if(db3.email == undefined){
// 		//query for the username
// 		  ecxModel
// 			.find({
// 				username: db3.username
// 				// email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(index);
// 				let id = index._id;
// 			    let email =	index.email;
// 			    let username = index.username;
// 			    let date =	index.date;
// 			    let time =	index.time
// 				res.json({
// 					id,
// 					email,
// 					username,
// 					date,
// 					time
					
// 		    	});
// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}else{
// 			//query for the email
// 		  ecxModel
// 			.find({
// 				// username: db2.username
// 				email: db3.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(doc);
// 				let id = index._id;
// 			    let email =	index.email;
// 			    let username = index.username;
// 			    let date =	index.date;
// 			    let time =	index.time
// 				res.json({
// 					id,
// 					email,
// 					username,
// 					date,
// 					time
					
// 		    	});
				

// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}
	  	
// 	  });		
    
// });

// //delete path details
// app.delete('/deleteuser', checkToken, (req, res)=>{
//     db4 = req.body;
//     mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  
// 	  if(db4.email == undefined){
// 		//query for the username
// 		  ecxModel
// 			.findOneAndRemove({
// 				username: db4.username
// 				// email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(index);
// 				let username = index.username;
// 				res.json(
// 					username + ' has been deleted.'
					
// 		    	);
// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}else{
// 			//query for the email
// 		  ecxModel
// 			.find({
// 				// username: db2.username
// 				email: db4.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(doc);
// 				let email = index.email;
// 				res.json(
// 					email + ' has been deleted.'
					
// 		    	);
				

// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}
	  	
// 	  });		
    
// });
// // update path details
// app.put('/updateuser', checkToken, (req, res)=>{
//     db5 = req.body;
//     mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  
// 	  //Assumed that the email is unique and cannot be updated.
// 	  if(db5.password == undefined){
// 		//query for the username
// 		  ecxModel
// 			.findOneAndUpdate({
// 				email: db5.email
// 			}, {
// 				username: db5.username,
// 				// password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10)),
// 			}, {new: true})
// 			.then(doc=>{
// 				// let index = doc[0];
// 				console.log(doc);
// 				let username = doc.username;
// 				res.json(
// 					username + ' has been updated Successfully.'
					
// 		    	);
// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
				
// 			})
// 	 }else{
// 	 	//query for the password
// 		  ecxModel
// 			.findOneAndUpdate({
// 				email: db5.email
// 			}, {
// 				// username: db5.username,
// 				password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10))
// 			}, {new: true})
// 			.then(doc=>{
// 				// let index = doc[0];
// 				console.log(doc);
				
// 				res.json(
// 					'Password has been updated Successfully.'
					
// 		    	);
// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
				
// 			})
// 	 }	
	  	
// 	  });	

    
// });

// // all users path details

// app.get('/alluser', checkToken, (req, res)=>{
//     db5 = req.query;
 //    mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
	// let dbase = mongoose.connection;
	// dbase.on('error', console.error.bind(console, 'connection error:'));
	// dbase.once('open', function() {
	//   // we're connected!
	//   let ecxSchema = new mongoose.Schema({
	//   	username: String,
	//   	email: String,
	//   	password: String,
	//   	time: String,
	//   	date: String
	//   });
	  
	//   ecxSchema.statics.getUsers = function (){
	//   	return new Promise((resolve, reject)=>{
	//   		this.find((err, docs)=>{
	//   			if(err){
	//   				console.error(err);
	//   				return reject(err)
	//   			}
	//   			resolve(docs);
	//   		})
	//   	})
	//   }
	//   let ecxModel = mongoose.model('ecx',ecxSchema);
	//   ecxModel.getUsers()
	//   	.then(doc=>{
	// 		// let index = doc[0];
	// 		// console.log(doc);
			
	// 		res.json({
	// 			doc
	// 		})
	// 	})
	// 	.catch(err=>{
	// 		res.json("Login Incorrect");
	// 		// console.log(err);
			
	// 	})
	  
	// });
    
// });

// app.listen(8080, ( ) => {
//     console.log("the server is running on 8080")
// })


// Day 20

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// app.use(express.json());
// app.use(express.urlencoded({exteneded:true}));
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');



// let db = {};
// let db2 = {};
// let db3 = {};
// let db4 = {};
// let db5 = {};
// let db6 = {};
// let date = {};
// app.post('/signup',(req, res)=>{
//     db = req.body;
//     // console.log(db);
//     //database
// 	mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	// _id: mongoose.Schema.ObjectId,
// 	  	// _id: Number,
// 		email: String,
// 		username: String,
// 		names: Array,
// 		occupation: String,
// 		password: String,
// 		lastlogin: Date
// 	  	});
// 	  // },{ _id: false});
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
// 	  let inputData = new ecxModel({
// 	  	names: db.names,
// 	  	occupation: db.occupation,
// 	  	username: db.username,
// 	  	email: db.email,
// 	  	password: bcrypt.hashSync(db.password, bcrypt.genSaltSync(10)),
// 	  	lastlogin: date
	  	
// 	  });
// 	  inputData.save()
// 	  	.then(doc =>{
// 	  		console.log(doc);
// 	  		res.json("Successfully Signed Up");
	  		
// 	  	})
// 	  	.catch(err=>{
// 	  		console.log(err);
// 	  	})
// 	});


    
//     let date = new Date();
//     // let month = date_signup.getMonth()+1;
//     // let date_sign = date_signup.getDate()+"-"+month+'-'+date_signup.getFullYear();
//     // let time = date_signup.toLocaleString('en-US', {hour: 'numeric',hour12: true, minute:'numeric', second:'numeric'}) 
//     // date = date_sign + "-" + time;
// });



// // authetication of the login and getuser  
// let secret='ecxbackend'; 
// //middleware to check if the authetification is correct


// let checkToken = (req, res, next)=>{
// 	try{
// 		let token = req.headers['authorization'];
// 		if (token.startsWith('Bearer')){
// 			token = token.slice(7, token.length);
// 		}
// 		if (token){
// 			jwt.verify(token, secret, (err, decoded)=>{
// 				if(err){
// 					return res.json('Token is not valid');
// 				}else{
// 					req.decoded = decoded;
// 					next();
// 				}
// 			});
// 		}
// 	}catch(error){
// 		return res.json('Auth token is not supplied');
// 	}
// };
// //server that creates the token.


// app.post('/login',(req, res)=>{
// 	db2 = req.body;
// 	mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	// _id: Object.Id,
// 		email: String,
// 		username: String,
// 		names: Array,
// 		occupation: String,
// 		password: String,
// 		lastlogin: Date
// 	  });
// 	  let date = new Date();
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  

// 	  if(db2.email == undefined){
// 	  	  //update the lastlogin
// 		  ecxModel
// 				.findOneAndUpdate({
// 					username: db2.username
// 				}, {
// 					lastlogin: date,
// 					// password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10)),
// 				}, {new: true})
// 				.then(doc=>{
// 					// let index = doc[0];
// 					console.log(doc);
					
// 				})
// 				.catch(err=>{
// 					console.log(err);
					
// 				})	
// 		//query for the username
// 		  ecxModel
// 			.find({
// 				username: db2.username
// 				// email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(index);
				
// 				bcrypt.compare(db2.password,index.password).then((result) => {
				
// 					if( index.email == db2.email && result ){
// 						let token_pass = jwt.sign({email: db2.email},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else if(index.username == db2.username && result){
// 						let token_pass = jwt.sign({password: db2.username},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else{
// 						res.json( "Login Incorrect" );
// 					}
// 		    	});

// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}else{
// 		  //update the lastlogin
// 		  ecxModel
// 				.findOneAndUpdate({
// 					email: db2.email
// 				}, {
// 					lastlogin: date,
// 					// password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10)),
// 				}, {new: true})
// 				.then(doc=>{
// 					// let index = doc[0];
// 					console.log(doc);
					
// 				})
// 				.catch(err=>{
// 					console.log(err);
					
// 				})	
// 			//query for the email
// 		  ecxModel
// 			.find({
// 				// username: db2.username
// 				email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(doc);
				
// 				bcrypt.compare(db2.password,index.password).then((result) => {
				
// 					if( index.email == db2.email && result ){
// 						let token_pass = jwt.sign({email: db2.email},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else if(index.username == db2.username && result){
// 						let token_pass = jwt.sign({password: db2.username},
// 							secret, {expiresIn: '24h'});
// 						res.json({  
// 							message:"Authentication Successful",
// 							token: token_pass});
// 					}else{
// 						res.json( "Login Incorrect" );
// 					}
// 		    	});

// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
// 		}
	  	
// 	  });

	
// });

// app.get('/getuser/:Id', checkToken, (req, res)=>{
//     db3 = req.params.Id;
//     mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	email: String,
// 		username: String,
// 		names: Array,
// 		occupation: String,
// 		password: String,
// 		lastlogin: Date
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  	  
// 		  ecxModel
// 			.find({
// 				_id: db3
// 				// email: db2.email
// 			})
// 			.then(doc=>{
// 				let index = doc[0];
// 				console.log(doc);
// 				let id = index._id;
// 			    let email =	index.email;
// 			    let username = index.username;
// 			    let names =	index.names;
// 			    let occupation = index.occupation;
// 			    let lastlogin =	index.lastlogin
// 				res.json({
// 					id,
// 					email,
// 					username,
// 					names,
// 					occupation,
// 					lastlogin
					
// 		    	});
// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 			})
		
	  	
// 	  });		
    
// });

// //cannot  delete using the _id so i use the username.
// //delete path details
// app.delete('/deleteuser/:Id', checkToken, (req, res)=>{
//     db4 = req.params.Id;
//     mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	email: String,
// 		username: String,
// 		names: Array,
// 		occupation: String,
// 		password: String,
// 		lastlogin: Date
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
// 	  mongoose.set('useFindAndModify', false);
	  
// 		  ecxModel
// 			.findOneAndRemove({
// 				_id: db4
// 				// username: db4
// 				// email: db2.email
// 			})
// 			.then(doc=>{
// 				// let index = doc[0];
// 				console.log(doc);
// 				// let username = index.username;
// 				res.json(
// 					db4 + ' has been deleted.'
					
// 		    	);
// 			})
// 			.catch(err=>{
// 				// res.json("Login Incorrect");
// 				console.log(err)
// 			})
	  	
// 	  });		
    
// });
// // update path details
// app.put('/updateuser', checkToken, (req, res)=>{
//     db5 = req.body;
//     mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	email: String,
// 		username: String,
// 		names: Array,
// 		occupation: String,
// 		password: String,
// 		lastlogin: Date
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  
// 	  //Assumed that the email is unique and cannot be updated.
// 	  if(db5.password == undefined){
// 		//query for the username
// 		  ecxModel
// 			.findOneAndUpdate({
// 				email: db5.email
// 			}, {
// 				username: db5.username,
// 				// password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10)),
// 			}, {new: true})
// 			.then(doc=>{
// 				// let index = doc[0];
// 				console.log(doc);
// 				let username = doc.username;
// 				res.json(
// 					username + ' has been updated Successfully.'
					
// 		    	);
// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
				
// 			})
// 	 }else{
// 	 	//query for the password
// 		  ecxModel
// 			.findOneAndUpdate({
// 				email: db5.email
// 			}, {
// 				// username: db5.username,
// 				password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10))
// 			}, {new: true})
// 			.then(doc=>{
// 				// let index = doc[0];
// 				console.log(doc);
				
// 				res.json(
// 					'Password has been updated Successfully.'
					
// 		    	);
// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
				
// 			})
// 	 }	
	  	
// 	  });	

    
// });

// // all users path details

// app.get('/alluser/:Id', checkToken, (req, res)=>{
//     db6 = req.params.Id;
//     mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
	  
// 	  ecxSchema.statics.getUsers = function (){
// 	  	return new Promise((resolve, reject)=>{
// 	  		this.find((err, docs)=>{
// 	  			if(err){
// 	  				console.error(err);
// 	  				return reject(err)
// 	  			}
// 	  			resolve(docs);
// 	  		})
// 	  	})
// 	  }
// 	  console.log(db6)
// 	  if(mongoose.Types.ObjectId.isValid(db6)){
// 		  let ecxModel = mongoose.model('ecx',ecxSchema);
// 		  ecxModel.getUsers()
// 		  	.then(doc=>{
// 				// let index = doc[0];
// 				// console.log(doc);
				
// 				res.json({
// 					doc
// 				})
// 			})
// 			.catch(err=>{
// 				res.json("Login Incorrect");
// 				// console.log(err);
				
// 			})
// 		}else{
// 			console.log("Invalid Id");
// 		}
	  
// 	});

    
// });

// app.listen(8080, ( ) => {
//     console.log("the server is running on 8080")
// })




//Day 21


const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());
app.use(express.urlencoded({exteneded:true}));
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');


//logging details
//'combined'
logger.token('host', (req, res)=>{
	return req.hostname;
});
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'ecx.log'),{flags: 'a'});
app.use(logger('[:date[web]] :method :host :url :status :res[content-length] - :response-time ms',{ stream: accessLogStream})); 
app.use(logger('dev'));

//routes
let db = {};
let db2 = {};
let db3 = {};
let db4 = {};
let db5 = {};
let db6 = {};
let date = {};
app.post('/signup',(req, res)=>{
    db = req.body;
    // console.log(db);
    //database
	mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
	let dbase = mongoose.connection;
	dbase.on('error', console.error.bind(console, 'connection error:'));
	dbase.once('open', function() {
	  // we're connected!
	  let ecxSchema = new mongoose.Schema({
	  	// _id: mongoose.Schema.ObjectId,
	  	// _id: Number,
		email: String,
		username: String,
		names: Array,
		occupation: String,
		password: String,
		lastlogin: Date
	  	});
	  // },{ _id: false});
	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  let inputData = new ecxModel({
	  	names: db.names,
	  	occupation: db.occupation,
	  	username: db.username,
	  	email: db.email,
	  	password: bcrypt.hashSync(db.password, bcrypt.genSaltSync(10)),
	  	lastlogin: date
	  	
	  });
	  inputData.save()
	  	.then(doc =>{
	  		console.log(doc);
	  		res.json("Successfully Signed Up");
	  		
	  	})
	  	.catch(err=>{
	  		console.log(err);
	  	})
	});


    
    let date = new Date();
    // let month = date_signup.getMonth()+1;
    // let date_sign = date_signup.getDate()+"-"+month+'-'+date_signup.getFullYear();
    // let time = date_signup.toLocaleString('en-US', {hour: 'numeric',hour12: true, minute:'numeric', second:'numeric'}) 
    // date = date_sign + "-" + time;
});



// authetication of the login and getuser  
let secret='ecxbackend'; 
//middleware to check if the authetification is correct


let checkToken = (req, res, next)=>{
	try{
		let token = req.headers['authorization'];
		if (token.startsWith('Bearer')){
			token = token.slice(7, token.length);
		}
		if (token){
			jwt.verify(token, secret, (err, decoded)=>{
				if(err){
					return res.json('Token is not valid');
				}else{
					req.decoded = decoded;
					next();
				}
			});
		}
	}catch(error){
		return res.json('Auth token is not supplied');
	}
};
//server that creates the token.


app.post('/login',(req, res)=>{
	db2 = req.body;
	mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
	let dbase = mongoose.connection;
	dbase.on('error', console.error.bind(console, 'connection error:'));
	dbase.once('open', function() {
	  // we're connected!
	  let ecxSchema = new mongoose.Schema({
	  	// _id: Object.Id,
		email: String,
		username: String,
		names: Array,
		occupation: String,
		password: String,
		lastlogin: Date
	  });
	  let date = new Date();
	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  mongoose.set('useFindAndModify', false);

	  if(db2.email == undefined){
	  	  //update the lastlogin
		  ecxModel
				.findOneAndUpdate({
					username: db2.username
				}, {
					lastlogin: date,
					// password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10)),
				}, {new: true})
				.then(doc=>{
					// let index = doc[0];
					console.log(doc);
					
				})
				.catch(err=>{
					console.log(err);
					
				})	
		//query for the username
		  ecxModel
			.find({
				username: db2.username
				// email: db2.email
			})
			.then(doc=>{
				let index = doc[0];
				console.log(index);
				
				bcrypt.compare(db2.password,index.password).then((result) => {
				
					if( index.email == db2.email && result ){
						let token_pass = jwt.sign({email: db2.email},
							secret, {expiresIn: '24h'});
						res.json({  
							message:"Authentication Successful",
							token: token_pass});
					}else if(index.username == db2.username && result){
						let token_pass = jwt.sign({password: db2.username},
							secret, {expiresIn: '24h'});
						res.json({  
							message:"Authentication Successful",
							token: token_pass});
					}else{
						res.json( "Login Incorrect" );
					}
		    	});

			})
			.catch(err=>{
				res.json("Login Incorrect");
			})
		}else{
		  //update the lastlogin
		  ecxModel
				.findOneAndUpdate({
					email: db2.email
				}, {
					lastlogin: date,
					// password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10)),
				}, {new: true})
				.then(doc=>{
					// let index = doc[0];
					console.log(doc);
					
				})
				.catch(err=>{
					console.log(err);
					
				})	
			//query for the email
		  ecxModel
			.find({
				// username: db2.username
				email: db2.email
			})
			.then(doc=>{
				let index = doc[0];
				console.log(doc);
				
				bcrypt.compare(db2.password,index.password).then((result) => {
				
					if( index.email == db2.email && result ){
						let token_pass = jwt.sign({email: db2.email},
							secret, {expiresIn: '24h'});
						res.json({  
							message:"Authentication Successful",
							token: token_pass});
					}else if(index.username == db2.username && result){
						let token_pass = jwt.sign({password: db2.username},
							secret, {expiresIn: '24h'});
						res.json({  
							message:"Authentication Successful",
							token: token_pass});
					}else{
						res.json( "Login Incorrect" );
					}
		    	});

			})
			.catch(err=>{
				res.json("Login Incorrect");
			})
		}
	  	
	  });

	
});

app.get('/getuser/:Id', checkToken, (req, res)=>{
    db3 = req.params.Id;
    mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
	let dbase = mongoose.connection;
	dbase.on('error', console.error.bind(console, 'connection error:'));
	dbase.once('open', function() {
	  // we're connected!
	  let ecxSchema = new mongoose.Schema({
	  	email: String,
		username: String,
		names: Array,
		occupation: String,
		password: String,
		lastlogin: Date
	  });
	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  	  
		  ecxModel
			.find({
				_id: db3
				// email: db2.email
			})
			.then(doc=>{
				let index = doc[0];
				console.log(doc);
				let id = index._id;
			    let email =	index.email;
			    let username = index.username;
			    let names =	index.names;
			    let occupation = index.occupation;
			    let lastlogin =	index.lastlogin
				res.json({
					id,
					email,
					username,
					names,
					occupation,
					lastlogin
					
		    	});
			})
			.catch(err=>{
				res.json("Login Incorrect");
			})
		
	  	
	  });		
    
});

//cannot  delete using the _id so i use the username.
//delete path details
app.delete('/deleteuser/:Id', checkToken, (req, res)=>{
    db4 = req.params.Id;
    mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
	let dbase = mongoose.connection;
	dbase.on('error', console.error.bind(console, 'connection error:'));
	dbase.once('open', function() {
	  // we're connected!
	  let ecxSchema = new mongoose.Schema({
	  	email: String,
		username: String,
		names: Array,
		occupation: String,
		password: String,
		lastlogin: Date
	  });
	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  mongoose.set('useFindAndModify', false);
	  
		  ecxModel
			.findOneAndRemove({
				_id: db4
				// username: db4
				// email: db2.email
			})
			.then(doc=>{
				// let index = doc[0];
				console.log(doc);
				// let username = index.username;
				res.json(
					db4 + ' has been deleted.'
					
		    	);
			})
			.catch(err=>{
				// res.json("Login Incorrect");
				console.log(err)
			})
	  	
	  });		
    
});
// update path details
app.put('/updateuser', checkToken, (req, res)=>{
    db5 = req.body;
    mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
	let dbase = mongoose.connection;
	dbase.on('error', console.error.bind(console, 'connection error:'));
	dbase.once('open', function() {
	  // we're connected!
	  let ecxSchema = new mongoose.Schema({
	  	email: String,
		username: String,
		names: Array,
		occupation: String,
		password: String,
		lastlogin: Date
	  });
	  let ecxModel = mongoose.model('ecx',ecxSchema);
	  
	  //Assumed that the email is unique and cannot be updated.
	  if(db5.password == undefined){
		//query for the username
		  ecxModel
			.findOneAndUpdate({
				email: db5.email
			}, {
				username: db5.username,
				// password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10)),
			}, {new: true})
			.then(doc=>{
				// let index = doc[0];
				console.log(doc);
				let username = doc.username;
				res.json(
					username + ' has been updated Successfully.'
					
		    	);
			})
			.catch(err=>{
				res.json("Login Incorrect");
				
			})
	 }else{
	 	//query for the password
		  ecxModel
			.findOneAndUpdate({
				email: db5.email
			}, {
				// username: db5.username,
				password: bcrypt.hashSync(db5.password, bcrypt.genSaltSync(10))
			}, {new: true})
			.then(doc=>{
				// let index = doc[0];
				console.log(doc);
				
				res.json(
					'Password has been updated Successfully.'
					
		    	);
			})
			.catch(err=>{
				res.json("Login Incorrect");
				
			})
	 }	
	  	
	  });	

    
});

// all users path details

app.get('/alluser/:Id', checkToken, (req, res)=>{
    db6 = req.params.Id;
    mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
	let dbase = mongoose.connection;
	dbase.on('error', console.error.bind(console, 'connection error:'));
	dbase.once('open', function() {
	  // we're connected!
	  let ecxSchema = new mongoose.Schema({
	  	username: String,
	  	email: String,
	  	password: String,
	  	time: String,
	  	date: String
	  });
	  
	  ecxSchema.statics.getUsers = function (){
	  	return new Promise((resolve, reject)=>{
	  		this.find((err, docs)=>{
	  			if(err){
	  				console.error(err);
	  				return reject(err)
	  			}
	  			resolve(docs);
	  		})
	  	})
	  }
	  
	  if(mongoose.Types.ObjectId.isValid(db6)){
		  let ecxModel = mongoose.model('ecx',ecxSchema);
		  ecxModel.getUsers()
		  	.then(doc=>{
				// let index = doc[0];
				// console.log(doc);
				
				res.json({
					doc
				})
			})
			.catch(err=>{
				res.json("Login Incorrect");
				// console.log(err);
				
			})
		}else{
			console.log("Invalid Id");
		}
	  
	});

    
});

//logs route
app.get('/logs',(req, res)=>{
	fs.readFile('ecx.log', function(err, data) {
    res.send(data); 
  });	
});

//listen 
app.listen(8080, ( ) => {
    console.log("the server is running on 8080")
})





// mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true, useUnifiedTopology: true})
// 	let dbase = mongoose.connection;
// 	dbase.on('error', console.error.bind(console, 'connection error:'));
// 	dbase.once('open', function() {
// 	  // we're connected!
// 	  let ecxSchema = new mongoose.Schema({
// 	  	username: String,
// 	  	email: String,
// 	  	password: String,
// 	  	time: String,
// 	  	date: String
// 	  });
// 	  let ecxModel = mongoose.model('ecx',ecxSchema);
// 	  ecxModel
// 		.find({
// 			// username: db2.username,
// 			email: db2.email
// 		})
// 		.then(doc=>{
// 			console.log(doc);
// 		})
// 		.catch(err=>{
// 			console.log(err);
// 		})
// 	  });














// const MongoClient = require('mongodb').MongoClient;
// let url = "mongodb://localhost:27017/ecx";

// MongoClient.connect(url, {useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//   if (err) throw err;
//   let dbo = db.db("ecx");
//   let myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.createCollection("signup").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });



//mongo server command
// mongod --storageEngine=mmapv1 --journal --dbpath C:\MongoDB\Server\3.2\bin



// heroku link
//https://backendecx.herokuapp.com/





// const db = process.env.MONGODB_URL;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true
//     });
//     console.log("MongoDB is Connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };













