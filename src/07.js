const repeat = (text, number = 0) => {
  if (number) {
    return text
      .split(' ')
      .map(item => item.split('').map(res => res.repeat(number)).join(''))
      .join(' ');
  }
  return text;
};

module.exports = repeat;
