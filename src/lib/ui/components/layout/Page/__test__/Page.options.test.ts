import { getMaxWidth } from '../Page.options';

describe('Page Options', () => {
  it('should return a max width when type is MEDIUM', () => {
    expect(getMaxWidth('MEDIUM')).toBeTruthy();
  });

  it('should return a max width when type is TIGHT', () => {
    expect(getMaxWidth('TIGHT')).toBeTruthy();
  });

  it('should return the default max width when type is unsupported', () => {
    expect(getMaxWidth('SOMETHING' as any)).toBeTruthy();
  });
});
