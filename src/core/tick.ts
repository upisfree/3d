import gl from './gl';
import Minimap from '../game/minimap';
import Player from '../game/player';

function tick() {
  gl.clear();

  Player.instance.camera.render();
  Minimap.render();

  requestAnimationFrame(tick);
}

export default tick;