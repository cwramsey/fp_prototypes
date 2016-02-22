# Functional-Style Array Prototypes

Let's face it. Chaining array functions is fun. But sometimes the built ins just aren't enough or don't make it precisely clear what you're trying to accomplish.

This library attempts to extend that functionality by adding functional-style, chainable prototypes to `Array`.

**All methods treat the data as immutable and return new values.**

# Installation

Currently only available for Node 4+, or for use with the `--harmony` flag as they've been written in ES6 (mostly).

`$ npm i --save fp_prototypes`

# Usage

Simple `require` the module and you're done. The prototypes are automatically added.

Example script.

```js
require('fp_prototypes');

[1,2,3,4].reject(x => x === 3).tail().head();
```

# Available Methods

**reject**

The opposite of `filter`. Truthy values will be removed. If no callback is supplied, the truthiness of each value will be used instead.

```js
[1,2,3,4].reject(x => x === 3); // [1,2,4];
```

**head**

Returns the first element of the array.

```js
[1,2,3,4].head() // 1
```

**tail**

Returns all except the first element of the array.

```js
[1,2,3,4].tail() // [2,3,4]
```

**init**

Returns all but the last element of the array.

```js
[1,2,3,4].init() // [1,2,3]
```

**last**

Returns the last element of the array.

```js
[1,2,3,4].last() // 4
```

**adjust**

Applies a callback to an array at a given index.

```js
[1,2,3,4].adjust(1, x => x+1) // [1,2,4,4]
```

**take**

Returns the first `x` number of items from an array

```js
[1,2,3,4].take(2) // [1,2]
```
