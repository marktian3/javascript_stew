const add = function(x, y) {
  return x + y;
}

const subtract = function(x, y) {
  return x -y;
}


// Can't use module.exports = add because that sets default export to add
// Instead we export an object. Now in our test file we can call calculator.add
module.exports = {
  add,
  subtract,
};