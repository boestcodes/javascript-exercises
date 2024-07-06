const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const sumed = array.reduce((a,b) => a+b ,0);
  return sumed;
};

const multiply = function(array) {
  const sumed = array.reduce((a,b) => a*b ,1);
  return sumed;
};

const power = function(a, b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
  let sum = 1
  for(i=1; i<=a; i++){
    sum *= i;
  }
	return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
