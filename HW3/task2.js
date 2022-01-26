// task2

function _filter(arr, cb) {
  if (!Array.isArray(arr)) throw new Error('first argument must be an array')
  if (typeof cb !== 'function') throw new Error('second argument must be a function')
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) newArr.push(arr[i])
  }
  return newArr
}

const arr = [1, 2, 3]
console.log(
  _filter(arr, function (item, i, arr) {
    return item > 1
  })
)
