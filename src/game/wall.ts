import Vector2 from '../core/math/vector2';
import Color from '../core/math/color';
import Scene from './scene';
import { Physics } from '../core/physics';

export default class Wall implements Physics.Body {
  public position: Vector2;
  public rotation: number = 0;
  public size: Vector2 = new Vector2(100, 100);

  public static minimap = {
    size: new Vector2(20, 20),
    color: new Color(0, 0, 0)
  }

  constructor(p: Vector2) {
    this.position = p.mult(this.size);
  }
}