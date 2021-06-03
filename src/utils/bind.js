Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    return obj.apply(args[0], [...params, ...args2]);
  };
};

let p1 = {
  name: "Afreena",
  printName: function () {
    console.log(this.name, arguments);
  },
};

let p2 = {
  name: "Anjum",
};

let printName2 = p1.printName.myBind(p2, "first args", "first args");
console.log(printName2("second args", "second args"));
