// task6
function isEven(value) {
  if (typeof value !== 'number') throw new Error('parameter type is not a Number')

  return value === 0 ? false : value % 2 === 0
}

console.log(isEven(3)) // false
console.log(isEven(4)) // true
console.log(isEven('Content')) // Error: parameter type is not a Number
