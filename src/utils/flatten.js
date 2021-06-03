function flat(arr, depth = 1) {
  // your imeplementation here

  let resultArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i]) && depth > 0) {
      let newArr = flat(arr[i], depth - 1);
      resultArr.push(...newArr);
    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr));
// [1, 2, 3, [4]]

console.log(flat(arr, 1));
// [1, 2, 3, [4]]

console.log(flat(arr, 2));
// [1, 2, 3, 4]
