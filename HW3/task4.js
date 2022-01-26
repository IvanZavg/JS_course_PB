// task4

function _some(arr, cb) {
  if (!Array.isArray(arr)) throw new Error('first argument must be an array')
  if (typeof cb !== 'function') throw new Error('second argument must be a function')

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) return true
  }
  return false
}

const arr = [1, 2, 3]
console.log(
  _some(arr, function (item, i, arr) {
    return typeof item === 'string'
  })
)

const arr2 = [1, 2, 'd', 3]
console.log(
  _some(arr2, function (item, i, arr) {
    return typeof item === 'string'
  })
)
