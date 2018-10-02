import { confetti } from 'dom-confetti';
import { createStore } from './mini';

const actionsCreators = {
  next: ({ current, rebuses }) => ({
    current: current < rebuses.length - 1 ? current + 1 : 0
  }),
  prev: ({ current, rebuses }) => ({
    current: current > 1 ? current - 1 : rebuses.length - 1
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
      confetti(confettiCanon);
      const updatedRebuses = [...rebuses];
      updatedRebuses[current].isAnswered = true;
      return { updatedRebuses };
    }
    return {};
  }
};

const initialState = {
  current: 0,
  rebuses: [
    {
      symbols: ['😍', '👍', '😍'],
      words: ['one', 'two'],
      input: [...Array(6)],
      isAnswered: false
    },
    {
      symbols: ['😍', '👍', '😍'],
      words: ['two', 'three'],
      input: [...Array(8)],
      isAnswered: false
    }
  ]
};

export const { connect, actions } = createStore(initialState, actionsCreators);
