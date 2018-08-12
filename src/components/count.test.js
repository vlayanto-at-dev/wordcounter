import countWords from './countWords';

it('counts the correct number of words', () => {
  expect(countWords('one tow three')).toBe(3);
})