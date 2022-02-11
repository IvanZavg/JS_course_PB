// #### Задача 2

// Напишите свою имплементацию функции `mix`. Данная функция принимает неограниченное количество аргументов. Каждый аргумент по своему типу должен быть функцией иначе генерировать ошибку. Функция `mix` запускает свои callback функции последовательно. В качестве параметра каждый callback принимает то что возвращает предыдущий callback. Первый сallback не принимает параметров.

function mix(...functions) {
  let state = null
  functions.forEach((f) => (state = f(state)))
  return state
}

const res = mix(
  () => {
    return 0
  },
  (prev) => {
    return prev + 1
  },
  (prev) => {
    return prev * 2
  }
) // 2

console.log(res)
