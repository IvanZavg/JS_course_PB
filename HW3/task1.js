// task1
function _forEach(arr, cb) {
  if (!Array.isArray(arr)) throw new Error('first argument must be an array')
  if (typeof cb !== 'function') throw new Error('second argument must be a function')

  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr)
  }
}

const arr = [1, 2, 3]
_forEach(arr, function (item, i, arr) {
  console.log(item, i, arr)
})
