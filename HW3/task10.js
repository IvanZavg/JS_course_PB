// task10

function reverse(arr) {
  if (!Array.isArray(arr)) throw new Error('first argument must be an array')
  if (!arr.length) throw new Error("array can't be empty")

  const newArr = []

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }

  return newArr
}

const arr = [3, 2, 1]
console.log(reverse(arr)) // [1,2,3]
