import { add } from '../src/add';

describe('add(a,b)', () => {
  it('should return the addtion of its two inputs', () => {
    expect(add(1,2)).toBe(3);
  });
});