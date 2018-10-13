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
      confetti(confettiCanon);
      const updatedRebuses = [...rebuses];
      updatedRebuses[current].isAnswered = true;
      return { updatedRebuses, animation: 'none' };
    }
    return {};
  },
  focusInput: () => {
    const firstInput = document.querySelector('input.word__char');
    firstInput.focus();
  },
  moveCursor: () => {
    const letterInputs = document.querySelectorAll('.word__char');
    for (let i = 0; i < letterInputs.length; i += 1) {
      letterInputs[i].addEventListener('keydown', e => {
        const maxlength = letterInputs[i].getAttribute('maxlength');
        if (
          letterInputs[i].value.length === parseInt(maxlength, 10) &&
          letterInputs[i + 1] !== undefined &&
          e.keyCode !== 8
        ) {
          letterInputs[i + 1].focus();
        }
        if (e.keyCode === 8 && letterInputs[i - 1] !== undefined && letterInputs[i].value === '') {
          letterInputs[i - 1].focus();
        }
      });
    }
  }
};

export const initialState = {
  current: 0,
  animation: 'none',
  rebuses: getRebuses()
};

export const { connect, actions } = createStore(initialState, actionsCreators);
