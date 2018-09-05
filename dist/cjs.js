'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var deprecate = require('depd')('arr-ext');

function ObjectValueCompare(source, target) {
  return Object.keys(source).every(function (key) {
    return target.hasOwnProperty(key) && source[key] === target[key];
  });
}

var array_extend = {
  insert: function insert() {
    deprecate('`insert` will be deprecate');
    return this.insertBefore.apply(this, arguments);
  },
  insertBefore: function insertBefore(insert_point, item) {
    var right = this.splice(insert_point, this.length);

    if (Array.isArray(item)) {
      this.push.apply(this, _toConsumableArray(item));
    } else {
      this.push(item);
    }

    this.push.apply(this, _toConsumableArray(right));
    return this;
  },
  isLast: function isLast(item) {
    var last_item = this.lastItem();
    return last_item && last_item === item;
  },
  isLastBy: function isLastBy(prop, val) {
    return this.isLastByMatch(_defineProperty({}, prop, val));
  },
  isLastByIndex: function isLastByIndex(index) {
    return index === this.length - 1;
  },
  isLastByMatch: function isLastByMatch(match_obj) {
    return this.isLastByIndex(this.indexByMatch(match_obj));
  },
  isFirst: function isFirst(item) {
    return item === this[0];
  },
  isFirstBy: function isFirstBy(prop, val) {
    return this.isFirstByMatch(_defineProperty({}, prop, val));
  },
  isFirstByIndex: function isFirstByIndex(index) {
    return this.length && !index;
  },
  isFirstByMatch: function isFirstByMatch(match_obj) {
    return this.isFirstByIndex(this.indexByMatch(match_obj));
  },
  lastItem: function lastItem() {
    return this[this.length - 1];
  },
  removeBy: function removeBy(prop, val) {
    var offset = this.indexBy(prop, val);

    if (offset !== -1) {
      return this.removeByIndex(offset);
    }
  },
  removeByMatch: function removeByMatch(match_obj) {
    return this.removeByIndex(this.indexByMatch(match_obj));
  },
  removeByIndex: function removeByIndex(index) {
    if (index >= 0) {
      return this.splice(index, 1)[0];
    } else {
      return undefined;
    }
  },
  assignByMatch: function assignByMatch(match_obj) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return this.assignByIndex.apply(this, [this.indexByMatch(match_obj)].concat(args));
  },
  assignByIndex: function assignByIndex(index) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return Object.assign.apply(Object, [this[index]].concat(args));
  },
  findBy: function findBy(prop, val) {
    return this.findByMatch(_defineProperty({}, prop, val));
  },
  findByMatch: function findByMatch(match_obj) {
    return this[this.indexByMatch(match_obj)];
  },
  indexBy: function indexBy(prop, val) {
    return this.indexByMatch(_defineProperty({}, prop, val));
  },
  indexByMatch: function indexByMatch(match_obj) {
    for (var c = 0; c < this.length; c++) {
      if (ObjectValueCompare(match_obj, this[c])) {
        return c;
      }
    }

    return -1;
  },
  reset: function reset() {
    this.splice(0, this.length);
    return this;
  },
  reload: function reload(reload_array) {
    this.reset();

    if (Array.isArray(reload_array) && reload_array.length) {
      this.push.apply(this, reload_array);
    }

    return this;
  }
};
Object.keys(array_extend).forEach(function (key) {
  var method = array_extend[key];

  if (Array.prototype[key]) {
    throw new Error("\u6570\u7EC4\u539F\u578B\u94FE\u4E2D\u5DF2\u5B58\u5728 ".concat(key));
  } else if (typeof method === 'function') {
    Object.defineProperty(Array.prototype, key, {
      value: method
    });
  }
});
//# sourceMappingURL=cjs.js.map
