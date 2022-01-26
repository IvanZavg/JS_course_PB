// task5

function _reduce(arr, cb, acc) {
  if (!Array.isArray(arr)) throw new Error('first argument must be an array')
  if (typeof cb !== 'function') throw new Error('second argument must be a function')
  if (typeof acc !== 'number' && typeof acc !== 'string')
    throw new Error('third argument must be number or string')

  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr)
  }
  return acc
}

const arr = [1, 2, 3]
const acc = 0
console.log(
  _reduce(
    arr,
    function (acc, item, i, arr) {
      return (acc += item)
    },
    acc
  )
)
