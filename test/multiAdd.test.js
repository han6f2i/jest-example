import { multiAdd } from '../src/multiAdd';

describe('multiAdd(<Number[]>)', () => {
  it('should return a summation of all array elements', () => {
    expect(multiAdd([1,2,3,4])).toBe(10);
  })
});