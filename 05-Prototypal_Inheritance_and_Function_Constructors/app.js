function Person(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

var john = new Person('john', 'Doe');
var jane = new Person('jane', 'dark');

Person.prototype.greet = function(){
  console.log("Hello, " + this.firstname + " " + this.lastname);
}

john.greet();
jane.greet();

// console.log(john.firstname);
// console.log(john.lastname);