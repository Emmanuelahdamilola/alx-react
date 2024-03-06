import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy function', () => {
  it('should return "Holberton School" when the argument is true', () => {
    const result = getFooterCopy(true);
    expect(result).toBe('Holberton School');
  });

  it('should return "Holberton School main dashboard" when the argument is false', () => {
    const result = getFooterCopy(false);
    expect(result).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification function', () => {
  it('should return the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    const result = getLatestNotification();
    expect(result).toBe(expectedString);
  });
});
