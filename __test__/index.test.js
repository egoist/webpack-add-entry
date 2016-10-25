const addEntry = require('../')

test('string', () => {
  const entry = addEntry('./src/index.js', 'lol.js')
  expect(entry).toEqual(['./src/index.js', 'lol.js'])
})

test('array', () => {
  const entry = addEntry(['./src.js'], 'lol.js')
  expect(entry).toEqual(['./src.js', 'lol.js'])
})

test('object', () => {
  const entry = addEntry({foo: 'foo.js'}, 'bar.js', 'bar')
  expect(entry).toEqual({foo: 'foo.js', bar: 'bar.js'})
})

test('unsupported', () => {
  expect(() => {
    addEntry(() => {}, 'ad')
  }).toThrowError('unsupported entry type')
})
