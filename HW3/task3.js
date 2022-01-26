// task3

function _every(arr, cb) {
  if (!Array.isArray(arr)) throw new Error('first argument must be an array')
  if (typeof cb !== 'function') throw new Error('second argument must be a function')

  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) return false
  }
  return true
}

const arr = [1, 2, 3]
console.log(
  _every(arr, function (item, i, arr) {
    return typeof item === 'number'
  })
)

const arr2 = [1, 2, 'd', 3]
console.log(
  _every(arr2, function (item, i, arr) {
    return typeof item === 'number'
  })
)
