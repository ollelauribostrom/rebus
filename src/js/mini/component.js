import { renderComponent } from './render';

export function createComponent({
  props = {},
  children = [],
  render,
  componentDidRender,
  componentDidUpdate
}) {
  const component = {
    props,
    children,
    render,
    componentDidRender,
    componentDidUpdate,
    update() {
      if (this.rendered !== this.render()) {
        renderComponent(this, this.$parent);
        if (this.componentDidUpdate) {
          this.componentDidUpdate();
        }
      }
    }
  };
  return component;
}
