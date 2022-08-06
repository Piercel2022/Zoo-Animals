const getInfos = [
  {
    id: 0,
    name: 'lion',
  },
  {
    id: 1,
    name: 'cat',
  },
];
describe('Test counter cards', () => {
  test('check number of cards', () => {
    expect(getInfos.length).toBe(2);
  });
});