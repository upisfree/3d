import ENITY_NAME from './const/enityName';
import Vector2 from './math/vector2';
import Scene from '../game/scene';
import Player from '../game/player';

export namespace Physics {
  export interface Body {
    position: Vector2;
    size: Vector2;
  }

  // TODO: https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B0
  export function collision(a: Body, b: Body) {
    return a.position.x < b.position.x + b.size.width &&
           a.position.x + a.size.width > b.position.x &&
           a.position.y < b.position.y + b.size.height &&
           a.position.y + a.size.height > b.position.y;
  }

  export function checkPlayerAndWallsCollision(player: Player) {
    for (let i = 0; i < Scene.children.length; ++i) {
      let a = Scene.children[i];

      if (a.constructor.name === ENITY_NAME.WALL) {
        if (collision(player, a)) {
          return true;
        }
      }
    }

    return false;
  }
}