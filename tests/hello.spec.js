import { sayHello } from '../src/js/hello';

describe('Tests for sayHello', () => {
  it('should return the string Hello World!', () => {
    expect(sayHello()).toEqual('Hello World!');
  });
});
