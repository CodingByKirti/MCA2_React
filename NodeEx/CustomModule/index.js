const oper = require("./oper");
const greetings = require("./greetings");

console.log(oper.add(12, 2)); // 14
console.log(oper.sub(12, 2)); // 14
console.log(oper.div(12, 2)); // 14
console.log(oper.mul(12, 2)); // 14
// console.log(sub(12, 2));        // 10       // mul(12,2)

console.log(greetings.sayBye("everyone"));
console.log(greetings.wishes("everyone"));
