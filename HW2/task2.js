// task2

function f(...values) {
  const allParamsIsNumber = values.every((value) => typeof value === 'number')
  if (!allParamsIsNumber) throw new Error('all parameters type should be a Number')

  return values.reduce((total, value) => (total += value), 0)
}

console.log(f(1, 2, 3)) // 6
console.log(f(1, 1, 1, 1, 1, 1, 1, 1)) // 8
console.log(f(1, 2, 's', 4)) // Error: all parameters type should be a Number
