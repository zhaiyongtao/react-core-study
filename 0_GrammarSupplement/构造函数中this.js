class Point {
  constructor() {
    console.log(this); // Point {}
    console.log(typeof this); // object
  }
}

const test = new Point();
