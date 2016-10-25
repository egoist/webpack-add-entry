'use strict'

function addEntry(entry, newEntry, options) {
  options = options || {}
  if (typeof entry === 'string') {
    return [entry, newEntry]
  } else if (Array.isArray(entry)) {
    return entry.concat(newEntry)
  } else if (typeof entry === 'object') {
    entry = Object.assign({}, entry)
    if (options.to) {
      let toEntry = entry[options.to]
      toEntry = addEntry(toEntry, newEntry, {key: options.key})
      return Object.assign(entry, {[options.to]: toEntry})
    }
    return Object.assign(entry, {[options.key]: newEntry})
  }
  throw new TypeError('unsupported entry type')
}

module.exports = addEntry
