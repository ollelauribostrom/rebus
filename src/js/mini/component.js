import { renderComponent } from './render';

export function createComponent({ props = {}, children = [], render, componentDidRender }) {
  const component = {
    props,
    children,
    render,
    componentDidRender,
    update() {
      if (this.rendered !== this.render()) {
        renderComponent(this, this.$parent);
      }
    }
  };
  return component;
}
