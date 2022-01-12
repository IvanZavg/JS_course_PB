// task10
// тут мог бы быть импорт функции из задания 9)))

let arr = [6, 5, 4, 3, 2, 1]

function sortArray(arr, direction = 'asc') {
  const sortedArr = new Array(arr.length)

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    let index = 0

    for (let j = 0; j < arr.length; j++) {
      if (direction === 'asc' && value > arr[j]) {
        index++
      } else if (direction === 'desc' && value < arr[j]) {
        index++
      }
    }
    while (sortedArr[index]) index++
    sortedArr[index] = value
  }
  return sortedArr
}

console.log(sortArray(arr))
