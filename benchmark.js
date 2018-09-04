require('./')

const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

const getArr = () => [
  { id: 1, name: 'test_1' },
  { id: 2, name: 'test_2' },
  { id: 3, name: 'test_3' },
  { id: 4, name: 'test_4' },
  { id: 5, name: 'test_5' },
  { id: 6, name: 'test_6' },
  { id: 7, name: 'test_7' },
  { id: 8, name: 'test_8' },
  { id: 9, name: 'test_9' },
  { id: 10, name: 'test_10' },
]

// add tests
suite.add('insert', function() {
  getArr().insert(5, { id: 11, name: 'test_11' })
})
.add('lastItem', function () {
  getArr().lastItem()
})
.add('removeByIndex', function () {
  getArr().removeByIndex(5)
})
.add('removeBy', function () {
  getArr().removeBy('id', 5)
})
.add('assignByIndex', function () {
  getArr().assignByMatch(5, { id: 5 })
})
.add('assignByMatch', function () {
  getArr().assignByMatch({ id: 5 }, { name: 'test_5_modified' })
})
.add('findBy', function () {
  getArr().findBy('id', 5)
})
.add('findByMatch', function () {
  getArr().findBy({ id: 5 })
})
.add('indexBy', function () {
  getArr().findBy('id', 5)
})
.add('indexByMatch', function () {
  getArr().indexByMatch({ id: 5 })
})
.add('reset', function () {
  getArr().reset()
})
.add('reload', function () {
  [].reload(getArr())
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target))
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'))
})
// run async
.run({ 'async': true })
