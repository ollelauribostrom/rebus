import { renderComponent } from './render';
import { isFunction } from './utils';

export function createComponent({
  props = {},
  children = [],
  render,
  componentDidMount,
  componentDidUpdate
}) {
  console.log("Create Component: \n" + "props: " + Object.keys(props) + "\n");
  console.log("children: " + children.length + "\n");
  console.log("render: " + render + "\n");
  console.log("componentDidMount: " + componentDidMount + "\n");
  console.log("componentDidUpdate: " + componentDidUpdate + "\n");
  return {
    props,
    children,
    render,
    componentDidMount,
    componentDidUpdate,
    update() {
      if (this.rendered !== this.render(this.props)) {
        renderComponent(this, this.$parent);
        if (isFunction(this.componentDidUpdate)) {
          this.componentDidUpdate();
        }
      }
    }
  };
}
