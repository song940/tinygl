
export const createContext = canvas => {
  if (typeof canvas === 'string') {
    canvas = document.querySelector(canvas);
  }
  if (typeof canvas.getContext === 'function') {
    canvas = canvas.getContext('2d');
  }
  return canvas;
};

export class Stage {
  constructor({ context, width, height }) {
    this.gl = context;

    console.debug('Stage', { width, height });
    console.debug(context);
  }
  add(element) {
    this.elements.push(element);
    return this;
  }
  render() {

    return this;
  }
}

export class Sprite {

}

export class Light {

}

export class Camera {
  lookAt() {

  }
  zoomTo() {

  }
}