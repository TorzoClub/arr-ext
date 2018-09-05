import test from 'ava'
import './_test_envirment'

test('assignByIndex', t => {
  const assign = { id: 8 }
  const arr = [{ id: 2 }, assign, { id: 10 }]

  const result = arr.assignByIndex(1, { b: 9 }, { c: 10 }, { b: 999 }, { cd: 'a' })
  t.is(result, assign)
  t.deepEqual(
    result,
    Object.assign({
      c: 10,
      b: 999,
      cd: 'a'
    }, assign)
  )
})

test('assignByMatch', t => {
  const assign = { id: 8, tt: 'hehe' }
  const arr = [{ id: 2 }, assign, { id: 10 }]

  const result = arr.assignByMatch(
    { id: 8, tt: 'hehe' },
    { b: 9 }, { c: 10 }, { b: 999 }, { cd: 'a' }
  )
  t.is(result, assign)
  t.deepEqual(
    result,
    Object.assign({
      c: 10,
      b: 999,
      cd: 'a'
    }, assign)
  )
})
