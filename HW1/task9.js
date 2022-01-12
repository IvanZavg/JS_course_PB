// task9

let arr = [1, 2, 3, 4, 5, 6]

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

console.log(sortArray(arr, 'desc'))

//Дефолтная сортировка работает куда лучше
console.time('testSort')
sortArray(arr, 'desc')
console.timeEnd('testSort')

console.time('testDefSort')
arr.sort((a, b) => a - b)
console.timeEnd('testDefSort')
