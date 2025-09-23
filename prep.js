function minMax(x, y) {
  let min, max;

  if (x < y) {
    min = x;
    max = y;
  } else {
    min = y;
    max = x;
  }

  return [min, max];
}