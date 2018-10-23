import { confetti } from 'dom-confetti';
import { createStore } from './mini';
import { getRebuses } from './rebuses';

export const actionsCreators = {
  next: ({ current, rebuses }) => ({
    current: current < rebuses.length - 1 ? current + 1 : 0,
    animation: 'flip-vertical-right'
  }),
  prev: ({ current, rebuses }) => ({
    current: current > 0 ? current - 1 : rebuses.length - 1,
    animation: 'flip-vertical-left'
  }),
  setInput: ({ current, rebuses }, input, wordIndex, charIndex) => {
    const rebus = rebuses[current];
    const previousWords = rebus.words.slice(0, wordIndex).join('');
    const index = wordIndex > 0 ? previousWords.length + charIndex : charIndex;
    const updatedRebuses = [...rebuses];
    updatedRebuses[current].input[index] = input;
    return { updatedRebuses };
  },
  check: ({ current, rebuses }, confettiCanon) => {
    const rebus = rebuses[current];
    const isAnswered = rebus.words.join('').toUpperCase() === rebus.input.join('').toUpperCase();
    if (isAnswered) {
      if (!window.localStorage.getItem('answered')) {
        window.localStorage.setItem('answeredRebuses', JSON.stringify([rebus.id]));
      } else {
        window.localStorage.setItem(
          'answeredRebuses',
          JSON.stringify([...JSON.parse(window.localStorage.getItem('answeredRebuses')), rebus.id])
        );
      }

      confetti(confettiCanon);
      const updatedRebuses = [...rebuses];
      updatedRebuses[current].isAnswered = true;
      return { updatedRebuses, animation: 'none' };
    }
    return {};
  }
};

export const initialState = {
  current: 0,
  animation: 'none',
  rebuses: getRebuses()
};

export const { connect, actions } = createStore(initialState, actionsCreators);
