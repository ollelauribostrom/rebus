const rebuses = [
  {
    symbols: ['Re', '+', '🚌'],
    words: ['Rebus']
  },
  {
    symbols: ['🏠', '+', 'pl', '+', '🐜', '+', 's'],
    words: ['Houseplants']
  },
  {
    symbols: ['📖', '+', '🙋', '+', '📝'],
    words: ['Readme', 'file']
  },
  {
    symbols: ['🚗', '+', 'a', '+', '🚐'],
    words: ['Caravan']
  },
  {
    symbols: ['⭐', '+', '🐠'],
    words: ['Starfish']
  },
  {
    symbols: ['💡', '+', '🏠'],
    words: ['Lighthouse']
  },
  {
    symbols: ['🌲', '+', '🍎'],
    words: ['Pineapple']
  },
  {
    symbols: ['🥚', '+', '🌱'],
    words: ['Eggplant']
  },
  {
    symbols: ['🔥', '+', '🦊'],
    words: ['Firefox']
  },
  {
    symbols: ['💊', '+', 'ow'],
    words: ['Pillow']
  },
  {
    symbols: ['🖊️', '+', 'd', '+', '🐜'],
    words: ['Pendant']
  },
  {
    symbols: ['🌡️', '+', '🔑'],
    words: ['Hotkey']
  },
  {
    symbols: ['🌞', '+', '🛀'],
    words: ['Sunbath']
  },
  {
    symbols: ['🐱', '+', 'as', '+', '🏆', 'y̶', '+', 'e'],
    words: ['Catastrophe']
  },
  {
    symbols: ['🍑', '🍑', '+', 'i', 'n', 'a', 't', 'e'],
    words: ['Assassinate']
  },
  {
    symbols: ['💵', '+', 'ew'],
    words: ['cashew']
  },
  {
    symbols: ['🤘🏻', '+', '⭐️'],
    words: ['rockstar']
  }
];

export function getRebuses() {
  return rebuses.map((rebus, id) => ({
    id,
    ...rebus,
    input: [...Array(rebus.words.join('').length)],
    isAnswered: false
  }));
}

export function getRebus(id) {
  return getRebuses().find(rebus => rebus.id === id);
}
