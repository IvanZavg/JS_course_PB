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

function checkOnArrayOfNumbers(arr) {
  if (!Array.isArray(arr)) return 'not array!'
  if (arr.some((item) => typeof item !== 'number')) return 'array contains not number types!'
  return null
}

// Вариант 2
function solution2(a, b) {
  const errorA = checkOnArrayOfNumbers(a)
  if (errorA) throw new Error(`First argument has error: ${errorA}`)

  const errorB = checkOnArrayOfNumbers(a)
  if (errorB) throw new Error(`First argument has error: ${errorB}`)

  if (!a.length && !b.length) return []

  const sumArrString = (BigInt(a.join('')) + BigInt(b.join(''))).toString().split('')

  return sumArrString.map((item) => Number(item))
}

console.log(solution2([2, 4, 3], [5, 6, 4])) // [8, 0, 7]
console.log(solution2([1, 4, 5], [4, 4, 2])) // [5, 8, 7]
console.log(solution2([1, 1, 1], [])) // [1, 1, 1]
console.log(solution2([], [9, 9, 9])) // [9, 9, 9]
console.log(solution2([9, 9, 9], [9, 9, 9])) // [1, 9, 9, 8]
console.log(solution2([], [])) // []
console.log(solution2([], [0])) // [0]
console.log(solution2([0], [0])) // [0]
console.log(solution2([1, 1, 1, 1, 1, 1, 1, 1], [1, 0])) // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(
  solution2([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [1])
)
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
