import MAP_CODE from '../core/const/mapCode';
import Vector2 from '../core/math/vector2';
import Wall from './wall';
import Player from './player';

export class SceneClass {
  public map: Array<number> = [
    1, 1, 1, 1, 1, 0, 1, 1, 1,
    0, 0, 0, 1, 1, 0, 1, 0, 1,
    1, 0, 0, 0, 1, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 1, 1,
    1, 1, 0, 0, 2, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 0, 0, 0,
    1, 0, 0, 1, 0, 0, 0, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 0
    // 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 0, 0, 0, 0, 1, 0, 0, 0, 0,
    // 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 0, 0, 0, 0, 2, 0, 0, 0, 0,
    // 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  public mapWidth: number = 9; // квадрат со стороной 9

  public children: Array<any> = [];

  constructor() {

  }

  public add(a: any): void {
    this.children.push(a);
  }

  public generateObjectsFromMap(): void {
    for (let i = 0; i < this.map.length; i++) {
      let x = i % this.mapWidth;
      let y = (i - x) / this.mapWidth;

      switch (this.map[i]) {
        case MAP_CODE.NOTHING:
          break;

        case MAP_CODE.WALL:
          this.add(new Wall(new Vector2(x, y)));

          break;

        case MAP_CODE.PLAYER:
          let player = new Player(new Vector2(x, y));
          Player.instance = player;

          this.add(player);

          break;
      }
    }
  }
}

export default new SceneClass();