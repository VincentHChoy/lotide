// Super class
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Student extends Person {
  bio() {
    return super.bio()
  }

}

// DRIVER CODE

const bob = new Student('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());