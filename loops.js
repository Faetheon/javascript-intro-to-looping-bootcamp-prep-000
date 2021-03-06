function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops`);
    }
  }
  return array;
}

function whileLoop (n) {
  while(n > 0) {
    console.log(n);
    n--;
    if(n === 0) {
      return "done";
    }
  }
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  while(array.length > 0) {
    if(array.length > 0 && maybeTrue()) {
      array.pop();
    }
  }
  return array;
}