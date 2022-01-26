// task6

function _reduceRight(arr, cb, acc) {
  if (!Array.isArray(arr)) throw new Error('first argument must be an array')
  if (typeof cb !== 'function') throw new Error('second argument must be a function')
  if (typeof acc !== 'number' && typeof acc !== 'string')
    throw new Error('third argument must be number or string')

  for (let i = arr.length - 1; i >= 0; i--) {
    acc = cb(acc, arr[i], i, arr)
  }
  return acc
}

const arr = ['1', '2', '3']
const acc = ''
console.log(
  _reduceRight(
    arr,
    function (acc, item, i, arr) {
      return (acc += item)
    },
    acc
  )
)
