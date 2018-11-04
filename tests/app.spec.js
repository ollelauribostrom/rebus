import { init, registerListeners, setCurrentFromURL } from '../src/js/app';
import { actions as actionsMock } from '../src/js/store';
import * as renderMock from '../src/js/mini/render';

jest.mock('../src/js/mini/render', () => {
  const mock = {};
  function reset() {
    Object.assign(mock, {
      render: jest.fn(),
      reset
    });
  }
  reset();
  return mock;
});

jest.mock('../src/js/store', () => ({
  actions: {
    next: jest.fn(),
    prev: jest.fn(),
    setCurrent: jest.fn(),
    shake: jest.fn()
  },
  connect: component => component
}));

afterEach(() => {
  renderMock.reset();
});

const setup = () => {
  const container = document.createElement('div');
  container.className = 'root';
  document.body.append(container);
  return { container };
};

describe('Tests for app', () => {
  describe('init', () => {
    it('renders the app into the root element', () => {
      const { container } = setup();
      init();
      expect(renderMock.render).toHaveBeenCalledTimes(1);
      const firstCall = renderMock.render.mock.calls[0];
      const [firstArg, secondArg] = firstCall;
      expect(firstArg).toMatchSnapshot();
      expect(secondArg).toEqual(container);
    });
  });
  describe('registerListeners', () => {
    it('register a listener for keyup events', () => {
      const leftArrowEvent = new Event('keyup');
      const rightArrowEvent = new Event('keyup');
      const enterEvent = new Event('keyup');
      leftArrowEvent.key = 'ArrowLeft';
      rightArrowEvent.key = 'ArrowRight';
      enterEvent.key = 'Enter';
      registerListeners();
      document.dispatchEvent(leftArrowEvent);
      document.dispatchEvent(rightArrowEvent);
      document.dispatchEvent(enterEvent);
      expect(actionsMock.prev).toHaveBeenCalled();
      expect(actionsMock.next).toHaveBeenCalled();
      expect(actionsMock.shake).toHaveBeenCalled();
    });
  });
  describe('setCurrentFromURL', () => {
    it('sets the current rebus based on the url query string', () => {
      window.history.pushState({}, 'Test', '/?rebus=2');
      setCurrentFromURL();
      expect(actionsMock.setCurrent).toHaveBeenCalledWith(2);
    });
  });
});
