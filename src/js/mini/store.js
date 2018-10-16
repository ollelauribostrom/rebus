export function createStore(initialState, actions) {
  const store = {
    connectedComponents: [],
    state: initialState
  };
  store.actions = new Proxy(actions, {
    get(target, key) {
      return async (...args) => {
        const newState = await actions[key](store.state, ...args);
        store.state = Object.assign(store.state, newState);
        store.connectedComponents.forEach(c => c.update());
      };
    }
  });
  store.connect = component => {
    const connected = new Proxy(component, {
      get(target, key) {
        if (key === 'render') {
          return (...args) => target.render(store.state, ...args);
        }
        return Reflect.get(target, key);
      }
    });
    store.connectedComponents.push(connected);
    return connected;
  };
  return store;
}
