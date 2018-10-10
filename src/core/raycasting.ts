import Vector2 from './math/vector2';
import { Physics } from './physics';
import Player from '../game/player';

export namespace Raycasting {
  export interface Ray {
    a: Vector2;
    b: Vector2;
    distance: number;
    rotation: number;
  }

  export let rays: Ray[] = [];
  export let distance: number = 200; // TODO: move to camera?
  export let raysCount: number = 100;
  export let rayStep: number = 2;

  // TODO: не только Player, а любое тело
  export function calculate(player: Player): Ray[] {
    let rayParts = Math.round(distance / rayStep);
    let rays = [];

    for (let i = 0; i < raysCount; i++) {
      let r = player.camera.rotation - (player.camera.fov / 2 - player.camera.fov * i / raysCount);

      let a: Vector2 = new Vector2(
        player.camera.position.x + player.size.width / 2 * Math.sin(r),
        player.camera.position.y + player.size.height / 2 * Math.cos(r)
      );
      let b: Vector2;

      for (let j = 0; j < rayParts; j++) {
        b = new Vector2(
          a.x + rayStep * j * Math.sin(r), // +
          a.y - rayStep * j * Math.cos(r)  // -
        );

        let body = {
          position: b,
          size: new Vector2(1, 1)
        }

        if (Physics.checkWallCollision(body)) {
          break;
        }
      }

      rays.push({
        a: a,
        b: b,
        distance: Vector2.distance(a, b),
        rotation: r
      });
    }

    return rays;
  }

  export function tick(player: Player): void {
    rays = calculate(player);
  }
}