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
    symbols: ['❄️', '+', '⚾️'],
    words: ['snowball']
  },
  {
    symbols: ['❄️', '+', 'man'],
    words: ['snowman']
  },
  {
    symbols: ['🐏', '📃'],
    words: ['rampage']
  },
  {
    symbols: ['✝️', '+', '🏹'],
    words: ['cross', 'bow']
  },
  {
    symbols: ['🐈', '+', '🥊'],
    words: ['cat', 'fight']
  },
  {
    symbols: ['👣', '+', '📝'],
    words: ['footnote']
  },
  {
    symbols: ['🐝', '+', 'r'],
    words: ['Beer']
  },
  {
    symbols: ['🎉', '-', 'Y', '+', '⏰', '+', 'Job'],
    words: ['part', 'time', 'job']
  },
  {
    symbols: ['🌲', '+', '🏠'],
    words: ['treehouse']
  },
  {
    symbols: ['✔', '+', 'list'],
    words: ['checklist']
  },
  {
    symbols: ['💧', '+', '📦'],
    words: ['Dropbox']
  },
  {
    symbols: ['💡', '+', '⚔️'],
    words: ['Lightsaber']
  },
  {
    symbols: ['☕️'],
    words: ['Java']
  },
  {
    symbols: ['⎈'],
    words: ['Helm']
  },
  {
    symbols: ['🌍', '+', 'form'],
    words: ['Terraform']
  },
  {
    symbols: ['Uni', '+', '🌽'],
    words: ['unicorn']
  },
  {
    symbols: ['🆘', '+', 'desk'],
    words: ['helpdesk']
  },
  {
    symbols: ['🐱', '+', 'er', '+', '🗼'],
    words: ['caterpillar']
  },
  {
    symbols: ['🧢', '+', 'tain'],
    words: ['captain']
  },
  {
    symbols: ['🦊', '+', 'hole'],
    words: ['foxhole']
  },
  {
    symbols: ['🐦', '+', 's-', '+', '👁️'],
    words: ["bird's-eye"]
  },
  {
    symbols: ['🐴', '+', '🔙'],
    words: ['horseback']
  },
  {
    symbols: ['🎼', '+', '🍴'],
    words: ['pitchfork']
  },
  {
    symbols: ['🌊', '+', '🐴'],
    words: ['seahorse']
  },
  {
    symbols: ['🔙', '+', '💀'],
    words: ['backbone']
  },
  {
    symbols: ['💥', '+', '🌽'],
    words: ['popcorn']
  },
  {
    symbols: ['🔥', '+', '🏠'],
    words: ['firehouse']
  },
  {
    symbols: ['🚗', '+', 'go'],
    words: ['cargo']
  },
  {
    symbols: ['sm', '+', '🎨'],
    words: ['smart']
  },
  {
    symbols: ['😢', '+', '👶'],
    words: ['crybaby']
  },
  {
    symbols: ['👣', '+', '🎵'],
    words: ['footnote']
  },
  {
    symbols: ['📻', '+', '🙂'],
    words: ['radiohead']
  },
  {
    symbols: ['🗃', '+', 'elder', '+', '🐜'],
    words: ['Box', 'Elder', 'Bug']
  },
  {
    symbols: ['L', '+', '🏹'],
    words: ['Elbow']
  },
  {
    symbols: ['📅', '+', 'et', '+', '🌍'],
    words: ['Planet', 'Earth']
  },
  {
    symbols: ['🔨', '+', 'head', '+', '🦈'],
    words: ['hammerhead', 'shark']
  },
  {
    symbols: ['👩‍', '+', '💍'],
    words: ['red', 'herring']
  },
  {
    symbols: ['Black', '+', '🎩'],
    words: ['Blackhat']
  },
  {
    symbols: ['👁', '+', '💧'],
    words: ['Eyedrop']
  },
  {
    symbols: ['🧠', '+', '🌪', '+', 'ing'],
    words: ['Brainstorming']
  },
  {
    symbols: ['👞', '+', '📦'],
    words: ['Shoebox']
  },
  {
    symbols: ['💵', '+', '🛍️'],
    words: ['Money', 'Bag']
  },
  {
    symbols: ['💥', '+', 'py'],
    words: ['Poppy']
  }
];

export function isRebusAnswered(id) {
  const answeredRebuses = window.localStorage.getItem('answeredRebuses');
  return !!answeredRebuses && JSON.parse(answeredRebuses).includes(id);
}

export function markRebusAsAnswered(id) {
  const answeredRebuses = window.localStorage.getItem('answeredRebuses');
  if (!answeredRebuses) {
    window.localStorage.setItem('answeredRebuses', JSON.stringify([id]));
  } else {
    window.localStorage.setItem(
      'answeredRebuses',
      JSON.stringify([...JSON.parse(answeredRebuses), id])
    );
  }
}

export function getRebuses() {
  return rebuses.map((rebus, index) => {
    const id = index + 1;
    const isAnswered = isRebusAnswered(id);
    const chars = rebus.words.join('');
    return {
      id,
      ...rebus,
      input: isAnswered ? [...chars] : [...Array(chars.length)],
      isAnswered
    };
  });
}
