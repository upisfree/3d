import ENITY_NAME from './const/enityName';
import Vector2 from './math/vector2';
import gl from './gl';
import Scene from '../game/scene';
import Player from '../game/player';
import Wall from '../game/wall';
import Color from './math/color';

import { Raycasting } from './raycasting';


class Camera {
  public position: Vector2;
  public rotation: number; // в радианах
  public fov: number = Math.PI / 4; // в радианах

  constructor() {
  }

  public render(): void {
    this.drawGround();
    this.drawRays();
  }

  private drawRays(): void {
    let rayWidth = Math.ceil(window.innerWidth / Raycasting.rays.length);
    let rayHeight = window.innerHeight;

    for (let i = 0; i < Raycasting.rays.length; i++) {
      let z = Raycasting.rays[i].distance / Raycasting.distance;
      let r = Raycasting.rays[i].rotation;
      let h = rayHeight * (1 - z);

      // console.log(z);

      gl.drawRect(
        new Vector2(rayWidth * i, rayHeight / 2 - h / 2),
        new Vector2(rayWidth, h),
        0,
        new Color(z, z, z)
      );
    }    
  }

  private drawGround(): void {
    let w = window.innerWidth;
    let h = window.innerHeight;

    gl.drawGradient(
      new Vector2(0, 0),
      new Vector2(w, h),
      0,
      new Color(1, 1, 1),
      new Color(0, 0, 0)
    );
  }
}

export default Camera;