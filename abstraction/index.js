const { Person, Job } = require('./abs')

const person1 = new Person({
  firstName: 'Tanyo',
  lastName: 'Nikolov',
  age: 21,
  job: new Job('Software Developer', 'VMware', 120000, 500)
})

person1.learnSkill('ES7')
person1.learnSkill('React')
person1.learnSkill('Node.js')

console.log(person1)
