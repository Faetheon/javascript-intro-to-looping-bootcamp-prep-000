function forLoop(array) {
  let arr = [];
  for(let i = 0; i < 25; i++) {
    arr.unshift(array);
  }
  return arr;
}