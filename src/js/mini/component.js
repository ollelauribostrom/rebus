import { renderComponent } from './render';
import { isFunction } from './utils';

export function createComponent({
  props = {},
  children = [],
  render,
  componentDidMount,
  componentDidUpdate
}) {
  return {
    props,
    children,
    render,
    componentDidMount,
    componentDidUpdate,
    update() {
      const preRendered = this.render(this.props);
      if (this.rendered !== preRendered) {
        renderComponent(this, this.$parent);
        if (isFunction(this.componentDidUpdate)) {
          this.componentDidUpdate();
        }
      }
    }
  };
}
