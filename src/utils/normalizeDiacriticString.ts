/**
 * Normalizes a string by removing diacritic marks.
 *
 * @param str - The string to normalize.
 * @returns The normalized string.
 */
export const normalizeDiacriticString = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
