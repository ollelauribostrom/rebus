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
    symbols: ['🚗', '🚙', '🚗'],
    words: ['Cars']
  },
  {
    symbols: ['👦🏻', '+', '⚡', '+', '👓', '=', '✨'],
    words: ['Harry', 'Potter']
  },
  {
    symbols: ['H', '=', 'C', '👒'],
    words: ['Cat']
  },
  {
    symbols: ['FR', '=', 'D', '🐸'],
    words: ['Dog']
  },
  {
    symbols: ['📦', 'B', '=', 'F'],
    words: ['Fox']
  },
  {
    symbols: ['G', '+', '❤️'],
    words: ['Glove']
  },
  {
    symbols: ['🍏', '-', '🐒', '+', '🐜'],
    words: ['Plant']
  },
  {
    symbols: ['🐝', '🍁'],
    words: ['Belief']
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
  },
  {
    symbols: ['🍏', '+', '🥧'],
    words: ['Applepie']
  },
  {
    symbols: ['🍯', '+', '🌗'],
    words: ['Honeymoon']
  },
  {
    symbols: ['🕷', '+', '🧔🏻'],
    words: ['Spiderman']
  },
  {
    symbols: ['🐲', '+', '🍑'],
    words: ['Dragonfruit']
  },
  {
    symbols: ['🔫-s', '+', 'and', '+', '🥀-s'],
    words: ['Gunsandroses']
  },
  {
    symbols: ['👦🏼', '+', '📔'],
    words: ['Facebook']
  },
  {
    symbols: ['T', '+', '🏃', '+', '🐱', '+', 'e'],
    words: ['Truncate']
  },
  {
    symbols: ['🐶', '+', '🐱', '+', 'cher'],
    words: ['Dogcatcher']
  },
  {
    symbols: ['🌍', '+', '⭐️'],
    words: ['Earthstar']
  },
  {
    symbols: ['👱', '+', '👨‍🎓', '+', '⛵️-s'],
    words: ['Headmasterships']
  },
  {
    symbols: ['🅰️', '+', '💣', '+', 'in', '+', '🅰️', '+', '🐂'],
    words: ['Abominable']
  },
  {
    symbols: ['👁', '+', '💖', '+', 'YOU'],
    words: ['I', 'Love', 'You']
  },
  {
    symbols: ['🐴', '+', '👞'],
    words: ['Horse', 'Shoe']
  },
  {
    symbols: ['🌍', '+', '☕'],
    words: ['World', 'Cup']
  },
  {
    symbols: ['🔁', '+', '🔙'],
    words: ['Loopback']
  },
  {
    symbols: ['🔙', '+', '🏁'],
    words: ['Backend']
  },
  {
    symbols: ['🌃', '+', '🐎'],
    words: ['Nightmare']
  },
  {
    symbols: ['🔙', '+', '🚪'],
    words: ['Backdoor']
  },
  {
    symbols: ['🍀', '+', '🌌‍', '+', '🚶'],
    words: ['Luke Skywalker']
  },
  {
    symbols: ['👋', '+', '🌍'],
    words: ['Hello', 'World']
  },
  {
    symbols: ['🌽', '+', 'u', '+', '👮', '+', 'ia'],
    words: ['Cornucopia']
  },
  {
    symbols: ['💨', '+', '🦉', '-', 'L'],
    words: ['window']
  },
  {
    symbols: ['❌', '+', '🔤'],
    words: ['crossword']
  },
  {
    symbols: ['S', '+', '🦀', '+', 'BLE'],
    words: ['scrabble']
  },
  {
    symbols: ['🦇', '+', '👨'],
    words: ['Batman']
  },
  {
    symbols: ['☀️', '+', '👓'],
    words: ['Sunglasses']
  },
  {
    symbols: ['🐄', '+', '👦'],
    words: ['Cowboy']
  },
  {
    symbols: ['🖊️', '+', '👬'],
    words: ['Penpals']
  },
  {
    symbols: ['⭐', '+', '💰'],
    words: ['Starbucks']
  },
  {
    symbols: ['📲', '+', '🅰️', '+', '🐀'],
    words: ['Apparat']
  },
  {
    symbols: ['☀️', '+', '🌼'],
    words: ['Sunflower']
  },
  {
    symbols: ['⛓️', '+', '🔁', '+', '🎬'],
    words: ['Chainreaction']
  },
  {
    symbols: ['🗑️', '+', '🏀'],
    words: ['Basketball']
  },
  {
    symbols: ['🌎', '+', '🐛'],
    words: ['Earthworm']
  },
  {
    symbols: ['🌬', '+', '🐟'],
    words: ['Blowfish']
  },
  {
    symbols: ['🔑', '+', '🕳'],
    words: ['Keyhole']
  },
  {
    symbols: ['💔', '+', '🕐'],
    words: ['Breaktime']
  },
  {
    symbols: ['🐊', '+', '😭'],
    words: ['Crocodile', 'tears']
  },
  {
    symbols: ['💋', '☠'],
    words: ['Kiss', 'of', 'death']
  },
  {
    symbols: ['👨', '💀', '⛵'],
    words: ['Pirate']
  },
  {
    symbols: ['🚪', '+', '🔔'],
    words: ['Doorbell']
  },
  {
    symbols: ['🌙', '+', '🎂'],
    words: ['Mooncake']
  },
  {
    symbols: ['🐎', '+', '👟'],
    words: ['Horseshoe']
  },
  {
    symbols: ['⌚', '+', 'men'],
    words: ['Watchman']
  },
  {
    symbols: ['🌞', '+', '⚘'],
    words: ['Sunflower']
  },
  {
    symbols: ['✋', '+', '📗'],
    words: ['Handbook']
  },
  {
    symbols: ['🛤️', '+', 'men'],
    words: ['Railwayman']
  },
  {
    symbols: ['🐱', '+', '🐠'],
    words: ['Catfish']
  },
  {
    symbols: ['👂', '+', '💍'],
    words: ['Earring']
  },
  {
    symbols: ['🚪', '+', '🔔'],
    words: ['Doorbell']
  },
  {
    symbols: ['10', '+', '🐜'],
    words: ['Tenant']
  },
  {
    symbols: ['⛵️', '+', 'ment'],
    words: ['Shipment']
  },
  {
    symbols: ['2', '+', '🐝', '+', 'or', '+', 'not', '+', '2', '+', '🐝'],
    words: ['To Be Or Not To Be']
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
