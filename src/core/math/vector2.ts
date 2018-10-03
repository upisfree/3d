class Vector2 {
  public x: number;
  public y: number;

  public get width(): number { return this.x; }
  public set width(v) { this.x = v; }
  public get height(): number { return this.y; }
  public set height(v) { this.y = v; }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public add(v: Vector2): Vector2 {
    this.x += v.x;
    this.y += v.y;

    return this;
  }

  public sub(v: Vector2): Vector2 {
    this.x -= v.x;
    this.y -= v.y;

    return this;
  }

  public mult(v: Vector2): Vector2 {
    this.x *= v.x;
    this.y *= v.y;

    return this;
  }

  public div(v: Vector2): Vector2 {
    this.x /= v.x;
    this.y /= v.y;

    return this;
  }

  public neg(): Vector2 {
    this.x *= -1;
    this.y *= -1;

    return this;
  }
}

export default Vector2;