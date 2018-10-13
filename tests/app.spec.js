import { init, registerListeners, onKeyUp } from '../src/js/app';
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
jest.mock('../src/js/store');

const oldAddEventListener = document.addEventListener;

jest.mock('../src/js/store', () => ({
  actions: {
    next: jest.fn(),
    prev: jest.fn()
  },
  connect: component => component
}));

afterEach(() => {
  renderMock.reset();
  document.addEventListener = jest.fn();
  actionsMock.prev.mockClear();
  actionsMock.next.mockClear();
});

afterAll(() => {
  document.addEventListener = oldAddEventListener;
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

  it('registers listeners', () => {
    registerListeners();
    expect(document.addEventListener).toHaveBeenCalledWith('keyup', onKeyUp);
  });

  describe('onKeyUp', () => {
    const testKeyPress = (key, action) => {
      it(`sends action on keypress with key ${key}`, () => {
        onKeyUp({ key });
        expect(action).toHaveBeenCalled();
      });
    };

    testKeyPress('Left', actionsMock.prev);
    testKeyPress('ArrowLeft', actionsMock.prev);

    testKeyPress('Right', actionsMock.next);
    testKeyPress('ArrowRight', actionsMock.next);

    testKeyPress(' ', actionsMock.next);
    testKeyPress('Spacebar', actionsMock.next);
  });
});
