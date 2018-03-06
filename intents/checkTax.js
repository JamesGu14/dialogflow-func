'use strict'

module.exports = (req) => {

  let salary = req.salary
  let city = req.city
  return `The animal you checked was: ${city}${salary}`
}