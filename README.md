# webpack-add-entry

[![NPM version](https://img.shields.io/npm/v/webpack-add-entry.svg?style=flat-square)](https://npmjs.com/package/webpack-add-entry) [![NPM downloads](https://img.shields.io/npm/dm/webpack-add-entry.svg?style=flat-square)](https://npmjs.com/package/webpack-add-entry) [![Build Status](https://img.shields.io/circleci/project/egoist/webpack-add-entry/master.svg?style=flat-square)](https://circleci.com/gh/egoist/webpack-add-entry)

## Install

```bash
$ npm install --save webpack-add-entry
```

## Usage

```js
const addEntry = require('webpack-add-entry')

const webpackConfig = {entry: './entry.js'}
webpack.entry = addEntry(webpack.entry, './new-entry.js')
//=> entry: ['./entry.js', './new-entry.js']
```

## API

### webpackAddEntry(entry, newEntry, [options])

Returns the new entry without mutating the old one.

#### entry

Type: `string` `array` `object`<br>
Required: `true`

Webpack entry.

#### newEntry

Type: `string`<br>
Required: `true`

New webpack entry to add.

#### options

One of `key` and `to` is required.

##### key

Type: `string`

Add a new chunk entry, eg:

```js
addEntry({client: './client.js'}, './server.js', {key: 'server'})
/*
{
  client: './client.js',
  server: './server.js'
}
*/
```

##### to

Type: `string`

Add to a chunk entry, eg:

```js
addEntry({client: './client.js', './server.js', {to: 'client'}})
/*
{
  client: ['./client.js', './server.js']
}
*/
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
