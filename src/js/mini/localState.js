const GAME_STATE = 'gameState';

const hasChangedInput = ({ input }) => input.filter(char => char).length;

const inputToString = input => input.reduce((str, char) => (char ? str + char : str));

const toLocalRebus = ({ id, input, isAnswered }) => ({
  id,
  input: inputToString(input),
  isAnswered
});

const localStateFromGameState = ({ current = 0, updatedRebuses = [] }) => ({
  current,
  updatedRebuses: updatedRebuses.filter(hasChangedInput).map(toLocalRebus)
});

export const setLocalGameState = state =>
  localStorage.setItem(GAME_STATE, JSON.stringify(localStateFromGameState(state)));

export const initializeWithLocalState = initialState => {
  const localState = localStorage.getItem(GAME_STATE);

  if (!localState) {
    setLocalGameState(initialState);
    return initialState;
  }

  const { current, updatedRebuses: localUpdatedRebuses } = JSON.parse(localState);
  const rebuses = initialState.rebuses.map(rebus => {
    const localRebus = localUpdatedRebuses.find(({ id }) => id === rebus.id);

    if (!localRebus) return rebus;

    const { isAnswered } = localRebus;
    const input = rebus.input.map((char, i) => localRebus.input.charAt(i) || char);

    return {
      ...rebus,
      isAnswered,
      input
    };
  });

  return {
    ...initialState,
    current,
    rebuses
  };
};

export const localState = {
  set: setLocalGameState,
  initialize: initializeWithLocalState
};
