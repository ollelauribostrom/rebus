import { confetti } from 'dom-confetti';
import { createStore } from './mini';
import { getRebuses, markRebusAsAnswered } from './rebuses';
 import song from '/src/Jeopardy_Music.wav';
export const actionsCreators = {
  next: ({ current, rebuses }) => ({
    current: current < rebuses.length - 1 ? current + 1 : 0,
    animation: 'flip-vertical-right',
    incorrectAnswerCount: 0
  }),

  prev: ({ current, rebuses }) => ({
    current: current > 0 ? current - 1 : rebuses.length - 1,
    animation: 'flip-vertical-left',
    incorrectAnswerCount: 0
  }),

  setCurrent: ({ rebuses }, id) => {
    const index = rebuses.findIndex(rebus => rebus.id === id);
    if (index > 0) {
      return { current: index };
    }
    return {};
  },
  setInput: ({ current, rebuses }, input, wordIndex, charIndex) => {
    const rebus = rebuses[current];
    const previousWords = rebus.words.slice(0, wordIndex).join('');
    const index = wordIndex > 0 ? previousWords.length + charIndex : charIndex;
    const updatedRebuses = [...rebuses];
    updatedRebuses[current].input[index] = input;
    return { updatedRebuses };
  },
  check: ({ current, rebuses, incorrectAnswerCount }, confettiCanon) => {
    const rebus = rebuses[current];
    const input = rebus.input.join('').toUpperCase();
    const answer = rebus.words.join('').toUpperCase();
    if (input.length !== answer.length) {
      return {};
    }
    if (input === answer) {
      markRebusAsAnswered(rebus.id);
      confetti(confettiCanon);
      const updatedRebuses = [...rebuses];
      updatedRebuses[current].isAnswered = true;
      return { updatedRebuses, animation: 'none', incorrectAnswerCount: 0 };
    }
    return { incorrectAnswerCount: incorrectAnswerCount + 1 };
  },
  shake: ({ current, rebuses }) => {
    const rebus = rebuses[current];
    const isAnswered = rebus.words.join('').toUpperCase() === rebus.input.join('').toUpperCase();
    if (!isAnswered) {
      return { animation: 'shake' };
    }
    return {};
  },
  playSound: () => {
    const sound = new Audio(song);
    sound.play();
  }
};

export const initialState = {
  current: 0,
  animation: 'none',
  rebuses: getRebuses(),
  incorrectAnswerCount: 0
};

export const { connect, actions } = createStore(initialState, actionsCreators);
