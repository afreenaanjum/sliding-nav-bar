//(method) Array<any>.map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[]

//basic usage 1
//basic usage 2
//arguments should be passed
//this should be supported
//this should be tranformed to object
//empty indexes should be ignored
//mapped item count should be fixed at the beginning
//mapped items might be altered on the fly
//should throw if first argument is not function

function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

Array.prototype.myMap = function (cb, thisArg) {
  const length = this.length;
  const resArr = new Array(length);

  if (!isFunction(cb)) return TypeError();
  for (let i = 0; i < length; ++i) {
    if (i in this)
      //empty indexes should be ignored
      resArr[i] = cb.call(thisArg || this, this[i], i, this);
  }
  return resArr;
};

console.log([1, 2, 3, 4, null, , undefined].myMap((i) => i * 2)); //[[2, 4, 6, 8, 0, empty, NaN]
console.log([1, 2, 3, 4, null, , undefined].map((i) => i * 2)); // [[2, 4, 6, 8, 0, empty, NaN]
