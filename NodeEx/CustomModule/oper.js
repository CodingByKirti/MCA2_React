const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

/** works for single export */
// only last thing will be exported
// module.exports = add;
// module.exports = sub;
// module.exports = mul;
// module.exports = div;

/** multi exports ... individually */
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.d = div;

/** multi exports  */
module.exports = { add, sub, div, mul };
