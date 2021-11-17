import { confetti } from 'dom-confetti';
import { createStore } from './mini';
import { getRebuses, markRebusAsAnswered } from './rebuses';

export const actionsCreators = {
  next: ({ current, rebuses, incorrectAnswer, incorrectAnswerCount }) => {
    const answeredRebuses = window.localStorage.getItem('answeredRebuses')
    const singleRebus = JSON.parse(answeredRebuses).find(rebusId => rebusId === current + 1)
    
    if (singleRebus) { // if rebus ID already listed in answeredRebus, go to next one
      return {
        current: current < rebuses.length - 1 ? current + 1 : 0,
        animation: 'flip-vertical-right',
        incorrectAnswerCount: 0
      }
    } else { // if rebus ID is not listed in answeredRebus, check if answer correct before jump to next one
      if (!incorrectAnswer) {
        return {
          current: current < rebuses.length - 1 ? current + 1 : 0,
          animation: 'flip-vertical-right',
          incorrectAnswerCount: 0,
          incorrectAnswer: true
        }
      } else {
        return {
          current: current,
          animation: 'shake',
          incorrectAnswerCount: incorrectAnswerCount
        }
      }
    }    
  },
  prev: ({ current, rebuses }) => ({
    current: current > 0 ? current - 1 : 0,
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
  check: ({ current, rebuses, incorrectAnswer, incorrectAnswerCount }, confettiCanon) => {
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
      return { updatedRebuses, animation: 'none', incorrectAnswer: true, incorrectAnswerCount: 0 };
    }
    return { incorrectAnswer: false, incorrectAnswerCount: incorrectAnswerCount + 1 };
  },
  shake: ({ current, rebuses }) => {
    const rebus = rebuses[current];
    const isAnswered = rebus.words.join('').toUpperCase() === rebus.input.join('').toUpperCase();
    if (!isAnswered) {
      return { animation: 'shake' };
    }
    return {};
  }
};

export const initialState = {
  current: 0,
  animation: 'none',
  rebuses: getRebuses(),
  incorrectAnswer: true,
  incorrectAnswerCount: 0
};

export const { connect, actions } = createStore(initialState, actionsCreators);
