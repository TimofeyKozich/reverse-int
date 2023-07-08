module.exports = function reverse (n) {
  const number = n < 0 ? n * -1 : n;
  return +number.toString().split('').reverse().join('')
}
