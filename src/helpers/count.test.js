import countWords from './countWords';

describe('The counting words function', () => {
  it('counts the correct number of words', () => {
    expect(countWords('one tow three')).toBe(3);
  });

  it('counts an empty string', () => {
    expect(countWords('')).toBe(0);
  });
});
