import test from 'ava'
import './_test_envirment'

test(`isLast'`, t => {
  const arr = [2, 3, 1, 7, 9]
  t.true(arr.isLast(9))
})

test(`isLastBy`, t => {
  const [a, b, c] = [{ id: 9 }, { id: 10 }, { id: 11 }]
  const arr = [a, b, c]

  t.false(arr.isLastBy('id', 0))
  t.false(arr.isLastBy('id', 9))
  t.false(arr.isLastBy('id', 10))
  t.true(arr.isLastBy('id', 11))
})

test(`isLastByMatch`, t => {
  const [a, b, c] = [{ id: 9 }, { id: 10 }, { id: 11 }]
  const arr = [a, b, c]

  t.false(arr.isLastByMatch({ id: 0 }))
  t.false(arr.isLastByMatch({ id: 9 }))
  t.false(arr.isLastByMatch({ id: 10 }))
  t.true(arr.isLastByMatch({ id: 11 }))
})
