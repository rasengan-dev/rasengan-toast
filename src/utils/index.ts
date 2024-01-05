// Generate random number between min and max
export const generateId = (
  min: number = 100000,
  max: number = 999999
) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
