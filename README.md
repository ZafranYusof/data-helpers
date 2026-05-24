<div align="center">

# data-helpers

[![CI](https://github.com/RaizenXxx/data-helpers/actions/workflows/ci.yml/badge.svg)](https://github.com/RaizenXxx/data-helpers/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/badge/npm-v2.0.1-blue)](https://www.npmjs.com/package/data-helpers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/badge/bundle-1.8KB-green)](https://bundlephobia.com/package/data-helpers)

Functional data transformation helpers for arrays and objects. Inspired by Lodash, but lighter.

[Installation](#installation) | [API](#api-reference) | [Benchmarks](#benchmarks) | [Contributing](#contributing)

</div>

---

## Features

- **Functional approach** - Pure functions, no mutations
- **Composable** - Chain operations naturally
- **Lightweight** - 1.8KB gzipped, zero dependencies
- **Well-tested** - 98% coverage across Node 18/20/22
- **Drop-in Lodash replacement** - For the functions it covers

## Installation

```bash
npm install data-helpers
```

## Quick Start

```javascript
const { chunk, flatten, unique, pick, omit, merge } = require('data-helpers');

// Array operations
chunk([1, 2, 3, 4, 5, 6], 2);     // [[1,2], [3,4], [5,6]]
flatten([[1, 2], [3, [4, 5]]]);     // [1, 2, 3, [4, 5]]
unique([1, 1, 2, 3, 3, 4]);        // [1, 2, 3, 4]

// Object operations
pick({ id: 1, name: 'John', age: 30 }, ['id', 'name']);
// { id: 1, name: 'John' }

omit({ id: 1, name: 'John', password: 'secret' }, ['password']);
// { id: 1, name: 'John' }

merge({ theme: { color: 'blue' } }, { theme: { size: 'lg' } });
// { theme: { color: 'blue', size: 'lg' } }
```

## API Reference

### Array Functions

#### `chunk(array, size)`

Splits an array into groups of the specified size.

```javascript
chunk(['a', 'b', 'c', 'd'], 2);  // [['a','b'], ['c','d']]
chunk([1, 2, 3, 4, 5], 3);       // [[1,2,3], [4,5]]
```

#### `flatten(array)`

Flattens an array one level deep.

```javascript
flatten([[1, 2], [3, 4]]);        // [1, 2, 3, 4]
flatten([[1, [2]], [3]]);         // [1, [2], 3]
```

#### `unique(array)`

Removes duplicate values using Set.

```javascript
unique([1, 1, 2, 3, 3]);         // [1, 2, 3]
unique(['a', 'b', 'a']);          // ['a', 'b']
```

### Object Functions

#### `pick(object, keys)`

Creates an object with only the specified keys.

```javascript
const user = { id: 1, name: 'John', email: 'john@example.com', password: 'hash' };
pick(user, ['id', 'name', 'email']);
// { id: 1, name: 'John', email: 'john@example.com' }
```

#### `omit(object, keys)`

Creates an object without the specified keys.

```javascript
const config = { host: 'localhost', port: 3000, secret: 'abc123' };
omit(config, ['secret']);
// { host: 'localhost', port: 3000 }
```

#### `merge(...objects)`

Deep merges multiple objects. Later values override earlier ones.

```javascript
const defaults = { theme: { mode: 'light', font: 'sans' } };
const userPrefs = { theme: { mode: 'dark' } };
merge(defaults, userPrefs);
// { theme: { mode: 'dark', font: 'sans' } }
```

## Benchmarks

Compared against Lodash 4.17 (operations/sec, higher is better):

| Function | data-helpers | Lodash | Difference |
|----------|-------------|--------|------------|
| chunk | 12,450,000 | 8,230,000 | +51% |
| flatten | 9,800,000 | 7,100,000 | +38% |
| pick | 15,200,000 | 11,400,000 | +33% |
| merge | 3,100,000 | 2,800,000 | +11% |

*Benchmarked on Node.js 20, Apple M1, 16GB RAM*

## Development

```bash
git clone https://github.com/RaizenXxx/data-helpers.git
cd data-helpers
npm install
npm test
```

## Contributing

PRs welcome! Please ensure:
- All tests pass (`npm test`)
- Coverage stays above 95%
- New functions include JSDoc comments
- Follow existing code style

## License

[MIT](./LICENSE)