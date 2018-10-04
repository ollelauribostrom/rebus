const rebuses = [
  {
    id: 1,
    symbols: ['😍', '👍', '😍'],
    words: ['one', 'two']
  },
  {
    id: 2,
    symbols: ['😍', '👍', '😍'],
    words: ['two', 'three']
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
