const rebuses = [
  {
    symbols: ['Re', '+', '🚌'],
    words: ['Rebus'],
    difficulty: 1,
    hint: 'You´re solving one right now'
  },
  {
    symbols: ['🏠', '+', 'pl', '+', '🐜', '+', 's'],
    words: ['Houseplants'],
    difficulty: 1,
    hint: `The second emoji is 'ant' not 'bug'`
  },
  {
    symbols: ['📖', '+', '🙋', '+', '📝'],
    words: ['Readme', 'file'],
    difficulty: 3,
    hint: 'The default markdown file of every GitHub repo'
  },
  {
    symbols: ['🚗', '+', 'a', '+', '🚐'],
    words: ['Caravan'],
    difficulty: 1,
    hint: 'The trailer you take when you go camping'
  },
  {
    symbols: ['⭐', '+', '🐠'],
    words: ['Starfish'],
    difficulty: 1,
    hint: 'Say the two emojis out loud'
  },
  {
    symbols: ['💡', '+', '🏠'],
    words: ['Lighthouse'],
    difficulty: 1,
    hint: 'A tower with a light to guide ships at sea'
  },
  {
    symbols: ['🌲', '+', '🍎'],
    words: ['Pineapple'],
    difficulty: 2,
    hint: 'Who lives in a ____ under the sea? SPONGEBOB SQUAREPANTS!'
  },
  {
    symbols: ['🥚', '+', '🌱'],
    words: ['Eggplant'],
    difficulty: 2,
    hint: '🍆'
  },
  {
    symbols: ['🔥', '+', '🦊'],
    words: ['Firefox'],
    difficulty: 1,
    hint: 'One of the most popular web browsers'
  },
  {
    symbols: ['💊', '+', 'ow'],
    words: ['Pillow'],
    difficulty: 1,
    hint: 'Soft item to rest your head when you sleep'
  },
  {
    symbols: ['🖊️', '+', 'd', '+', '🐜'],
    words: ['Pendant'],
    difficulty: 1,
    hint: `The second emoji is 'ant' not 'bug'`
  },
  {
    symbols: ['🌡️', '+', '🔑'],
    words: ['Hotkey'],
    difficulty: 1
  },
  {
    symbols: ['🌞', '+', '🛀'],
    words: ['Sunbath'],
    difficulty: 1,
    hint: 'A way for cold-blooded animals to keep warm'
  },
  {
    symbols: ['🚗', '🚙', '🚗'],
    words: ['Cars'],
    difficulty: 2,
    hint: `They're always on the road`
  },
  {
    symbols: ['👦🏻', '+', '⚡', '+', '👓', '=', '✨'],
    words: ['Harry', 'Potter'],
    difficulty: 2,
    hint: 'Hogwarts'
  },
  {
    symbols: ['H', '=', 'C', '👒'],
    words: ['Cat'],
    difficulty: 2,
    hint: `It's raining ____ and dogs`
  },
  {
    symbols: ['FR', '=', 'D', '🐸'],
    words: ['Dog'],
    difficulty: 2,
    hint: `Man's best friend`
  },
  {
    symbols: ['📦', 'B', '=', 'F'],
    words: ['Fox'],
    difficulty: 2,
    hint: `Say the emoji out loud and replace the 'B' with 'F'`
  },
  {
    symbols: ['G', '+', '❤️'],
    words: ['Glove'],
    difficulty: 2,
    hint: `It covers your hand when it's cold outside`
  },
  {
    symbols: ['🍏', '-', '🐒', '+', '🐜'],
    words: ['Plant'],
    difficulty: 3,
    hint: `It grows in your garden`
  },
  {
    symbols: ['🐝', '🍁'],
    words: ['Belief'],
    difficulty: 2,
    hint: `Hmm, there's a bee and a leaf. Say both out loud`
  },
  {
    symbols: ['🐱', '+', 'as', '+', '🏆', 'y̶', '+', 'e'],
    words: ['Catastrophe'],
    difficulty: 3,
    hint: 'A really really bad occurence'
  },
  {
    symbols: ['🍑', '🍑', '+', 'i', 'n', 'a', 't', 'e'],
    words: ['Assassinate'],
    difficulty: 3,
    hint: `What's another word for your butt? That's what the emojis mean`
  },
  {
    symbols: ['🍌', '+', '🍞'],
    words: ['Bananabread'],
    difficulty: 1,
    hint: `A monkey's favourite bread`
  },
  {
    symbols: ['🔑', '🐗', '+', 'd'],
    words: ['Keyboard'],
    difficulty: 1,
    hint: `You're typing with one`
  },
  {
    symbols: ['💵', '+', 'ew'],
    words: ['cashew'],
    difficulty: 1,
    hint: 'A type of nut'
  },
  {
    symbols: ['🤘🏻', '+', '⭐️'],
    words: ['rockstar'],
    difficulty: 1,
    hint: 'Mick Jagger is a what?'
  },
  {
    symbols: ['Tu', '+', '👄'],
    words: ['Tulip'],
    difficulty: 1,
    hint: 'This popular flower blooms in Spring'
  },
  {
    symbols: ['🔥', '+', '🐶'],
    words: ['Hotdog'],
    difficulty: 1,
    hint: 'A close relative of burgers'
  },
  {
    symbols: ['🌙', '+', '☀'],
    words: ['Moonshine'],
    difficulty: 4,
    hint: `Illegal alcohol`
  },
  {
    symbols: ['💻', '+', '🌊'],
    words: ['Digital', 'Ocean'],
    difficulty: 'intermdiate',
    hint: 'Similar to AWS and Microsoft Azure'
  },
  {
    symbols: ['🔥', '+', '🌬️', '+', '🎈'],
    words: ['Hot', 'Air', 'Balloon'],
    difficulty: 2,
    hint: `Explore the skys with this`
  },
  {
    symbols: ['💵', '+', '⚽'],
    words: ['Moneyball'],
    difficulty: 1,
    hint: `A great baseball movie`
  },
  {
    symbols: ['🐂', '+', '👀'],
    words: ['Bullseye'],
    difficulty: 2,
    hint: 'The center/smallest part of a target'
  },
  {
    symbols: ['🦇', '+', 'tery'],
    words: ['Battery'],
    difficulty: 2,
    hint: 'All your devices contain one'
  },
  {
    symbols: ['🔒', '+', 'smith'],
    words: ['Locksmith'],
    difficulty: 1,
    hint: 'This person lets you into your home when you lose your keys'
  },
  {
    symbols: ['👞', '+', 'horn'],
    words: ['Shoehorn'],
    difficulty: 1,
    hint: `Helps you put your shoe on`
  },
  {
    symbols: ['🖊', '+', 't', '+', '🏠'],
    words: ['Penthouse'],
    difficulty: 1,
    hint: `The highest room in a hotel`
  },
  {
    symbols: ['🐱', '+', 'e', '+', '💍'],
    words: ['Catering'],
    difficulty: 1,
    hint: 'Spell out the emojis then pronounce the word'
  },
  {
    symbols: ['2', '+', 'Na️', '+', '🐟'],
    words: ['tunafish'],
    difficulty: 3,
    hint: 'A key ingredient in tuna salad'
  },
  {
    symbols: ['🔥', '+', 'man'],
    words: ['Fireman'],
    difficulty: 1,
    hint: 'Helps put out large fires'
  },
  {
    symbols: ['💡', '+', 'er'],
    words: ['Lighter'],
    difficulty: 2,
    hint: 'Used to ignite cigarettes'
  },
  {
    symbols: ['🌙', '+', '💡'],
    words: ['Moonlight'],
    difficulty: 2,
    hint: `Lights up the night`
  },
  {
    symbols: ['f', '+', '🌬️', '+', 'y'],
    words: ['Fairy'],
    difficulty: 2,
    hint: 'The tooth ____ changes lost teeth to money'
  },
  {
    symbols: ['🔨', '+', '⏰'],
    words: ['Hammer', 'time'],
    difficulty: 2,
    hint: `MC Hammer's popular one-liner`
  },
  {
    symbols: ['👻', '+', '🚂'],
    words: ['Ghost', 'Train'],
    difficulty: 2,
    hint: `A haunted train`
  },
  {
    symbols: ['🍦', '+', '🍦', '+', '👶'],
    words: ['Ice', 'Ice', 'Baby'],
    difficulty: 2,
    hint: `A great hit by Vanilla Ice`
  },
  {
    symbols: ['🚗', '+', 'D', '+', '👹', '+', '🐏'],
    words: ['cardiogram'],
    difficulty: 4,
    hint: `Graph showing your heart's activity over a period of time`
  },
  {
    symbols: ['🌎', '+', 'wide', '+', '🕸️'],
    words: ['world', 'wide', 'web'],
    difficulty: 2,
    hint: `What does the 'www' in websites stand for?`
  },
  {
    symbols: ['🐀', '+', 'AT', '+', '2️', '+', 'E'],
    words: ['ratatouille'],
    difficulty: 3,
    hint: 'A rat chef'
  },
  {
    symbols: ['📖', '+', '🔑', '+', 'ping'],
    words: ['bookkeeping'],
    difficulty: 2,
    hint: 'Maintaining financial records of a business'
  },
  {
    symbols: ['sc', '+', '🦍', '+', '🐐'],
    words: ['scapegoat'],
    difficulty: 2,
    hint: 'Just say it out loud'
  },
  {
    symbols: ['🐜', '+', '⛵️', '+', 'tica'],
    words: ['antarctica'],
    difficulty: 2,
    hint: 'The southernmost continent on the planet'
  },
  {
    symbols: ['🌧', '+', '🏹'],
    words: ['rainbow'],
    difficulty: 1,
    hint: 'You see this after it rains'
  },
  {
    symbols: ['❄️', '+', '⚾️'],
    words: ['snowball'],
    difficulty: 2,
    hint: `Throw them at your friends in winter`
  },
  {
    symbols: ['❄️', '+', 'man'],
    words: ['snowman'],
    difficulty: 2,
    hint: 'You make this when its snowing'
  },
  {
    symbols: ['🐏', '📃'],
    words: ['rampage'],
    difficulty: 3,
    hint: `The Hulk likes to go on a ____`
  },
  {
    symbols: ['🐈', '+', '🥊'],
    words: ['cat', 'fight'],
    difficulty: 2,
    hint: 'AKA girl fight'
  },
  {
    symbols: ['👣', '+', '📝'],
    words: ['footnote'],
    difficulty: 2,
    hint: 'Placed at the bottom of a page to describe something referenced in the page'
  },
  {
    symbols: ['🐝', '+', 'r'],
    words: ['Beer'],
    difficulty: 1,
    hint: '🍺'
  },
  {
    symbols: ['🎉', '-', 'Y', '+', '⏰', '+', 'Job'],
    words: ['part', 'time', 'job'],
    difficulty: 2,
    hint: `If 🎉 means 'party', remove the 'y'`
  },
  {
    symbols: ['🌲', '+', '🏠'],
    words: ['treehouse'],
    difficulty: 1,
    hint: 'A house built in a tree'
  },
  {
    symbols: ['✔', '+', 'list'],
    words: ['checklist'],
    difficulty: 2,
    hint: 'What you might use to keep track of your tasks for the day'
  },
  {
    symbols: ['💧', '+', '📦'],
    words: ['Dropbox'],
    difficulty: 2,
    hint: 'A popular cloud storage company; say the emojis out loud'
  },
  {
    symbols: ['💡', '+', '⚔️'],
    words: ['Lightsaber'],
    difficulty: 3,
    hint: 'The Star Wars weapon for hand-to-hand combat'
  },
  {
    symbols: ['☕️'],
    words: ['Java'],
    difficulty: 3,
    hint: 'A highly popular programming language owned by Oracle'
  },
  {
    symbols: ['⎈'],
    words: ['Helm'],
    difficulty: 4,
    hint: 'Where you steer the boat'
  },
  {
    symbols: ['🌍', '+', 'form'],
    words: ['Terraform'],
    difficulty: 4,
    hint: `A code software HashiCorp`
  },
  {
    symbols: ['Uni', '+', '🌽'],
    words: ['unicorn'],
    difficulty: 1,
    hint: 'A billion-dollar startup company'
  },
  {
    symbols: ['🆘', '+', 'desk'],
    words: ['helpdesk'],
    difficulty: 3,
    hint: `Where you go to find help`
  },
  {
    symbols: ['🐱', '+', 'er', '+', '🗼'],
    words: ['caterpillar'],
    difficulty: 3,
    hint: 'It chews on leaves and then grows into something pretty.'
  },
  {
    symbols: ['🧢', '+', 'tain'],
    words: ['captain'],
    difficulty: 1,
    hint: '_____ America 💪'
  },
  {
    symbols: ['🦊', '+', 'hole'],
    words: ['foxhole'],
    difficulty: 1,
    hint: `A multiplayer strategy action game`
  },
  {
    symbols: ['🐦', '+', 's-', '+', '👁️'],
    words: ["bird's-eye"],
    difficulty: 2,
    hint: `When you observe from above`
  },
  {
    symbols: ['🐴', '+', '🔙'],
    words: ['horseback'],
    difficulty: 2,
    hint: `A cowboy's primary form of travel`
  },
  {
    symbols: ['🎼', '+', '🍴'],
    words: ['pitchfork'],
    difficulty: 5,
    hint: `Angry mobs are frequently seen with this`
  },
  {
    symbols: ['🌊', '+', '🐴'],
    words: ['seahorse'],
    difficulty: 2,
    hint: `One of Nemo's friends was a _______`
  },
  {
    symbols: ['🔙', '+', '💀'],
    words: ['backbone'],
    difficulty: 4,
    hint: 'Another name for your spine'
  },
  {
    symbols: ['💥', '+', '🌽'],
    words: ['popcorn'],
    difficulty: 3,
    hint: 'You watch movies with ___ and a drink'
  },
  {
    symbols: ['🔥', '+', '🏠'],
    words: ['firehouse'],
    difficulty: 1,
    hint: `A very hot house`
  },
  {
    symbols: ['🚗', '+', 'go'],
    words: ['cargo'],
    difficulty: 1,
    hint: 'Items carried by ships and planes'
  },
  {
    symbols: ['sm', '+', '🎨'],
    words: ['smart'],
    difficulty: 1,
    hint: `A synonym for 'intelligent'`
  },
  {
    symbols: ['😢', '+', '👶'],
    words: ['crybaby'],
    difficulty: 2,
    hint: 'Someone who complains a lot'
  },
  {
    symbols: ['📻', '+', '🙂'],
    words: ['radiohead'],
    difficulty: 2,
    hint: `An old English rock band`
  },
  {
    symbols: ['🗃', '+', 'elder', '+', '🐜'],
    words: ['Box', 'Elder', 'Bug'],
    difficulty: 4,
    hint: `An annoying species of true bug`
  },
  {
    symbols: ['L', '+', '🏹'],
    words: ['Elbow'],
    difficulty: 2,
    hint: 'The joint in your arm below your shoulder'
  },
  {
    symbols: ['📅', '+', 'et', '+', '🌍'],
    words: ['Planet', 'Earth'],
    difficulty: 2,
    hint: `Where we all live`
  },
  {
    symbols: ['🔨', '+', 'head', '+', '🦈'],
    words: ['hammerhead', 'shark'],
    difficulty: 2,
    hint: 'A type of shark'
  },
  {
    symbols: ['👩‍', '+', '💍'],
    words: ['red', 'herring'],
    difficulty: 5,
    hint: `A tasty seafood meal`
  },
  {
    symbols: ['Black', '+', '🎩'],
    words: ['Blackhat'],
    difficulty: 1,
    hint: 'A type of hacker'
  },
  {
    symbols: ['👁', '+', '💧'],
    words: ['Eyedrop'],
    difficulty: 2,
    hint: 'Used to treat irritated/inflammed eyes'
  },
  {
    symbols: ['🧠', '+', '🌪', '+', 'ing'],
    words: ['Brainstorming'],
    difficulty: 2,
    hint: 'Thinking about ideas'
  },
  {
    symbols: ['👞', '+', '📦'],
    words: ['Shoebox'],
    difficulty: 1,
    hint: 'A box you get shoes in'
  },
  {
    symbols: ['💵', '+', '🛍️'],
    words: ['Money', 'Bag'],
    difficulty: 2,
    hint: `Every robbers desire`
  },
  {
    symbols: ['💥', '+', 'py'],
    words: ['Poppy'],
    difficulty: 2,
    hint: `They make opium from this`
  },
  {
    symbols: ['🍏', '+', '🥧'],
    words: ['Applepie'],
    difficulty: 1,
    hint: `It's as American as ______`
  },
  {
    symbols: ['🍯', '+', '🌗'],
    words: ['Honeymoon'],
    difficulty: 1,
    hint: 'Comes right after a wedding'
  },
  {
    symbols: ['🕷', '+', '🧔🏻'],
    words: ['Spiderman'],
    difficulty: 1,
    hint: `Uncle Ben's superhero nephew`
  },
  {
    symbols: ['🐲', '+', '🍑'],
    words: ['Dragonfruit'],
    difficulty: 1,
    hint: `A mythical fruit made reality`
  },
  {
    symbols: ['🔫-s', '+', 'and', '+', '🥀-s'],
    words: ['Gunsandroses'],
    difficulty: 2,
    hint: 'A popular rock band'
  },
  {
    symbols: ['👦🏼', '+', '📔'],
    words: ['Facebook'],
    difficulty: 2,
    hint: `Mark Zuckerberg's company`
  },
  {
    symbols: ['T', '+', '🏃', '+', '🐱', '+', 'e'],
    words: ['Truncate'],
    difficulty: 3,
    hint: 'To make something shorter by cutting off the end'
  },
  {
    symbols: ['🐶', '+', '🐱', '+', 'cher'],
    words: ['Dogcatcher'],
    difficulty: 2,
    hint: `In case your dog runs away`
  },
  {
    symbols: ['🌍', '+', '⭐️'],
    words: ['Earthstar'],
    difficulty: 2,
    hint: `A star shaped fungi`
  },
  {
    symbols: ['👱', '+', '👨‍🎓', '+', '⛵️-s'],
    words: ['Headmasterships'],
    difficulty: 2,
    hint: `The role of the headmaster`
  },
  {
    symbols: ['🅰️', '+', '💣', '+', 'in', '+', '🅰️', '+', '🐂'],
    words: ['Abominable'],
    difficulty: 5,
    hint: 'The ___ Snowman'
  },
  {
    symbols: ['👁', '+', '💖', '+', 'YOU'],
    words: ['I', 'Love', 'You'],
    difficulty: 3,
    hint: '3 words, 8 letters'
  },
  {
    symbols: ['🐴', '+', '👞'],
    words: ['Horse', 'Shoe'],
    difficulty: 1,
    hint: 'Read the emojis out loud'
  },
  {
    symbols: ['🌍', '+', '☕'],
    words: ['World', 'Cup'],
    difficulty: 2,
    hint: 'A football/soccer tournament played every 4 years and organized by FIFA'
  },
  {
    symbols: ['🔁', '+', '🔙'],
    words: ['Loopback'],
    difficulty: 3,
    hint: `Another word for rewind`
  },
  {
    symbols: ['🔙', '+', '🏁'],
    words: ['Backend'],
    difficulty: 3,
    hint: `The opposite of frontend`
  },
  {
    symbols: ['🌃', '+', '🐎'],
    words: ['Nightmare'],
    difficulty: 5,
    hint: 'A bad dream'
  },
  {
    symbols: ['🔙', '+', '🚪'],
    words: ['Backdoor'],
    difficulty: 2,
    hint: `When the front door doesn't work`
  },
  {
    symbols: ['🍀', '+', '🌌‍', '+', '🚶'],
    words: ['Luke Skywalker'],
    difficulty: 4,
    hint: 'Star Wars: the other Skywalker (not Anakin)'
  },
  {
    symbols: ['👋', '+', '🌍'],
    words: ['Hello', 'World'],
    difficulty: 4,
    hint: 'The popular output of many introductory computer programming tutorials'
  },
  {
    symbols: ['🌽', '+', 'u', '+', '👮', '+', 'ia'],
    words: ['Cornucopia'],
    difficulty: 3,
    hint: 'The horn of plenty'
  },
  {
    symbols: ['💨', '+', '🦉', '-', 'L'],
    words: ['window'],
    difficulty: 2,
    hint: `The competitor of Apple, without the 's' at the end`
  },
  {
    symbols: ['❌', '+', '🔤'],
    words: ['crossword'],
    difficulty: 4,
    hint: 'A type of puzzle'
  },
  {
    symbols: ['S', '+', '🦀', '+', 'BLE'],
    words: ['scrabble'],
    difficulty: 2,
    hint: 'Words With Friends is based on this game'
  },
  {
    symbols: ['🦇', '+', '👨'],
    words: ['Batman'],
    difficulty: 1,
    hint: 'Bruce Wayne'
  },
  {
    symbols: ['☀️', '+', '👓'],
    words: ['Sunglasses'],
    difficulty: 1,
    hint: 'Prevents you from squinting all day at the beach'
  },
  {
    symbols: ['🐄', '+', '👦'],
    words: ['Cowboy'],
    difficulty: 1,
    hint: 'Heroes of the wild west'
  },
  {
    symbols: ['🖊️', '+', '👬'],
    words: ['Penpals'],
    difficulty: 3,
    hint: 'Friends who write letters to themselves'
  },
  {
    symbols: ['⭐', '+', '💰'],
    words: ['Starbucks'],
    difficulty: 3,
    hint: 'A popular American coffee company based in Seattle, Washington'
  },
  {
    symbols: ['📲', '+', '🅰️', '+', '🐀'],
    words: ['Apparat'],
    difficulty: 3,
    hint: `A german electronic musician`
  },
  {
    symbols: ['☀️', '+', '🌼'],
    words: ['Sunflower'],
    difficulty: 2,
    hint: `A plant that always faces the sun`
  },
  {
    symbols: ['⛓️', '+', '🔁', '+', '🎬'],
    words: ['Chainreaction'],
    difficulty: 5,
    hint: 'A series of events triggering each other'
  },
  {
    symbols: ['🗑️', '+', '🏀'],
    words: ['Basketball'],
    difficulty: 1,
    hint: `Michael Jordan's primary sport`
  },
  {
    symbols: ['🌎', '+', '🐛'],
    words: ['Earthworm'],
    difficulty: 2,
    hint: `It's not a moonworm`
  },
  {
    symbols: ['🌬', '+', '🐟'],
    words: ['Blowfish'],
    difficulty: 3,
    hint: `A fish that swells up`
  },
  {
    symbols: ['🔑', '+', '🕳'],
    words: ['Keyhole'],
    difficulty: 2,
    hint: 'Your house key goes into the ______'
  },
  {
    symbols: ['💔', '+', '🕐'],
    words: ['Breaktime'],
    difficulty: 4,
    hint: `Everyone's favourite part of the day`
  },
  {
    symbols: ['🐊', '+', '😭'],
    words: ['Crocodile', 'tears'],
    difficulty: 2,
    hint: `Fake tears`
  },
  {
    symbols: ['💋', '☠'],
    words: ['Kiss', 'of', 'death'],
    difficulty: 4,
    hint: `One kiss you don't want to receive`
  },
  {
    symbols: ['👨', '💀', '⛵'],
    words: ['Pirate'],
    difficulty: 2,
    hint: 'Criminals who ransacked ships in the 1700s-1900s'
  },
  {
    symbols: ['🚪', '+', '🔔'],
    words: ['Doorbell'],
    difficulty: 1,
    hint: `Used to alert the occupant's of a house that somebody is at their door`
  },
  {
    symbols: ['🌙', '+', '🎂'],
    words: ['Mooncake'],
    difficulty: 1,
    hint: `A lunar Chinese snack`
  },
  {
    symbols: ['🐎', '+', '👟'],
    words: ['Horseshoe'],
    difficulty: 1,
    hint: `Protect's a horse's hooves`
  },
  {
    symbols: ['⌚', '+', '👨'],
    words: ['Watchman'],
    difficulty: 1,
    hint: 'Who watches the ______?'
  },
  {
    symbols: ['✋', '+', '📗'],
    words: ['Handbook'],
    difficulty: 1,
    hint: 'An instructional manual'
  },
  {
    symbols: ['🛤️', '+', 'men'],
    words: ['Railwayman'],
    difficulty: 3,
    hint: `Works in a railway yard`
  },
  {
    symbols: ['🐱', '+', '🐠'],
    words: ['Catfish'],
    difficulty: 1,
    hint: 'A person who fakes his/her identity online'
  },
  {
    symbols: ['👂', '+', '💍'],
    words: ['Earring'],
    difficulty: 1,
    hint: 'Say the emojis out loud'
  },
  {
    symbols: ['10', '+', '🐜'],
    words: ['Tenant'],
    difficulty: 2,
    hint: 'A person renting out an apartment'
  },
  {
    symbols: ['⛵️', '+', 'ment'],
    words: ['Shipment'],
    difficulty: 1,
    hint: `A package being delivered`
  },
  {
    symbols: ['2', '+', '🐝', '+', 'or', '+', 'not', '+', '2', '+', '🐝'],
    words: ['To Be Or Not To Be'],
    difficulty: 3,
    hint: `A famous quote from Hamlet`
  },
  {
    symbols: ['⬇', '➡', '+', '🤮'],
    words: ['downright disgusting'],
    difficulty: 5,
    hint: `Something extremely displeasing`
  },
  {
    symbols: ['🔥', '+', '🤼', '+', 'er'],
    words: ['firefighter'],
    difficulty: 3,
    hint: 'They show up when there is a fire'
  },
  {
    symbols: ['1', '+', 'ce', '+', 'n', '+', 'a', '+', '🔵', '+', '🌛'],
    words: ['Once', 'in', 'a', 'Blue Moon'],
    difficulty: 4,
    hint: 'Phrase used when something only happens once in a while'
  },
  {
    symbols: ['🐱', '+', '🌲'],
    words: ['catalog'],
    difficulty: 4,
    hint: `The Sear's ________`
  },
  {
    symbols: ['💋', '+', 'able'],
    words: ['kissable'],
    difficulty: 1,
    hint: `cute animals are very _____`
  },
  {
    symbols: ['😄', '+', '🎂🎁'],
    words: ['Happy', 'Birthday'],
    difficulty: 4,
    hint: '____ to you!'
  },
  {
    symbols: ['🔥', '+', '⚽'],
    words: ['Fireball'],
    difficulty: 1,
    hint: 'The sun is a big ________'
  },
  {
    symbols: ['💎', '+', '⃝'],
    words: ['Diamond', 'ring'],
    difficulty: 3,
    hint: ['Things you exchange in weddings.']
  },
  {
    symbols: ['Black', '+', '🕳'],
    words: ['Black', 'hole'],
    difficulty: 1,
    hint: ['Final form of a star.']
  },
  {
    symbols: ['🐼', '-', 'DA', '+', '🍰'],
    words: ['Pancake'],
    difficulty: 2,
    hint: 'A delicious breakfast'
  },
  {
    symbols: ['✝', '+', '🏹'],
    words: ['Crossbow'],
    difficulty: 2,
    hint: 'What an unskilled archer would use'
  },
  {
    symbols: ['D', '+', '💡'],
    words: ['delight'],
    difficulty: 4,
    hint: 'To please someone'
  },
  {
    symbols: ['🌲', '+', 'T'],
    words: ['treaty'],
    difficulty: 4,
    hint: 'an agreement between countries'
  },
  {
    symbols: ['👹', '+', '🚚'],
    words: ['monster', 'truck'],
    difficulty: 2,
    hint: 'they have gigantic wheels!'
  },
  {
    symbols: ['🔑', '+', '⛓️'],
    words: ['keychain'],
    difficulty: 2,
    hint: 'Something that holds on to one or more keys'
  },
  {
    symbols: ['💁', '+', '🖌'],
    words: ['hairbrush'],
    difficulty: 4,
    hint: 'Tidy your hair with'
  },
  {
    symbols: ['💻'],
    words: ['laptop'],
    difficulty: 1,
    hint: 'A portable computer'
  },
  {
    symbols: ['⚠', '⬇', '🔋'],
    words: ['low', 'battery'],
    difficulty: 2,
    hint: 'You need to charge your device soon'
  },
  {
    symbols: ['📰'],
    words: ['newspaper'],
    difficulty: 1,
    hint: 'Reading today&#39s ______'
  },
  {
    symbols: ['✉'],
    words: ['mail'],
    difficulty: 1,
    hint: '"You&#39ve got ____"'
  },
  {
    symbols: ['🌮', '+', '🥗'],
    words: ['taco', 'salad'],
    difficulty: 2,
    hint: 'One food made up of the other food'
  },
  {
    symbols: ['🍇', '-', '(🐒🐒🐒)', '+', '🐜'],
    words: ['grant'],
    difficulty: 4,
    hint: 'Break it up. Do the subtraction then add the addition to the end'
  },
  {
    symbols: ['👁', '+', '📱'],
    words: ['iPhone'],
    difficulty: 3,
    hint: 'Steve Jobs'
  },
  {
    symbols: ['→', '🦁', '👑'],
    words: ['the', 'lion', 'king'],
    difficulty: 2,
    hint: `Classic 90's coming of age film about a lion who must re-take his father's throne and become king of the jungle`
  },
  {
    symbols: ['🚐', '+', 'Gogh'],
    words: ['van', 'Gogh'],
    difficulty: 2,
    hint: 'Famous Dutch painter.'
  },
  {
    symbols: ['🖖'],
    words: ['Star', 'Trek'],
    difficulty: 3,
    hint: 'Famous salute from what TV show?'
  },
  {
    symbols: ['🎁', '+', '🃏'],
    words: ['gift', 'card'],
    difficulty: 2,
    hint: 'You get one on your birthday'
  },
  {
    symbols: ['🏹', '+', '👔'],
    words: ['bow', 'tie'],
    difficulty: 2,
    hint: ['An accessory that is often worn with a suit']
  },
  {
    symbols: ['🔎', '+', '🎉'],
    words: ['search', 'party'],
    difficulty: 2,
    hint: ["Let's find something together"]
  },
  {
    symbols: ['🐛', '+', '🕳'],
    words: ['worm', 'hole'],
    difficulty: 2,
    hint: 'A passage through space creating a shortcut through time and space'
  },
  {
    symbols: ['🌎', 'OF', '⚔', 'CRAFT'],
    words: ['World', 'of', 'Warcraft'],
    difficulty: 3,
    hint: ['Famous Blizzard online game']
  },
  {
    symbols: ['🍯', '+', '🐝'],
    words: ['honeybee'],
    difficulty: 1,
    hint: ['An insect that makes a sweet treat.']
  },
  {
    symbols: ['🧶'],
    words: ['yarn'],
    hint: ['A package manager similar to NPM']
  },
  {
    symbols: ['☕️', '+', '📄'],
    words: ['java', 'script'],
    hint: ['It makes the website interactive']
  },
  {
    symbols: ['🦀', '+', '🎂'],
    words: ['crab', 'cake'],
    hint: 'A delicious appetizer'
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
