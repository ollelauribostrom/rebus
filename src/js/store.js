import { createStore } from './mini';

const wait = duration => new Promise(resolve => setTimeout(resolve, duration));

const actionsCreators = {
  next: ({ current, rebusList }) => ({
    current: current < rebusList.length - 1 ? current + 1 : 0
  }),
  check: ({ score, input, current, rebusList }) => {
    if (rebusList[current].answered) {
      return {};
    }
    if (input === rebusList[current].text) {
      const newRebusList = [...rebusList];
      newRebusList[current].answered = true;
      return {
        score: score + 1,
        current: current < rebusList.length - 1 ? current + 1 : 0,
        input: '',
        flashClass: 'flash--success',
        rebusList: newRebusList
      };
    }
    return { flashClass: 'flash--fail' };
  },
  restoreFlash: () => wait(500).then(() => ({ flashClass: '' })),
  setInput: (_, input) => ({ input })
};

const initialState = {
  score: 0,
  current: 0,
  input: '',
  flashClass: '',
  rebusList: [{ rebus: '😍 + 👍 + 😍', text: 'one' }, { rebus: '👍 + 😍 +  👍', text: 'two' }]
};

export const { connect, actions } = createStore(initialState, actionsCreators);
