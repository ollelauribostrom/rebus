import { createComponent, render, createStore } from '../src/js/mini';

const wait = duration => new Promise(resolve => setTimeout(resolve, duration));

function Parent(...children) {
  return createComponent({
    children,
    componentDidMount: jest.fn(),
    render() {
      return `
        <div class="parent">
          <children>
        </div>`;
    }
  });
}

function Child(props, componentDidMount) {
  return createComponent({
    props,
    componentDidMount,
    render({ text }) {
      return `<span class="child">${text}</span>`;
    }
  });
}

describe('Tests for mini framework', () => {
  describe('render/component', () => {
    it('renders a single component without children', () => {
      const root = document.createElement('div');
      render(Child({ text: 'Child1' }), root);
      expect(root.innerHTML).toMatchSnapshot();
    });
    it('renders a component with children', () => {
      const root = document.createElement('div');
      render(Parent(Child({ text: 'Child1' }), Child({ text: 'Child2' })), root);
      expect(root.innerHTML).toMatchSnapshot();
    });
    it('registers event listeners passed as props', () => {
      const onClick = jest.fn();
      const root = document.createElement('div');
      render(Child({ onClick }), root);
      root.firstElementChild.click();
      expect(onClick).toHaveBeenCalled();
    });
    it('calls componentDidMount after the component has been rendered', () => {
      const childOneDidMount = jest.fn();
      const childTwoDidMount = jest.fn();
      const root = document.createElement('div');
      const parent = Parent(
        Child({ text: 'Child1' }, childOneDidMount),
        Child({ text: 'Child2' }, childTwoDidMount)
      );
      render(parent, root);
      expect(parent.componentDidMount).toHaveBeenCalledTimes(1);
      expect(childOneDidMount).toHaveBeenCalledTimes(1);
      expect(childTwoDidMount).toHaveBeenCalledTimes(1);
    });
  });
  describe('store', () => {
    it('updates connected components on state change', async () => {
      const actionsCreators = { increment: ({ count }) => ({ count: count + 1 }) };
      const initialState = { count: 0 };
      const { connect, actions } = createStore(initialState, actionsCreators);
      function ConnectedChild(props) {
        return connect(
          createComponent({
            props,
            componentDidUpdate: jest.fn(),
            render({ count }) {
              return `<span>${count}</span>`;
            }
          })
        );
      }
      const root = document.createElement('div');
      const connectedChild = ConnectedChild();
      render(Parent(Child({ text: 'Not connected' }), connectedChild), root);
      actions.increment();
      await wait(30);
      expect(root.innerHTML).toMatchSnapshot();
      expect(connectedChild.componentDidUpdate).toHaveBeenCalledTimes(1);
    });
  });
});
