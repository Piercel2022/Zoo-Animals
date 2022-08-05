import { displayComments } from '../displayComments.js';
 import { getInfos } from '../index.js';

  describe ('Test counter cards', () => {
       test('check number of cards', () => {
       const arr = getInfos();
       expect(arr).toBe(10);
       })
  })