/**
 * Determines whether a given year is a leap year in the Gregorian calendar.
 *
 * A leap year occurs if:
 * - The year is divisible by 4.
 * - However, if the year is also divisible by 100, it must also be divisible by 400 to be a leap year.
 *
 * @param {number} year - The year to check.
 * @returns {boolean} - Returns true if it's a leap year, otherwise false.
 */
export function isLeap(year: number): boolean {
  // If the year is divisible by 400, it's a leap year
  if (year % 400 === 0) {
    return true;
  }
  // If the year is divisible by 100 but NOT by 400, it's NOT a leap year
  if (year % 100 === 0) {
    return false;
  }
  // If the year is divisible by 4, it's a leap year
  if (year % 4 === 0) {
    return true;
  }
  // Otherwise, it's NOT a leap year
  return false;
}
