// task9

function arrayFill(fillValue, fillLength) {
  const allowedTypes = ['object', 'string', 'number']

  if (!allowedTypes.includes(typeof fillValue)) throw new Error('passed error type of fill value')
  if (typeof fillLength !== 'number') throw new Error('second argument must be a number')

  const arr = []

  for (let i = 0; i < fillLength; i++) {
    arr.push(fillValue)
  }

  return arr
}

console.log(arrayFill('x', 5))
