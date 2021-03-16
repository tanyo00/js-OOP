class Person {
  constructor ({ firstName, lastName, age, job }) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.job = job
    this.skills = []
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }

  learnSkill = skill => {
    this.skills.push(skill)
  }
}

class Job {
  constructor (position, company, salary, monthlyBonus) {
    this.position = position
    this.company = company
    this.salary = salary
    this.monthlyBonus = monthlyBonus
  }
}

module.exports = {
  Person,
  Job
}
