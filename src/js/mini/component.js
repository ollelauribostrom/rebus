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
    update(updateProps) {
      // this.updateProps = updateProps;
      if (this.rendered !== this.render(this.props)) {
        renderComponent(this, this.$parent);
        if (isFunction(this.componentDidUpdate)) {
          this.componentDidUpdate();
        }
      }
    }
  };
}
