arr-ext
---

## 用法

### [].reset

重置数组

```javascript
arr = [4, 3, 2, 1]

reseted_arr = arr.reset()

reseted_arr === arr // true
arr.length // 0

```

### [].reload

复制其他数组到此数组上。复制前将会清空数组。（内部执行了 `[].reset()`）

```javascript
obj = { a: 9 }
data = [33, 77, obj, 'd']
arr = [2, 1, 5, 7, 9]

reloaded = arr.reload(data)  // [33, 77, { a: 9 }, 'd']

reloaded === data // false

reloaded[2] // { a: 9 }
reloaded[2] === obj // true
```
