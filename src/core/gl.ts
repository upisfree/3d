import { canvas, context } from '../platform/canvas';
import Vector2 from './math/vector2';
import Color from './math/color';

namespace gl {
  // эта версия без поворота, нужно проверить, насколько она быстрее версии с поворотом
  // export function drawRect(position: Vector2, size: Vector2, color: Color): void {
  //   context.fillStyle = color.getHexString();
  //   context.fillRect(position.x, position.y, size.width, size.height);
  // }

  export function drawRect(position: Vector2, size: Vector2, rotation: number, color: Color | CanvasGradient | string): void {
    context.save();

    context.beginPath();

    context.translate(position.x + size.width / 2, position.y + size.height / 2);
    context.rotate(rotation);

    if (color instanceof Color) {
      color = color.getHexString();
    }

    context.fillStyle = color;
    context.fillRect(-size.width / 2, -size.height / 2, size.width, size.height);

    context.closePath();

    context.restore();
  }

  // TODO: create normal gradient function
  export function drawGradient(position: Vector2, size: Vector2, rotation: number, ...colors: Color[]): void {
    let gradient = context.createLinearGradient(0, 0, 0, size.height);
    
    for (let i = 0; i < colors.length; i++) {
      gradient.addColorStop(i, colors[i].getHexString());
    }

    drawRect(position, size, rotation, gradient);
  }

  export function drawLine(v1: Vector2, v2: Vector2, color: Color): void {
    context.save();

    context.beginPath();

    context.strokeStyle = color.getHexString();

    context.moveTo(v1.x, v1.y);
    context.lineTo(v2.x, v2.y);

    context.stroke();

    context.closePath();

    context.restore();
  }

  export function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}

export default gl;