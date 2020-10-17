module.exports = function reverse (n) {
    if (n >= 0) {
        let result = n.toString().split('');
  return result.reverse().join('');
    } else {
        let result = (-n).toString().split('');
  return result.reverse().join('');
    }
  
}
