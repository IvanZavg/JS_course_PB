// task1

function f(value) {
  if (typeof value !== 'number') throw new Error('parameter type is not a Number')
  return value ** 3
}

console.log(f(2)) // 8
f('Content') // Error: parameter type is not a Number
