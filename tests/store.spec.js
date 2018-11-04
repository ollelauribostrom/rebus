import * as confetti from 'dom-confetti';
import { actionsCreators, initialState } from '../src/js/store';

jest.mock('../src/js/rebuses', () => ({
  getRebuses: () => [
    {
      id: 1,
      symbols: ['😍', '👍', '😍'],
      words: ['one', 'two'],
      input: [...Array(6)],
      isAnswered: false
    },
    {
      id: 2,
      symbols: ['😍', '👍', '😍'],
      words: ['three', 'four'],
      input: [...Array(9)],
      isAnswered: false
    }
  ],
  markRebusAsAnswered: jest.fn()
}));

describe('Tests for store', () => {
  it('should have the correct initial state', () => {
    expect(initialState).toMatchSnapshot();
  });
  it('should handle action: next', () => {
    const state = { ...initialState };
    const newState = Object.assign({}, state, actionsCreators.next(state));
    const finalState = Object.assign({}, newState, actionsCreators.next(newState));
    expect(newState.current).toEqual(1);
    expect(newState.animation).toEqual('flip-vertical-right');
    expect(finalState.current).toEqual(0);
  });
  it('should handle action: prev', () => {
    const state = { ...initialState };
    const newState = Object.assign({}, state, actionsCreators.prev(state));
    const finalState = Object.assign({}, newState, actionsCreators.prev(newState));
    expect(newState.current).toEqual(1);
    expect(newState.animation).toEqual('flip-vertical-left');
    expect(finalState.current).toEqual(0);
  });
  it('should handle action: shake', () => {
    const state = { ...initialState };
    const newState = Object.assign({}, state, actionsCreators.shake(state));
    const finalState = Object.assign({}, newState, actionsCreators.shake(newState));
    expect(newState.current).toEqual(0);
    expect(newState.animation).toEqual('shake');
    expect(finalState.current).toEqual(0);
  });
  it('should handle action: setInput', () => {
    const state = { ...initialState };
    const newState = Object.assign({}, state, actionsCreators.setInput(state, 'a', 0, 0));
    const finalState = Object.assign({}, newState, actionsCreators.setInput(newState, 'b', 1, 0));
    expect(finalState.animation).toEqual('none');
    expect(finalState.rebuses[0].input).toEqual([
      'a',
      undefined,
      undefined,
      'b',
      undefined,
      undefined
    ]);
  });
  it('should handle action: check', () => {
    const confettiCanon = document.createElement('div');
    const confettiSpy = jest.spyOn(confetti, 'confetti');
    const state = { ...initialState };
    const newState = Object.assign({}, state, actionsCreators.check(state, confettiCanon));
    expect(newState.rebuses[0].isAnswered).toEqual(false);
    newState.rebuses[0].input = ['O', 'n', 'E', 'T', 'w', 'O'];
    const finalState = Object.assign({}, newState, actionsCreators.check(newState, confettiCanon));
    expect(finalState.rebuses[0].isAnswered).toEqual(true);
    expect(confettiSpy).toHaveBeenCalledTimes(1);
    expect(confettiSpy).toHaveBeenCalledWith(confettiCanon);
  });
  it('should handle action: setCurrent', () => {
    const state = { ...initialState };
    const newState = Object.assign({}, state, actionsCreators.setCurrent(state, 2));
    const finalState = Object.assign({}, newState, actionsCreators.setCurrent(newState, 9999));
    expect(finalState.current).toEqual(1);
  });
});

