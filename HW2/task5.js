// task5

const arr = [1, 2, -4, 3, -9, -1, 7]

function isPositive(value) {
  if (typeof value !== 'number') throw new Error('parameter type is not a Number')
  return value > 0 ? true : false
}

function getPositiveOnly(valuesArr) {
  return valuesArr.filter((value) => isPositive(value))
}

console.log(getPositiveOnly(arr))
