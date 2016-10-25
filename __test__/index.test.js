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
  const entry = addEntry({foo: 'foo.js'}, 'bar.js', {key: 'bar'})
  expect(entry).toEqual({foo: 'foo.js', bar: 'bar.js'})
})

test('add to chunk entry', () => {
  const entry = addEntry({foo: 'foo.js'}, 'bar.js', {to: 'foo'})
  expect(entry).toEqual({foo: ['foo.js', 'bar.js']})
})

test('unsupported', () => {
  expect(() => {
    addEntry(() => {}, 'ad')
  }).toThrowError('unsupported entry type')
})

test('should not mutate object', () => {
  const config = {entry: {client: './client.js'}}
  addEntry(config.entry, './server.js', {key: 'server'})
  expect(config.entry).toEqual({client: './client.js'})
})

test('should not mutate object in chunk entry', () => {
  const config = {entry: {client: './client.js'}}
  addEntry(config.entry, './server.js', {to: 'client'})
  expect(config).toEqual({entry: {client: './client.js'}})
})
