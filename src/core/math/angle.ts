namespace Angle {
  export function rad2deg(r: number) {
    return r * (180 / Math.PI);
  }

  export function deg2rad(d: number) {
    return d * (Math.PI / 180);
  }
}

export default Angle;