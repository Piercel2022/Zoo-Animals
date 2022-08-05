/**
 * @jest-environment jsdom
 */
import showsNumber from '../showsLength.js';

describe('show number of List ', () => {
  const list = [{ name: 'Lion' }, { name: 'Cat' }, { name: 'Aardvark' }, { name: 'Dyeing Poison Dart Frog' }, { name: 'Brazilian Porcupine' }];
  const result = showsNumber(list);
  expect(result).toBe(5);
});
test('result should be equal to 0', () => {
  const list = [];
  const result = showsNumber(list);

  expect(result).toBe(0);
});
