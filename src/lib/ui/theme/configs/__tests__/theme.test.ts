import Theme from '../theme';

describe('Global application theme', () => {
  it('should return a theme', () => {
    expect(Theme).not.toBeNull();
    expect(Theme).toBeDefined();
  });
});
