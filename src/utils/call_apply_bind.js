let name = {
  firstName: "Afreena",
  lastName: "Anjum",
  printFullName: function (hometown, state) {
    console.log(
      this.firstName + " " + this.lastName + " from " + hometown + " " + state
    );
  },
};

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

//Function borrowing
name2.printFullName = name.printFullName.bind(name2, "Mysuru"); // Same as call but only difference is it creates a copy of the same function and doesnt execute

//call executes the function by setting this with the context passed.
console.log(name2.printFullName()); //Sachin Tendulkar from Mysuru
console.log(name.printFullName.call(name2, "Mysuru", "Karnataka")); //Sachin Tendulkar from Mysuru
