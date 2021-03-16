const { Employee, Manager } = require('./inheritance')

const emp1 = new Employee('Ivan', 21)
const man1 = new Manager('Tanyo', 21, 7000)

emp1.shortInfo()
man1.shortInfo()
