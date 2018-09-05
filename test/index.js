import test from 'ava'
import './_test_envirment'

test(`insertBefore to head`, t => {
  let arr = [2, 3, 1]

  t.deepEqual(
    ['a', 2, 3, 1],
    arr.insertBefore(0, 'a')
  )
})

test(`insertBefore to last`, t => {
  let arr = [2, 3, 1]

  t.deepEqual(
    [2, 3, 'a', 1],
    arr.insertBefore(arr.length - 1, 'a')
  )
})

test(`insertBefore to middle`, t => {
  let arr = [2, 3, 4, 9]
  t.deepEqual(
    [2, 3, 'a', 4, 9],
    arr.insertBefore(2, 'a')
  )
})

test('reset', t => {
  const arr = [2, 3, 1, 5, 10]

  arr.reset()

  t.notThrows(() => {
    const err = Error('hehe')
    arr.forEach(() => {
      throw err
    })
    for (let item of arr) {
      throw err
    }
    for (let item in arr) {
      throw err
    }
  })

  t.is(arr.length, 0)
})

test('reload', t => {
  const arr = [2, 3, 1, 5, 10]

  t.deepEqual(
    [ '1', 'b', '9' ],
    arr.reload([ '1', 'b', '9' ])
  )
})
