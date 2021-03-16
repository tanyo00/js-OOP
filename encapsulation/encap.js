/*
Encapsulation - bundling of data with the methods that operate on that data.
Encapsulation is used to hide sensitive data from the user, so they cannot access it.
*/

class Player {
  // Private variables/methods cannot be accessed by an instance of the class (object)
  #points // private variable

  #pointsIncrement = () => {
    this.#points++
  } // private method

  #pointsDecrement = () => {
    this.#points--
  } // private method

  constructor (_name, _age) {
    this.name = _name
    this.age = _age
    this.#points = 0
  }

  win = () => {
    this.#pointsIncrement()
  }

  loose = () => {
    this.#pointsDecrement()
  }

  getPoints = () => {
    return this.#points
  }
}

module.exports = Player
