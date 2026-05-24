# data-helpers

> Functional data transformation helpers for arrays and objects.

## Installation

```bash
npm install data-helpers
```

## Usage

```javascript
const { chunk, pick } = require('data-helpers');

chunk([1, 2, 3, 4, 5], 2);  // [[1,2], [3,4], [5]]
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);  // { a: 1, c: 3 }
```

## API

### Arrays
- `chunk(array, size)` - Split array into chunks of given size
- `flatten(array)` - Flatten nested arrays one level deep
- `unique(array)` - Remove duplicate values

### Objects
- `pick(obj, keys)` - Pick specified keys from object
- `omit(obj, keys)` - Omit specified keys from object
- `merge(...objects)` - Deep merge multiple objects

## License

MIT