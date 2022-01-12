// task8

const arr = [1, 2, 3, 4]
let sum = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && arr[i] > 3) sum += arr[i]
}

console.log(sum)
