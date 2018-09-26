import { createStore } from './mini';

const fakeFetch = () => new Promise(resolve => setTimeout(resolve, 2000));

const actionsCreators = {
  increment: ({ count }) => fakeFetch().then(() => ({ count: count + 1 })),
  decrement: ({ count }) => ({ count: count - 1 })
};

const initialState = {
  count: 1
};

export const { connect, actions } = createStore(initialState, actionsCreators);
