// task3

function checkArgumentsLength(arguments, minLength, message) {
  if (Object.keys(arguments).length !== minLength) throw new Error(message)
}

function checkArgumentsIsNumber(arguments) {
  const allParamsIsNumber = Object.keys(arguments).every(
    (idx) => typeof arguments[idx] === 'number'
  )
  if (!allParamsIsNumber) throw new Error('all parameters type should be a Number')
}

function f(value, subtrahend, multiplier) {
  checkArgumentsLength(arguments, 3, 'in f missing required parameters')
  checkArgumentsIsNumber(arguments)
  return (value - subtrahend) / multiplier
}

console.log(f(9, 3, 2)) // 3
console.log(f('s', 9, 3)) // Error: all parameters type should be a Number
