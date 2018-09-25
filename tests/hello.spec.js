import { sayHello } from '../src/hello';

describe('Tests for sayHello', () => {
  it('should return the string Hello World!', () => {
    expect(sayHello()).toEqual('Hello World!');
  });
});
