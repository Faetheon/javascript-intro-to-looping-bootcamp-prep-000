function forLoop(array) {
  let arr = [];
  for(let i = 0; i < 26; i++) {
    arr.unshift(array);
  }
  return arr;
}