export const filterOutOthers = (data = []) => {
  if (data.length === 0) return data;
  return data.filter((district) => !district.id.startsWith("Other"));
};
