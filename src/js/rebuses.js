const rebuses = [
  {
    id: 1,
    symbols: ['Re', '+', '🚌'],
    words: ['Rebus']
  },
  {
    id: 2,
    symbols: ['🏠', '+', 'pl', '+', '🐜', '+', 's'],
    words: ['Houseplants']
  }
];

export function getRebuses() {
  return rebuses.map(rebus => ({
    ...rebus,
    input: [...Array(rebus.words.join('').length)],
    isAnswered: false
  }));
}

export function getRebus(id) {
  return getRebuses().find(rebus => rebus.id === id);
}
