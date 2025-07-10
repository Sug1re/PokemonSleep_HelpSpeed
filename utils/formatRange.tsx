export const getFormattedRange = (
  rangeParam: string | string[] | undefined
): string => {
  if (typeof rangeParam !== "string") return "";
  const decoded = decodeURIComponent(rangeParam);
  return decoded.includes("-") ? "No." + decoded.replace("-", "〜") : decoded;
};
