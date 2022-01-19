// task4

function f(dayNumber) {
  if (dayNumber > 7 || dayNumber < 1) throw new Error('parameter should be in the range of 1 to 7')
  if (typeof dayNumber !== 'number') throw new Error('parameter type is not a Number')

  // вообще я бы вынес список дней за пределы ф-ции и сделал бы типо модуль
  // откуда експартировал бы ф-цию
  // но для упращения, просто объявляю их внутри
  // выносить на верх в данном случае не хочу ведь ф-ция становится зависимой
  const daysNameRu = {
    1: 'Воскресенье',
    2: 'Понедельник',
    3: 'Вторник',
    4: 'Среда',
    5: 'Четверг',
    6: 'Пятница',
    7: 'Субота',
  }
  return daysNameRu[dayNumber]
}

console.log(f(1)) // Воскресенье
console.log(f(2)) // Понедельник
console.log(f(8)) // Error: parameter should be in the range of 1 to 7
console.log(f('1')) // Error: parameter type is not a Number
