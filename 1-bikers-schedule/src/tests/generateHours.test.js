import { generateHours } from '../utilities/generateUtilities';

// 24 hours time in seconds
// [480 / 60 = 8|08:00am], [1230 / 60 = 20.5|08:00pm]
const hoursGenerated = generateHours(480, 1230, 30);
const shouldReceive = [
  "08:00AM", "08:30AM", "09:00AM",
  "09:30AM", "10:00AM", "10:30AM",
  "11:00AM", "11:30AM", "12:00PM",
  "12:30PM", "01:00PM", "01:30PM",
  "02:00PM", "02:30PM", "03:00PM",
  "03:30PM", "04:00PM", "04:30PM",
  "05:00PM", "05:30PM", "06:00PM",
  "06:30PM", "07:00PM", "07:30PM",
  "08:00PM"
];

describe('Array contains hours', () => {
  const expected = hoursGenerated;
  it('matches at least the hours expected', () => {
    expect(expected).toEqual(expect.arrayContaining(shouldReceive));
  });
});