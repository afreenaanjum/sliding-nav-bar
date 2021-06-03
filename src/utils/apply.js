// Code taken from @monad. Thanks.
Function.prototype.mycall = function (thisArg, ...args) {
  if (thisArg == null) {
    thisArg = window;
  }
  // Handle primitive values. Convert them to objects so that we can add the hidden property
  thisArg = Object(thisArg);
  // Add hidden property to the this argument
  const func = Symbol();
  // Property value should be the function that has to be called
  thisArg[func] = this;
  // Invoke the function as a method now to get the correct 'this' behavior
  const res = thisArg[func](...args);
  // Delete the hidden symbolic property so that original thisArg is not affected
  delete thisArg[func];
  return res;
};
