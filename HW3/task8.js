// task8

function f(arr) {
  if (!Array.isArray(arr)) throw new Error('first argument must be an array')
  let acc = 0

  for (let item of arr) {
    if (typeof item !== 'number' && !Array.isArray(item)) {
      throw new Error('array items must be number or array')
    }

    acc += typeof item === 'number' ? item : f(item)
  }
  return acc
}

const arr = [
  [
    [1, 2],
    [1, 2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
]
console.log(f(arr)) // 12
const arr2 = [[[[[1, 2]]]]]
console.log(f(arr2)) // 3
const arr3 = [[[[[1, 2]]], 2], 1]
console.log(f(arr3)) // 6
const arr4 = [[[[[]]]]]
console.log(f(arr4)) // 0
const arr5 = [[[[[], 3]]]]
console.log(f(arr5)) // 3
