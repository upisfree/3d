import MAP_CODE from '../core/const/mapCode';
import ENITY_NAME from '../core/const/enityName';
import Vector2 from '../core/math/vector2';
import Color from '../core/math/color';
import { Physics } from '../core/physics';
import { Raycasting } from '../core/raycasting';
import gl from '../core/gl';
import Player from './player';
import Scene from './scene';
import Wall from './wall';

export class MinimapClass {
  private minimapPosition: Vector2 = new Vector2(10, 10);

  public render(): void {
    this.drawMap();
  }

  private drawMap(): void {
    for (let i = 0; i < Scene.children.length; i++) {
      let c = Scene.children[i];

      switch (c.constructor.name) {
        case ENITY_NAME.WALL:
          this.drawEnity(c, Wall);

          break;

        case ENITY_NAME.PLAYER:
          this.drawEnity(c, Player);
          this.drawRaycasting(c);

          break;
      }
    }
  }

  private drawEnity(enity: any, enityClass: any): void {
    gl.drawRect(
      this.getEnityPosition(enity.position, enity.size, enityClass.minimap.size),
      enityClass.minimap.size,
      enity.rotation,
      enityClass.minimap.color);
  }

  private drawRaycasting(player: Player): void {
    let rays = Raycasting.rays;

    for (let i = 0; i < rays.length; i++) {
      let p1 = this.getEnityPosition(rays[i].a, player.size, Player.minimap.size);
      let p2 = this.getEnityPosition(rays[i].b, player.size, Player.minimap.size);

      gl.drawLine(p1, p2, new Color(255, 255, 0));
    }
  }

  private getEnityPosition(position: Vector2, size: Vector2, minimapSize: Vector2): Vector2 {
    return new Vector2(this.minimapPosition.x + position.x * minimapSize.x / size.x,
                       this.minimapPosition.y + position.y * minimapSize.y / size.y);
  }

  private getEnityAnchorPoint(position: Vector2, size: Vector2, minimapSize: Vector2): Vector2 {
    return new Vector2(this.minimapPosition.x + (position.x + size.width / 2) * minimapSize.x / size.x,
                       this.minimapPosition.y + (position.y + size.height / 2) * minimapSize.y / size.y);
  }
}

export default new MinimapClass();