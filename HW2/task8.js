function f(values) {
  if (!Array.isArray(values)) throw new Error('parameter type should be an array')
  if (values.length === 0) throw new Error("parameter can't be an empty")

  console.log(values.shift(0, 1))
  if (values.length > 0) f(values)
}

f([1, 2, 3])
// 1
// 2
// 3
f(1, 2, 3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty
