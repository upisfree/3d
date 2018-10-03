import DIRECTION from '../core/const/direction';
import Vector2 from '../core/math/vector2';
import Angle from '../core/math/angle';
import Color from '../core/math/color';
import Camera from '../core/camera';
import Scene from './scene';
import { Physics } from '../core/physics';

export default class Player implements Physics.Body {
  public static instance: Player;

  public position: Vector2;
  public rotation: number = 0;
  public size: Vector2 = new Vector2(50, 50);
  public moveSpeed: number = 10;
  public rotateSpeed: number = Math.PI / 4;

  public camera: Camera = new Camera();

  public static minimap = {
    size: new Vector2(10, 10),
    color: new Color(1, 0.5, 1)
  }

  constructor(p: Vector2) { // p — место на карте
    this.position = p.mult(this.size);

    this.camera.position = this.position;
    this.camera.rotation = this.rotation;
  }

  public move(d: DIRECTION): void {
    let v;
    let p;

    switch (d) {
      case DIRECTION.UP:
        v = new Vector2(
          this.position.x + this.moveSpeed * Math.sin(this.rotation),
          this.position.y - this.moveSpeed * Math.cos(this.rotation)
        );
        p = this.getInstanceModifiedCopy(v);

        if (!Physics.checkPlayerAndWallsCollision(p)) {
          this.position = v;
        }

        break;

      case DIRECTION.LEFT:
        // v = new Vector2(this.position.x - this.moveSpeed, this.position.y);
        // p = this.getInstanceModifiedCopy(v);

        // if (!Physics.checkPlayerAndWallsCollision(p)) {
        //   this.position.x -= this.moveSpeed;
        // }

        this.rotation -= this.rotateSpeed;

        break;

      case DIRECTION.DOWN:
        v = new Vector2(
          this.position.x - this.moveSpeed * Math.sin(this.rotation),
          this.position.y + this.moveSpeed * Math.cos(this.rotation)
        );
        p = this.getInstanceModifiedCopy(v);

        if (!Physics.checkPlayerAndWallsCollision(p)) {
          this.position = v;
        }

        break;

      case DIRECTION.RIGHT:
        // v = new Vector2(this.position.x + this.moveSpeed, this.position.y);
        // p = this.getInstanceModifiedCopy(v);

        // if (!Physics.checkPlayerAndWallsCollision(p)) {
        //   this.position.x += this.moveSpeed;
        // }

        this.rotation += this.rotateSpeed;

        break;
    }

    this.camera.position = this.position;
    this.camera.rotation = this.rotation;
  }

  // TODO: Object.clone()?
  private getInstanceModifiedCopy(p: Vector2 = this.position, s: Vector2 = this.size) {
    return {
      position: p,
      size: s,
      moveSpeed: this.moveSpeed
    }
  }
}