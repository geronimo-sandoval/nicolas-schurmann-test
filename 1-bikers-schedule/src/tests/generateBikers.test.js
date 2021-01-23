import { generateBikers } from '../utilities/generateUtilities';

const expectedBikers = 8;
const shouldReceive = [1, 2, 3, 4, 5, 6, 7, 8];

// Generate 8 bikers status buttons
const bikersGenerated = generateBikers(expectedBikers);
describe('Array contains bikers', () => {
  const expected = bikersGenerated;
  it('matches every expected biker or more', () => {
    expect(expected).toEqual(expect.arrayContaining(shouldReceive));
  });
});