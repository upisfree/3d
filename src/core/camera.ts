import ENITY_NAME from './const/enityName';
import Vector2 from './math/vector2';
import gl from './gl';
import Scene from '../game/scene';
import Player from '../game/player';
import Wall from '../game/wall';

class Camera {
  public position: Vector2;
  public rotation: number; // в градусах

  constructor() {
  }

  public render(): void {
    // console.log('inst');
    // for (let i = 0; i < Scene.children.length; ++i) {
    //   let c = Scene.children[i];

    //   switch (c.constructor.name) {
    //     case ENITY_NAME.WALL:


    //       break;
    //   }
    // }
  }
}

export default Camera;