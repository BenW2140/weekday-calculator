import { checkDate } from './../src/weekday-calculator.js';
import { returnDayOfWeek } from './../src/weekday-calculator.js';
import { getNumberOfDays } from './../src/weekday-calculator.js';

describe('Weekday Calculator', () => {

  test('should be able to enter valid date', () => {
    expect(checkDate(2000, 1, 10)).toEqual(true);
  });

  test('should not be able to enter 31 for months with 30 days', () => {
    expect(checkDate(2000, 3, 31)).toEqual(false);
  });

  test('should not be able to enter greater than 28 for febuary', () => {
    expect(checkDate(2000, 1, 30)).toEqual(false);
  });

  test('should not be able to enter greater than 29 for febuary on leap years', () => {
    expect(checkDate(2000, 1, 31)).toEqual(false);
  });

  test('should not be ableto enter greater than 30 for September, April, June, and November', () => {
    expect(checkDate(2000, 3, 31)).toEqual(false);
  });

  test('should not be able to enter a negative value for year', () => {
    expect(checkDate(-2000, 3, 6)).toEqual(false);
  });

  test('should return number of days from entered date to Jan 1 1970, if day is the same and there are no leap years between', () => {
    expect(getNumberOfDays(1971, 0, 1)).toEqual(365);
  });

  test('should return number of days from entered date to Jan 1 1970, if day is not the same', () => {
    expect(getNumberOfDays(1971, 0, 2)).toEqual(366);
  });

  test('should return number of days between entered date and Jan 1 1970, if year is less than 1970', () => {
    expect(getNumberOfDays(1969, 0, 1)).toEqual(365);
  });

  test('should return the day of the week for the given date if year is after 1970', () => {
    expect(returnDayOfWeek(getNumberOfDays(2000, 0, 1), 2000)).toEqual('Saturday');
  });

  test('should return the day of the week for the given date if year is after 1970 #2', () => {
    expect(returnDayOfWeek(getNumberOfDays(2020, 4, 15), 2020)).toEqual('Friday');
  });

  test('should return the day of the week for the given date if year is before 1970', () => {
    expect(returnDayOfWeek(getNumberOfDays(1776, 7, 2), 1776)).toEqual('Friday');
  });

  test('should return the day of the week for the given date if year is before 1970 #2', () => {
    expect(returnDayOfWeek(getNumberOfDays(1516, 3, 13), 1516)).toEqual('Thursday');
  });

  test('should return the day of the week for the given date if year is before 1970 #3', () => {
    expect(returnDayOfWeek(getNumberOfDays(1492, 7, 3), 1492)).toEqual('Wednesday');
  });
  
});
