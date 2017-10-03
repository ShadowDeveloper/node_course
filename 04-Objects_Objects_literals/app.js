var person = {
  firstname: 'Rodrigo',
  lastname: 'Souza',
  greet: function(){
    console.log("Hello, " + this.firstname + ' ' + this.lastname);
  }
}

person.greet();

console.log(person['firstname']);