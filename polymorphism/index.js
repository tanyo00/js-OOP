const { Animal, Dog, Cat } = require('./poly')

// instaces of classes
const animal1 = new Animal('Steven', 3)
const dog1 = new Dog('Tanyo', 2, 'BAY BAY!')
const cat1 = new Cat('Evey', 1, 'MQY MQY!')

// same action, different output
animal1.makeSound()
dog1.makeSound()
cat1.makeSound()
