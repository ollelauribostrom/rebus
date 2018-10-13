import { init, registerListeners, onKeyUp } from '../src/js/app';
import * as renderMock from '../src/js/mini/render';
import { actions } from '../src/js/store';

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

afterEach(() => {
  renderMock.reset();
  document.addEventListener = jest.fn();
  actions.prev.mockClear();
  actions.next.mockClear();
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
  it('renders once on load', () => {
    const { container } = setup();
    init();
    expect(renderMock.render).toHaveBeenCalledTimes(1);
    const firstCall = renderMock.render.mock.calls[0];
    const [firstArg, secondArg] = firstCall;
    expect(firstArg).toMatchSnapshot();
    expect(secondArg).toEqual(container);
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

    testKeyPress('Left', actions.prev);
    testKeyPress('ArrowLeft', actions.prev);

    testKeyPress('Right', actions.next);
    testKeyPress('ArrowRight', actions.next);

    testKeyPress(' ', actions.next);
    testKeyPress('Spacebar', actions.next);
  });
});
