import { renderComponent } from './render';

export function createComponent({ props = {}, children = [], render }) {
  const component = {
    props,
    children,
    render,
    update() {
      if (this.rendered !== this.render()) {
        renderComponent(this, this.$parent);
      }
    }
  };
  return component;
}
