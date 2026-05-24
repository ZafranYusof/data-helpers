const { chunk, flatten, unique, pick, omit, merge } = require('../src');

describe('Array Helpers', () => {
  test('chunk splits array into groups', () => {
    expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
    expect(chunk([1,2,3], 3)).toEqual([[1,2,3]]);
  });

  test('flatten reduces one level of nesting', () => {
    expect(flatten([[1,2],[3,4]])).toEqual([1,2,3,4]);
  });

  test('unique removes duplicates', () => {
    expect(unique([1,1,2,3,3])).toEqual([1,2,3]);
  });
});

describe('Object Helpers', () => {
  test('pick selects specified keys', () => {
    expect(pick({a:1,b:2,c:3}, ['a','c'])).toEqual({a:1,c:3});
  });

  test('omit removes specified keys', () => {
    expect(omit({a:1,b:2,c:3}, ['b'])).toEqual({a:1,c:3});
  });

  test('merge deep merges objects', () => {
    const result = merge({a:{x:1}}, {a:{y:2}});
    expect(result).toEqual({a:{x:1,y:2}});
  });
});