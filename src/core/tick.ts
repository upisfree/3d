import gl from './gl';
import { Raycasting } from './raycasting';
import Minimap from '../game/minimap';
import Player from '../game/player';

function tick() {
  gl.clear();

  Raycasting.tick(Player.instance);
  Player.instance.camera.render();
  Minimap.render();

  requestAnimationFrame(tick);
}

export default tick;