module.exports = function compose (...operations) {
  return function (parameter) {
    const result = operations.reduceRight((value, operation) => {
      return operation(value)
    }, parameter)
    return result
  }
}
