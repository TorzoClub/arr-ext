import test from 'ava'
import './_test_envirment'

test('indexBy', t => {
  const arr = [{ id: 2 }, { id: 7 }, { id: 9 }, { id: 11 }]

  t.is(0, arr.indexBy('id', 2))

  t.is(-1, arr.indexBy('id', 222222))
})

test('indexByMatch', t => {
  const arr = [
    { id: 2, bid: 9 }, { id: 7, bid: 9 },
    { id: 2, bid: 7 }, { id: 11, bid: 9 }
  ]

  t.is(-1, arr.indexByMatch({ id: 888 }))
  t.is(-1, arr.indexByMatch({ bid: 89 }))

  t.is(arr.length - 1, arr.indexByMatch({ id: 11, bid: 9 }))
})
