module.exports = function reverse (n) {
  let result='';
  n = n.toString(10);

  if (n[0] === '-') {
    for (let i = n.length - 1; i >= 1; i --) {
     result += n[i];
    } 
  } else 
    for (let i = n.length - 1; i >= 0; i --) {
     result += n[i];
    } 
  return result;
}
