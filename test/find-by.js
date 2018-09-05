import test from 'ava'
import './_test_envirment'

test('findBy', t => {
  const arr = [{ id: 2 }, { id: 7 }, { id: 9 }, { id: 11 }]

  const result = arr.findBy('id', 2)
  t.is(result, arr[0])
})

test('findByMatch', t => {
  const arr = [
    { id: 2, bid: 9 }, { id: 7, bid: 9 },
    { id: 2, bid: 7 }, { id: 11, bid: 9 }
  ]

  t.is(arr.lastItem(), arr.findByMatch({ id: 11, bid: 9 }))
})
