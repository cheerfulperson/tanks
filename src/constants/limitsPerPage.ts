export const LimitsPerPage = [5, 10, 20, 50, 100];

export const LimitsPerPageOptions = LimitsPerPage.map((limit) => ({
  label: `${limit} / page`,
  value: limit.toString(),
}));
