
// database for the quiz5.
const bcrypt = require("bcrypt")

exports.studentA = {
    username : "Mustapha",
    password : bcrypt.hashSync("qwerty", bcrypt.genSaltSync(10)),
    age : "20",
    matric : 12345678901,
    dept : "surveying",
    dob : "12-June-2004"
} 


exports.studentB = {
    username : "Olawale",
    password : bcrypt.hashSync("qwert", bcrypt.genSaltSync(10)),
    age : "19",
    matric : 134567897,
    dept : "electrical",
    dob : "12-June-2006"
} 

exports.studentC = {
    username : "David",
    password : bcrypt.hashSync("qwer", bcrypt.genSaltSync(10)),
    age : "18",
    matric : 146736736,
    dept : "electronics",
    dob : "12-June-2005"
} 

exports.studentD = {
    username : "Setemipe",
    password : bcrypt.hashSync("qwe", bcrypt.genSaltSync(10)),
    age : "17",
    matric : 7378759790,
    dept : "civil",
    dob : "12-June-2008"
} 

exports.studentE = {
    username : "Ayo",
    password : bcrypt.hashSync("qw", bcrypt.genSaltSync(10)),
    age : "16",
    matric : 1256781,
    dept : "biomedical",
    dob : "12-June-2009"
} 
