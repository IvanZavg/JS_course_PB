// task7
function getDivisors(value) {
  if (typeof value !== 'number') throw new Error('parameter type is not a Number')
  if (value === 0) throw new Error("parameter can't be a 0")

  const devisors = []
  let i = 1

  while (i <= value) {
    value % i === 0 ? devisors.push(i++) : i++
  }

  return devisors
}

console.log(getDivisors(12)) // [1, 2, 3, 4, 6, 12]
console.log(getDivisors('Content')) // Error: parameter type is not a Number
console.log(getDivisors(0)) // Error: parameter can't be a 0
