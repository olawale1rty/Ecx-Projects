const bcrypt = require("bcrypt")



exports.username = "Mustapha";
exports.password = bcrypt.hashSync("qwerty", bcrypt.genSaltSync(10))