// task12

const arr = [1, 2, 3, -5, -2, 1, -4]
let sum = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) sum += arr[i]
}

console.log(sum)
