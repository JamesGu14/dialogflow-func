'use strict'

module.exports = (req) => {

  let salary = req.amount
  let currency = req.currency
  return `The animal you checked was: ${currency}${salary}`
}