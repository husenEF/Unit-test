const mode = number => number
  .filter((item, i, arr) => arr.indexOf(item) === i)
  .map(item => ({
    count: number.filter(res => res === item).length,
    number: number.filter(res => res === item)[0],
  }))
  .filter(
    (item, i, arr) => item.count === Math.max(...arr.map(maxCount => maxCount.count)),
  );

const sort = number => number.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

const stats = number => ({
  mean: number.reduce((a, b) => a + b) / number.length,
  median: number.length % 2 === 0
    ? number[sort(number).length / 2]
    : number[Math.floor(sort(number).length / 2)],
  range: Math.max(...number) - Math.min(...number),
  mode: `${mode(number)
    .map(item => item.number)
    .join(', ')}, each appeared ${
    mode(number).map(item => item.count)[0]
  } times`,
  largest: Math.max(...number),
  smallest: Math.min(...number),
  sum: number.reduce((prev, curr) => prev + curr),
  count: number.length,
});


module.exports = stats;
