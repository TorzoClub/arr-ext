import test from 'ava'
import './_test_envirment'

test(`isFirst'`, t => {
  const arr = [2, 3, 1, 7, 9]
  t.true(arr.isFirst(2))
})

test(`isFirstBy`, t => {
  const [a, b, c] = [{ id: 9 }, { id: 10 }, { id: 11 }]
  const arr = [a, b, c]

  t.true(arr.isFirstBy('id', 9))
  t.false(arr.isFirstBy('id', 10))
  t.false(arr.isFirstBy('id', 11))
  t.false(arr.isFirstBy('id', 0))
})

test('isFirstByMatch', t => {
  const [a, b, c] = [{ id: 9 }, { id: 10 }, { id: 11 }]
  const arr = [a, b, c]

  t.true(arr.isFirstByMatch({ id: 9 }))
  t.false(arr.isFirstByMatch({ id: 10 }))
  t.false(arr.isFirstByMatch({ id: 11 }))
  t.false(arr.isFirstByMatch({ id: 0 }))
})
