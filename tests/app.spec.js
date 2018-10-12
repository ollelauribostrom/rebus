import { init } from '../src/js/app';
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
  it('renders once on load', () => {
    const { container } = setup();
    init();
    expect(renderMock.render).toHaveBeenCalledTimes(1);
    const firstCall = renderMock.render.mock.calls[0];
    const [firstArg, secondArg] = firstCall;
    expect(firstArg).toMatchSnapshot();
    expect(secondArg).toEqual(container);
  });
});
