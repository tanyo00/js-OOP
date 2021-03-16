/*
Polymorphism(many forms) - provides a way to peform a single action in different forms.
We can use the same method on different objects.
*/

class Animal {
  constructor (_name, _age) {
    this.name = _name
    this.age = _age
  }
  makeSound = () => {
    console.log('The animal makes a sound!')
  }
}

class Dog extends Animal {
  constructor (name, age, sound) {
    super(name, age)
    this.sound = sound
  }
  makeSound = () => {
    console.log(`The dog says: ${this.sound}`)
  }
}

class Cat extends Animal {
  constructor (name, age, sound) {
    super(name, age)
    this.sound = sound
  }
  makeSound = () => {
    console.log(`The cat says: ${this.sound}`)
  }
}

module.exports = {
  Animal,
  Dog,
  Cat
}
