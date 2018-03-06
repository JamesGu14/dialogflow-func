'use strict'

module.exports = (req) => {

  let animal = req.animal
  return `The animal you checked was: ${animal}`
}