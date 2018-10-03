import { canvas, context } from '../platform/canvas';
import Vector2 from './math/vector2';
import Color from './math/color';

namespace gl {
  // эта версия без поворота, нужно проверить, насколько она быстрее версии с поворотом
  // export function drawRect(position: Vector2, size: Vector2, color: Color): void {
  //   context.fillStyle = color.getHexString();
  //   context.fillRect(position.x, position.y, size.width, size.height);
  // }

  export function drawRect(position: Vector2, size: Vector2, rotation: number, color: Color): void {
    context.save();

    context.beginPath();

    context.translate(position.x + size.width / 2, position.y + size.height / 2);
    context.rotate(rotation);

    context.fillStyle = color.getHexString();
    context.fillRect(-size.width / 2, -size.height / 2, size.width, size.height);

    context.restore();
  }

  export function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}

export default gl;