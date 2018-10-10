import KEY_CODE from '../const/keyCode';
import DIRECTION from '../const/direction';
import Player from '../../game/player';

function onmousemove(e: MouseEvent) {
  if (e.movementX > 0) {
    Player.instance.move(DIRECTION.RIGHT);
  } else if (e.movementX < 0) {
    Player.instance.move(DIRECTION.LEFT);
  }
}

export default function() {
  window.addEventListener('mousemove', onmousemove);
};