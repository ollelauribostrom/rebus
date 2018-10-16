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
    symbols: ['🍌', '+', '🍞'],
    words: ['Bananabread']
  },
  {
    symbols: ['🔑', '🐗', '+', 'd'],
    words: ['Keyboard']
  },
  {
    symbols: ['💵', '+', 'ew'],
    words: ['cashew']
  },
  {
    symbols: ['🤘🏻', '+', '⭐️'],
    words: ['rockstar']
  },
  {
    symbols: ['Tu', '+', '👄'],
    words: ['Tulip']
  },
  {
    symbols: ['🔥', '+', '🐶'],
    words: ['Hotdog']
  },
  {
    symbols: ['🌙', '+', '☀'],
    words: ['Moonshine']
  },
  {
    symbols: ['💻', '+', '🌊'],
    words: ['Digital', 'Ocean']
  },
  {
    symbols: ['🔥', '+', '🌬️', '+', '🎈'],
    words: ['Hot', 'Air', 'Balloon']
  },
  {
    symbols: ['💵', '+', '⚽'],
    words: ['Moneyball']
  },
  {
    symbols: ['🐂', '+', '👀'],
    words: ['Bullseye']
  },
  {
    symbols: ['🦇', '+', 'tery'],
    words: ['Battery']
  },
  {
    symbols: ['🔒', '+', 'smith'],
    words: ['Locksmith']
  },
  {
    symbols: ['👞', '+', 'horn'],
    words: ['Shoehorn']
  },
  {
    symbols: ['🖊', '+', 't', '+', '🏠'],
    words: ['Penthouse']
  },
  {
    symbols: ['🐱', '+', 'e', '+', '💍'],
    words: ['Catering']
  },
  {
    symbols: ['2', '+', 'Na️', '+', '🐟'],
    words: ['tunafish']
  },
  {
    symbols: ['🔥', '+', 'man'],
    words: ['Fireman']
  },
  {
    symbols: ['💡', '+', 'er'],
    words: ['Lighter']
  },
  {
    symbols: ['🌙', '+', '💡'],
    words: ['Moonlight']
  },
  {
    symbols: ['f', '+', '🌬️', '+', 'y'],
    words: ['Fairy']
  },
  {
    symbols: ['🔨', '+', '⏰'],
    words: ['Hammer', 'time']
  },
  {
    symbols: ['👻', '+', '🚂'],
    words: ['Ghost', 'Train']
  },
  {
    symbols: ['🍦', '+', '🍦', '+', '👶'],
    words: ['Ice', 'Ice', 'Baby']
  },
  {
    symbols: ['🚗', '+', 'D', '+', '👹', '+', '🐏'],
    words: ['cardiogram']
  },
  {
    symbols: ['🌎', '+', 'wide', '+', '🕸️'],
    words: ['world', 'wide', 'web']
  },
  {
    symbols: ['🐀', '+', 'AT', '+', '2️', '+', 'E'],
    words: ['ratatouille']
  },
  {
    symbols: ['📖', '+', '🔑', '+', 'ping'],
    words: ['bookkeeping']
  },
  {
    symbols: ['sc', '+', '🦍', '+', '🐐'],
    words: ['scapegoat']
  },
  {
    symbols: ['🐜', '+', '⛵️', '+', 'tica'],
    words: ['antarctica']
  },
  {
    symbols: ['🌧', '+', '🏹'],
    words: ['rainbow']
  },
  {
    symbols: ['👀', '+', 'l', '+', '&'],
    words: ['iceland']
  },
  {
    symbols: ['d', '+', '💡'],
    words: ['delight']
  },
  {
    symbols: ['st', '+', '🌬', '+', 's'],
    words: ['stairs']
  },
  {
    symbols: ['⚡', '+', '🌊'],
    words: ['shock', 'wave']
  },
  {
    symbols: ['🐉', '+', '⚽', '+', 'z'],
    words: ['dragon', 'ball', 'z']
  },
  {
    symbols: ['🔥', '+', '⭐'],
    words: ['hotstar']
  },
  {
    symbols: ['🦃', '+', '🐔'],
    words: ['turkey', 'chicken']
  },
  {
    symbols: ['🐛', '+', 'zilla'],
    words: ['bug', 'zilla']
  },
  {
    symbols: ['🍔', '+', '🐼'],
    words: ['food', 'panda']
  },
  {
    symbols: ['🔌', '+', '🦈'],
    words: ['wire', 'shark']
  },
  {
    symbols: ['☁️', '+', '💻', '+', 'ing'],
    words: ['cloud', 'computing']
  },
  {
    symbols: ['b', '+', '🔒', '+', '⛓️'],
    words: ['block', 'chain']
  },
  {
    symbols: ['☀️', '+', 'day', '+', '🏫'],
    words: ['sunday', 'school']
  },
  {
    symbols: ['🔴', '+', '🚌'],
    words: ['red', 'bus']
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
