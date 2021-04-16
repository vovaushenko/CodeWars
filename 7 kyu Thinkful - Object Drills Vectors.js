class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(b) {
    return new Vector(this.x + b.x, this.y + b.y);
  }
}
