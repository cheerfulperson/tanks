/**
 * Formats a number with a minimum of 2 decimal places.
 *
 * @param value - The number to format.
 * @returns The formatted number as a string.
 */
export const formatNumber = (value: number): string => {
  return value.toLocaleString().replace(/,/g, " ");
};
