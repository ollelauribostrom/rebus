const rebuses = [
  {
    symbols: ['Re', '+', '🚌'],
    words: ['Rebus'],
    hint: 'You´re solving one right now'
  },
  {
    symbols: ['🏠', '+', 'pl', '+', '🐜', '+', 's'],
    words: ['Houseplants'],
    hint: `The second emoji is 'ant' not 'bug'`
  },
  {
    symbols: ['📖', '+', '🙋', '+', '📝'],
    words: ['Readme', 'file'],
    hint: 'The default markdown file of every GitHub repo'
  },
  {
    symbols: ['🚗', '+', 'a', '+', '🚐'],
    words: ['Caravan'],
    hint: 'The trailer you take when you go camping'
  },
  {
    symbols: ['⭐', '+', '🐠'],
    words: ['Starfish'],
    hint: 'Say the two emojis out loud'
  },
  {
    symbols: ['💡', '+', '🏠'],
    words: ['Lighthouse'],
    hint: 'A tower with a light to guide ships at sea'
  },
  {
    symbols: ['🌲', '+', '🍎'],
    words: ['Pineapple'],
    hint: 'Who lives in a ____ under the sea? SPONGEBOB SQUAREPANTS!'
  },
  {
    symbols: ['🥚', '+', '🌱'],
    words: ['Eggplant'],
    hint: '🍆'
  },
  {
    symbols: ['🔥', '+', '🦊'],
    words: ['Firefox'],
    hint: 'One of the most popular web browsers'
  },
  {
    symbols: ['💊', '+', 'ow'],
    words: ['Pillow'],
    hint: 'Soft item to rest your head when you sleep'
  },
  {
    symbols: ['🖊️', '+', 'd', '+', '🐜'],
    words: ['Pendant'],
    hint: `The second emoji is 'ant' not 'bug'`
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
    words: ['Cars'],
    hint: `They're always on the road`
  },
  {
    symbols: ['👦🏻', '+', '⚡', '+', '👓', '=', '✨'],
    words: ['Harry', 'Potter'],
    hint: 'Hogwarts'
  },
  {
    symbols: ['H', '=', 'C', '👒'],
    words: ['Cat'],
    hint: `It's raining ____ and dogs`
  },
  {
    symbols: ['FR', '=', 'D', '🐸'],
    words: ['Dog'],
    hint: `Man's best friend`
  },
  {
    symbols: ['📦', 'B', '=', 'F'],
    words: ['Fox'],
    hint: `Say the emoji out loud and replace the 'B' with 'F'`
  },
  {
    symbols: ['G', '+', '❤️'],
    words: ['Glove'],
    hint: `It covers your hand when it's cold outside`
  },
  {
    symbols: ['🍏', '-', '🐒', '+', '🐜'],
    words: ['Plant']
  },
  {
    symbols: ['🐝', '🍁'],
    words: ['Belief'],
    hint: `Hmm, there's a bee and a leaf. Say both out loud`
  },
  {
    symbols: ['🐱', '+', 'as', '+', '🏆', 'y̶', '+', 'e'],
    words: ['Catastrophe'],
    hint: 'A really really bad occurence'
  },
  {
    symbols: ['🍑', '🍑', '+', 'i', 'n', 'a', 't', 'e'],
    words: ['Assassinate'],
    hint: `What's another word for your butt? That's what the emojis mean`
  },
  {
    symbols: ['🍌', '+', '🍞'],
    words: ['Bananabread']
  },
  {
    symbols: ['🔑', '🐗', '+', 'd'],
    words: ['Keyboard'],
    hint: `You're typing with one`
  },
  {
    symbols: ['💵', '+', 'ew'],
    words: ['cashew'],
    hint: 'A type of nut'
  },
  {
    symbols: ['🤘🏻', '+', '⭐️'],
    words: ['rockstar'],
    hint: 'Mick Jagger is a what?'
  },
  {
    symbols: ['Tu', '+', '👄'],
    words: ['Tulip']
  },
  {
    symbols: ['🔥', '+', '🐶'],
    words: ['Hotdog'],
    hint: 'A close relative of burgers'
  },
  {
    symbols: ['🌙', '+', '☀'],
    words: ['Moonshine']
  },
  {
    symbols: ['💻', '+', '🌊'],
    words: ['Digital', 'Ocean'],
    hint: 'Similar to AWS and Microsoft Azure'
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
    words: ['Bullseye'],
    hint: 'The center/smallest part of a target'
  },
  {
    symbols: ['🦇', '+', 'tery'],
    words: ['Battery'],
    hint: 'All your devices contain one'
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
    words: ['Catering'],
    hint: 'Spell out the emojis then pronounce the word'
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
    words: ['Lighter'],
    hint: 'Used to ignite cigarettes'
  },
  {
    symbols: ['🌙', '+', '💡'],
    words: ['Moonlight']
  },
  {
    symbols: ['f', '+', '🌬️', '+', 'y'],
    words: ['Fairy'],
    hint: 'The tooth ____ changes lost teeth to money'
  },
  {
    symbols: ['🔨', '+', '⏰'],
    words: ['Hammer', 'time'],
    hint: `MC Hammer's popular one-liner`
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
    words: ['cardiogram'],
    hint: `Graph showing your heart's activity over a period of time`
  },
  {
    symbols: ['🌎', '+', 'wide', '+', '🕸️'],
    words: ['world', 'wide', 'web'],
    hint: `What does the 'www' in websites stand for?`
  },
  {
    symbols: ['🐀', '+', 'AT', '+', '2️', '+', 'E'],
    words: ['ratatouille'],
    hint: 'A rat chef'
  },
  {
    symbols: ['📖', '+', '🔑', '+', 'ping'],
    words: ['bookkeeping'],
    hint: 'Maintaining financial records of a business'
  },
  {
    symbols: ['sc', '+', '🦍', '+', '🐐'],
    words: ['scapegoat'],
    hint: 'Just say it out loud'
  },
  {
    symbols: ['🐜', '+', '⛵️', '+', 'tica'],
    words: ['antarctica'],
    hint: 'The southernmost continent on the planet'
  },
  {
    symbols: ['🌧', '+', '🏹'],
    words: ['rainbow'],
    hint: '🌈'
  },
  {
    symbols: ['❄️', '+', '⚾️'],
    words: ['snowball']
  },
  {
    symbols: ['❄️', '+', 'man'],
    words: ['snowman'],
    hint: '⛄'
  },
  {
    symbols: ['🐏', '📃'],
    words: ['rampage']
  },
  {
    symbols: ['✝️', '+', '🏹'],
    words: ['cross', 'bow'],
    hint: 'A sophisticated version of the bow and arrow'
  },
  {
    symbols: ['🐈', '+', '🥊'],
    words: ['cat', 'fight'],
    hint: 'AKA girl fight'
  },
  {
    symbols: ['👣', '+', '📝'],
    words: ['footnote'],
    hint: 'Placed at the bottom of a page to describe something referenced in the page'
  },
  {
    symbols: ['🐝', '+', 'r'],
    words: ['Beer'],
    hint: '🍺'
  },
  {
    symbols: ['🎉', '-', 'Y', '+', '⏰', '+', 'Job'],
    words: ['part', 'time', 'job'],
    hint: `If 🎉 means 'party', remove the 'y'`
  },
  {
    symbols: ['🌲', '+', '🏠'],
    words: ['treehouse'],
    hint: 'A house built in a tree'
  },
  {
    symbols: ['✔', '+', 'list'],
    words: ['checklist']
  },
  {
    symbols: ['💧', '+', '📦'],
    words: ['Dropbox'],
    hint: 'A popular cloud storage company; say the emojis out loud'
  },
  {
    symbols: ['💡', '+', '⚔️'],
    words: ['Lightsaber'],
    hint: 'The Star Wars weapon for hand-to-hand combat'
  },
  {
    symbols: ['☕️'],
    words: ['Java'],
    hint: 'A highly popular programming language owned by Oracle'
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
    words: ['unicorn'],
    hint: 'A billion-dollar startup company'
  },
  {
    symbols: ['🆘', '+', 'desk'],
    words: ['helpdesk']
  },
  {
    symbols: ['🐱', '+', 'er', '+', '🗼'],
    words: ['caterpillar'],
    hint: 'A tiny insect with many feet'
  },
  {
    symbols: ['🧢', '+', 'tain'],
    words: ['captain'],
    hint: '_____ America 💪'
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
    words: ['backbone'],
    hint: 'Another name for your spine'
  },
  {
    symbols: ['💥', '+', '🌽'],
    words: ['popcorn'],
    hint: 'You watch movies with ___ and a drink'
  },
  {
    symbols: ['🔥', '+', '🏠'],
    words: ['firehouse']
  },
  {
    symbols: ['🚗', '+', 'go'],
    words: ['cargo'],
    hint: 'Items carried by ships and planes'
  },
  {
    symbols: ['sm', '+', '🎨'],
    words: ['smart'],
    hint: `A synonym for 'intelligent'`
  },
  {
    symbols: ['😢', '+', '👶'],
    words: ['crybaby'],
    hint: 'Someone who complains a lot'
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
    words: ['Elbow'],
    hint: 'The joint in your arm below your shoulder'
  },
  {
    symbols: ['📅', '+', 'et', '+', '🌍'],
    words: ['Planet', 'Earth']
  },
  {
    symbols: ['🔨', '+', 'head', '+', '🦈'],
    words: ['hammerhead', 'shark'],
    hint: 'A type of shark'
  },
  {
    symbols: ['👩‍', '+', '💍'],
    words: ['red', 'herring']
  },
  {
    symbols: ['Black', '+', '🎩'],
    words: ['Blackhat'],
    hint: 'A type of hacker'
  },
  {
    symbols: ['👁', '+', '💧'],
    words: ['Eyedrop'],
    hint: 'Used to treat irritated/inflammed eyes'
  },
  {
    symbols: ['🧠', '+', '🌪', '+', 'ing'],
    words: ['Brainstorming'],
    hint: 'Thinking about ideas'
  },
  {
    symbols: ['👞', '+', '📦'],
    words: ['Shoebox'],
    hunt: 'A box you get shoes in'
  },
  {
    symbols: ['💵', '+', '🛍️'],
    words: ['Money', 'Bag']
  },
  {
    symbols: ['💥', '+', 'py'],
    words: ['Poppy'],
    hint: `From Game of Thrones: 'Milk of the ____'`
  },
  {
    symbols: ['🍏', '+', '🥧'],
    words: ['Applepie']
  },
  {
    symbols: ['🍯', '+', '🌗'],
    words: ['Honeymoon'],
    hint: 'Comes right after a wedding'
  },
  {
    symbols: ['🕷', '+', '🧔🏻'],
    words: ['Spiderman'],
    hint: `Uncle Ben's superhero nephew`
  },
  {
    symbols: ['🐲', '+', '🍑'],
    words: ['Dragonfruit']
  },
  {
    symbols: ['🔫-s', '+', 'and', '+', '🥀-s'],
    words: ['Gunsandroses'],
    hint: 'A popular rock band'
  },
  {
    symbols: ['👦🏼', '+', '📔'],
    words: ['Facebook'],
    hint: `Mark Zuckerberg's company`
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
    words: ['Abominable'],
    hint: 'The ___ Snowman'
  },
  {
    symbols: ['👁', '+', '💖', '+', 'YOU'],
    words: ['I', 'Love', 'You'],
    hint: '3 words, 8 letters'
  },
  {
    symbols: ['🐴', '+', '👞'],
    words: ['Horse', 'Shoe'],
    hint: 'Read the emojis out loud'
  },
  {
    symbols: ['🌍', '+', '☕'],
    words: ['World', 'Cup'],
    hint: 'A football/soccer tournament played every 4 years and organized by FIFA'
  },
  {
    symbols: ['🔁', '+', '🔙'],
    words: ['Loopback']
  },
  {
    symbols: ['🔙', '+', '🏁'],
    words: ['Backend'],
    hint: `The opposite of frontend`
  },
  {
    symbols: ['🌃', '+', '🐎'],
    words: ['Nightmare'],
    hint: 'A bad dream'
  },
  {
    symbols: ['🔙', '+', '🚪'],
    words: ['Backdoor']
  },
  {
    symbols: ['🍀', '+', '🌌‍', '+', '🚶'],
    words: ['Luke Skywalker'],
    hint: 'Star Wars: the other Skywalker (not Anakin)'
  },
  {
    symbols: ['👋', '+', '🌍'],
    words: ['Hello', 'World'],
    hint: 'The popular output of many introductory computer programming tutorials'
  },
  {
    symbols: ['🌽', '+', 'u', '+', '👮', '+', 'ia'],
    words: ['Cornucopia'],
    hint: 'The horn of plenty'
  },
  {
    symbols: ['💨', '+', '🦉', '-', 'L'],
    words: ['window'],
    hint: `The competitor of Apple, without the 's' at the end`
  },
  {
    symbols: ['❌', '+', '🔤'],
    words: ['crossword'],
    hint: 'A type of puzzle'
  },
  {
    symbols: ['S', '+', '🦀', '+', 'BLE'],
    words: ['scrabble'],
    hint: 'Words With Friends is based on this game'
  },
  {
    symbols: ['🦇', '+', '👨'],
    words: ['Batman'],
    hint: 'Bruce Wayne'
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
    words: ['Penpals'],
    hint: 'Friends who write letters to themselves'
  },
  {
    symbols: ['⭐', '+', '💰'],
    words: ['Starbucks'],
    hint: 'A popular American coffee company based in Seattle, Washington'
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
    words: ['Basketball'],
    hint: `Michael Jordan's primary sport`
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
    words: ['Pirate'],
    hint: 'Criminals who ransacked ships in the 1700s-1900s'
  },
  {
    symbols: ['🚪', '+', '🔔'],
    words: ['Doorbell'],
    hint: `Used to alert the occupant's of a house that somebody is at their door`
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
    symbols: ['✋', '+', '📗'],
    words: ['Handbook'],
    hint: 'An instructional manual'
  },
  {
    symbols: ['🛤️', '+', 'men'],
    words: ['Railwayman']
  },
  {
    symbols: ['🐱', '+', '🐠'],
    words: ['Catfish'],
    hint: 'A person who fakes his/her identity online'
  },
  {
    symbols: ['👂', '+', '💍'],
    words: ['Earring'],
    hint: 'Say the emojis out loud'
  },
  {
    symbols: ['10', '+', '🐜'],
    words: ['Tenant'],
    hint: 'A person renting out an apartment'
  },
  {
    symbols: ['⛵️', '+', 'ment'],
    words: ['Shipment']
  },
  {
    symbols: ['2', '+', '🐝', '+', 'or', '+', 'not', '+', '2', '+', '🐝'],
    words: ['To Be Or Not To Be']
  },
  {
    symbols: ['⬇', '➡', '+', '🤮'],
    words: ['downright disgusting']
  },
  {
    symbols: ['🔥', '+', '🤼', '+', 'er'],
    words: ['firefighter'],
    hint: 'Someone trained to combat fires and rescue people trapped by fires'
  },
  {
    symbols: ['1', '+', 'ce', '+', 'n', '+', 'a', '+', '🔵', '+', '🌛'],
    words: ['Once', 'in', 'a', 'Blue Moon'],
    hint: 'Phrase used when something only happens once in a while'
  },
  {
    symbols: ['🐱', '+', '🌲'],
    words: ['catalog']
  },
  {
    symbols: ['💋', '+', 'able'],
    words: ['kissable']
  },
  {
    symbols: ['😄', '+', '🎂🎁'],
    words: ['Happy', 'Birthday'],
    hint: '____ to you!'
  },
  {
    symbols: ['🔥', '+', '⚽'],
    words: ['Fireball'],
    hint: 'The sun is a big ________'
  },
  {
    symbols: ['💎', '+', '⃝'],
    words: ['Diamond', 'ring'],
    hint: ['Things you exchange in weddings.']
  },
  {
    symbols: ['Black', '+', '🕳'],
    words: ['Black', 'hole'],
    hint: ['Final form of a star.']
  },
  {
    symbols: ['🐼', '-', 'DA', '+', '🍰'],
    words: ['Pancake'],
    hint: 'A delicious breakfast'
  },
  {
    symbols: ['✝', '+', '🏹'],
    words: ['Crossbow']
  },
  {
    symbols: ['D', '+', '💡'],
    words: ['delight']
  },
  {
    symbols: ['🌲', '+', 'T'],
    words: ['treaty'],
    hint: 'an agreement between countries'
  },
  {
    symbols: ['👹', '+', '🚚'],
    words: ['monster', 'truck'],
    hint: 'they have gigantic wheels!'
  },
  {
    symbols: ['🔑', '+', '⛓️'],
    words: ['keychain'],
    hint: 'Something that holds on to one or more keys'
  },
  {
    symbols: ['💁', '+', '🖌'],
    words: ['hairbrush'],
    hint: 'Tidy your hair with'
  },
  {
    symbols: ['💻'],
    words: ['laptop'],
    hint: 'A portable computer'
  },
  {
    symbols: ['⚠', '⬇', '🔋'],
    words: ['low','battery'],
    hint: 'You need to charge your device soon'
  },
  {
    symbols: ['📰'],
    words: ['newspaper'],
    hint: 'Reading today&#39s ______'
  },
  {
    symbols: ['✉'],
    words: ['mail'],
    hint: '"You&#39ve got ____"'
  },
  {
    symbols: ['🌮', '+', '🥗'],
    words: ['taco', 'salad'],
    hint: 'One food made up of the other food'
  },
  {
    symbols: ['🍇', '-', '(🐒🐒🐒)', '+', '🐜'],
    words: ['grant'],
    hint: "Break it up. Do the subtraction then add the addition to the end"
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
