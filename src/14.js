const isogram = text => Math.max(...text.split('').map((item, i, arr) => arr.filter(res => res === item).length)) === 1;

module.exports = isogram;
