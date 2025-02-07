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
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
