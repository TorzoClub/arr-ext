import test from 'ava'
import './_test_envirment'

test(`removeBy`, t => {
  const will_be_remove = { id: 3 }
  let arr = [{ id: 2 }, will_be_remove, { id: 1 }]

  t.is(
    will_be_remove,
    arr.removeBy('id', 3)
  )

  t.deepEqual(
    [{ id: 2 }, {id: 1 }],
    arr
  )
})

test(`removeByIndex`, t => {
  const will_be_remove = { id: 3 }
  let arr = [{ id: 2 }, will_be_remove, { id: 1 }]

  t.is(
    will_be_remove,
    arr.removeByIndex(1)
  )

  t.deepEqual(
    [{ id: 2 }, {id: 1 }],
    arr
  )
})

test(`removeByMatch`, t => {
  const will_be_remove = { id: 3 }
  let arr = [{ id: 2 }, will_be_remove, { id: 1 }]

  t.is(
    will_be_remove,
    arr.removeByMatch({ 'id': 3 })
  )

  t.deepEqual(
    [{ id: 2 }, {id: 1 }],
    arr
  )
})
