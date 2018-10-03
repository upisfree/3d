import MAP_CODE from '../core/const/mapCode';
import ENITY_NAME from '../core/const/enityName';
import Vector2 from '../core/math/vector2';
import Color from '../core/math/color';
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

          break;
      }
    }
  }

  private drawEnity(enity: any, enityClass: any): void {
    gl.drawRect(
      this.getEnityPositionForDrawing(enity.position, enity.size, enityClass.minimap.size),
      enityClass.minimap.size,
      enity.rotation,
      enityClass.minimap.color);
  }

  private getEnityPositionForDrawing(position: any, size: any, minimapSize: any): Vector2 {
    return new Vector2(this.minimapPosition.x + position.x * minimapSize.x / size.x,
                       this.minimapPosition.y + position.y * minimapSize.y / size.y);
  }
}

export default new MinimapClass();