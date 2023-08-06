module.exports = function reverse (n) {
  let araay = ("" + Math.abs(n)).split("").map(Number)
  return araay.reverse(Number).join('')
}
