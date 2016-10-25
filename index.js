'use strict'

module.exports = function (entry, newEntry, key) {
  if (typeof entry === 'string') {
    return [entry, newEntry]
  } else if (Array.isArray(entry)) {
    return entry.concat(newEntry)
  } else if (typeof entry === 'object') {
    return Object.assign({}, entry, {[key]: newEntry})
  }
  throw new TypeError('unsupported entry type')
}
