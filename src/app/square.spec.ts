import { Square } from './square';

describe('Square', () => {
  it('should create an instance', () => {
    expect(new Square('', '', 1, 1, 'top', 1)).toBeTruthy();
  });
});
