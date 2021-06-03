//Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
//Currying doesn’t call a function. It just transforms it.

let multiply = function (x, y) {
  return x * y;
};

//*******Currying using bind method.*********//
///The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.̉

let multiplyBy2 = multiply.bind(this, 2);
console.log(multiplyBy2(8));
let multiplyBy3 = multiply.bind(this, 3);
console.log(multiplyBy3(7));

//*******Currying using closures*********//
let mutiplyUsingClosure = function (x) {
  return function (y) {
    return x * y;
  };
};

let mutiplyUsingClosureBy2 = mutiplyUsingClosure(2);
console.log(mutiplyUsingClosureBy2(8));

let mutiplyUsingClosureBy3 = mutiplyUsingClosure(3);
console.log(mutiplyUsingClosureBy2(7));

///NOTE:
let x = function (a, b, c, d) {};
console.log(x.length); //4 i.e number or arguments

// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

//ADVANCED CURRY FUNCTION
function curry(func) {
  console.log(this); // WINDOW or this
  return function curried(...args) {
    console.log(this); // WINDOW or this
    console.log("args", args); //curriedSum(1) => returns 1
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        //CONCAT UNTIL WE GET ARGS EQUAL OR GREATER THAN FUNCTION LENGTH
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return curried.bind(this, ...args);
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));

//BFE

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'

console.log(curriedJoin(1)(2, 3)); // '1_2_3'

console.log(curriedJoin(1, 2)(3)); // '1_2_3'

//23 create a sum()

function sum(n, currentSum = 0) {
  //   let currentSum = 0; //This will every time make it to zero
  let newSum = n + currentSum;
  const ans = function (args) {
    console.log("args", args);
    return sum(args, newSum);
  };

  //   ans.valueOf = () => newSum;
  ans.toString = () => newSum;
  return ans;
}

const sum1 = sum(1);
sum1(2) == 3; // true
sum1(3) == 4; // true
sum(1)(2)(3) == 6; // true
sum(5)(-1)(2) == 6; // true

const sum1 = sum(1);
sum1(2) == 3; // true
sum1(3) == 4; // true
sum(1)(2)(3) == 6; // true
sum(5)(-1)(2) == 6; // true

function mutiply3ByN(n, currentVal = 3) {
  //   let currentSum = 0; //This will every time make it to zero
  let newMulVal = n * currentVal;
  const ans = function (args) {
    return sum(args, newMulVal);
  };

  ans.toString = () => newMulVal;

  return ans;
}

mutiply3ByN(1);
mutiply3ByN(2);
mutiply3ByN(3);
mutiply3ByN(4);
mutiply3ByN(5);
let x = mutiply3ByN(6);
console.log(x);
