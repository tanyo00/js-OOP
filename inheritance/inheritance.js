// superclass (parent class)
class Employee {
  constructor (_name, _age) {
    this.name = _name
    this.age = _age
  }
  shortInfo () {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
  }
}

// subclass (child class) - inherits from the parent class
// subclasses can access all the methods and variables from the superclass(parent class)
class Manager extends Employee {
  constructor (name, age, salary) {
    super(name, age)
    this.salary = salary
  }
}

module.exports = {
  Employee,
  Manager
}
