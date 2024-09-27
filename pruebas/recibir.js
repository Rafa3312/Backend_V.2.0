var a = require("./variables")
var obj= require("./variables2")
var {b,c} = require("./variables2")
var b = require("./variables2").b

console.log(a, obj.b);
console.log(c);
console.log(b);