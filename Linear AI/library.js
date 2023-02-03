// class of a point hav x and y coordnition
class Point {
  x; // horizontal possition of point inside 2d world
  y; // vertical possition of point inside 2d world

  constructor(x = 0, y = 0) {
    this.x = x; // asign user entered value to x
    this.y = y; // asign user entered value to y
  }
}

// Random point
function randomBetween(start = 0, end = 1) {
  /*
    The output starts with a number entered by the user and we add a random number
    of the length between the output and input numbers
  */
  return start + Math.random() * (end - start);
}

// return a random number between user entered input
function randomPoint(x, y) {
  const randomX = randomBetween(x.start || 0, x.end || 1);
  const randomY = randomBetween(y.end || 0, y.start || 1);
  return new Point(randomX, randomY);
}

// is a binary Activation Function
function step(sum) {
  /*
    this function check if number less than or equal 0 return 0 else retrurn 1
  */
  return sum <= 0 ? 0 : 1;
}

// fill an element with some text
function render(element, contnet) {
  element.innerHTML = contnet;
}

