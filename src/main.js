function ObjectValueCompare(source, target) {
  return Object.keys(source).every(key => {
    return target.hasOwnProperty(key) && source[key] === target[key]
  })
}

const array_extend = {
  insert(insert_point, item) {
    const right = this.splice(insert_point, this.length)
    if (Array.isArray(item)) {
      this.push(...item)
    } else {
      this.push(item)
    }
    this.push(...right)

    return this
  },

  isLast(item) {
    const last_item = this.lastItem()

    return last_item && (last_item === item)
  },

  isLastBy(prop, val) {
    return this.isLastByMatch({ [prop]: val })
  },

  isLastByIndex(index) {
    return index === (this.length - 1)
  },

  isLastByMatch(match_obj) {
    return this.isLastByIndex(
      this.indexByMatch(match_obj)
    )
  },

  isFirst(item) {
    return item === this[0]
  },

  isFirstBy(prop, val) {
    return this.isFirstByMatch({ [prop]: val })
  },

  isFirstByIndex(index) {
    return this.length && !index
  },

  isFirstByMatch(match_obj) {
    return this.isFirstByIndex(
      this.indexByMatch(match_obj)
    )
  },

  lastItem() {
    return this[this.length - 1]
  },

  removeBy(prop, val) {
    let offset = this.indexBy(prop, val)
    if (offset !== -1) {
      return this.removeByIndex(offset)
    }
  },

  removeByIndex(index) {
    return this.splice(index, 1)[0]
  },

  assignByMatch(match_obj, ...args) {
    return this.assignByIndex(
      this.indexByMatch(match_obj),
      ...args
    )
  },

  assignByIndex(index, ...args) {
    return Object.assign(this[index], ...args)
  },

  findBy(prop, val) {
    return this.findByMatch({ [prop]: val })
  },

  findByMatch(match_obj) {
    return this[this.indexByMatch(match_obj)]
  },

  indexBy(prop, val) {
    return this.indexByMatch({ [prop]: val })
  },

  indexByMatch(match_obj) {
    for (let c = 0; c < this.length; c++) {
      if (ObjectValueCompare(match_obj, this[c])) {
        return c
      }
    }
    return -1
  },

  reset() {
    this.splice(0, this.length)
    return this
  },

  reload(reload_array) {
    this.reset()

    if (Array.isArray(reload_array) && reload_array.length) {
      this.push.apply(this, reload_array)
    }

    return this
  },
}

Object.keys(array_extend).forEach(key => {
  const method = array_extend[key]

  if (Array.prototype[key]) {
    throw new Error(`数组原型链中已存在 ${key}`)
  } else if (typeof(method) === 'function') {
    Object.defineProperty(Array.prototype, key, { value: method })
  }
})
