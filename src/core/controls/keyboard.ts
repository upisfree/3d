import KEY_CODE from '../const/keyCode';
import DIRECTION from '../const/direction';
import Player from '../../game/player';

function onkeydown(e: KeyboardEvent) {
  switch (e.keyCode) {
    case KEY_CODE.ARROW_UP:
    case KEY_CODE.W:
      Player.instance.move(DIRECTION.UP);

      break;

    case KEY_CODE.ARROW_LEFT:
    case KEY_CODE.A:
      Player.instance.move(DIRECTION.LEFT);

      break;

    case KEY_CODE.ARROW_DOWN:
    case KEY_CODE.S:
      Player.instance.move(DIRECTION.DOWN);

      break;

    case KEY_CODE.ARROW_RIGHT:
    case KEY_CODE.D:
      Player.instance.move(DIRECTION.RIGHT);

      break;
  }
}

export default function() {
  window.addEventListener('keydown', onkeydown);
};