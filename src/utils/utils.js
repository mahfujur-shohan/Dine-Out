export function nextId(array) {
  if (array.length === 0) {
    return 1;
  }
  return Math.max(...array.map((item) => item.id)) + 1;
}
