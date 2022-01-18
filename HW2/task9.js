//task 9
//Понимаю что тут можно было сделать проверку входжных параметров
// и тип значений массива — но лень
function solution(a, b) {
  const reverseA = a.reverse()
  const reverseB = b.reverse()
  const iterLength = a.length >= b.length ? a.length : b.length
  const newArr = new Array(iterLength).fill(0)

  for (let i = 0; i < iterLength; i++) {
    const numberA = reverseA[i] ?? 0
    const numberB = reverseB[i] ?? 0

    newArr[i] += numberA + numberB

    if (newArr[i] >= 10) {
      const splitSum = newArr[i].toString().split('')
      const x = Number(splitSum[0])
      const y = Number(splitSum[1])
      newArr[i] = y
      i + 1 === iterLength ? newArr.push(x) : (newArr[i + 1] += x)
    }
  }

  return newArr.reverse()
}

console.log(solution([2, 4, 3], [5, 6, 4])) // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])) // [5, 8, 7]
console.log(solution([1, 1, 1], [])) // [1, 1, 1]
console.log(solution([], [9, 9, 9])) // [9, 9, 9]
console.log(solution([9, 9, 9], [9, 9, 9])) // [1, 9, 9, 8]
console.log(solution([], [])) // []
console.log(solution([], [0])) // [0]
console.log(solution([0], [0])) // [0]
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1], [1, 0])) // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(
  solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [1])
)
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
