const rebuses = [
  {
    symbols: ['⭐️', '+', 'do'],
    words: ['Estrelado'],
    hint: `Hoje o céu está ____`
  },
  {
    symbols: ['👦🏻', '+', '⚡', '+', '👓', '=', '✨'],
    words: ['Harry', 'Potter'],
    hint: 'Um dos bruxos mais famosos dos cinemas.'
  },
  {
    symbols: ['🐴', '-', '🌊', '+', 'inho'],
    words: ['Cavalo', 'Marinho'],
    hint: `Mora nas profundezas do oceano.`
  },
  {
    symbols: ['🐶', '-', '🔥'],
    words: ['Cachorro', 'Quente'],
    hint: 'Um lanche saboroso e muito popular.'
  },
  {
    symbols: ['🤴🏿', '🟡🟢', '⚽', '1️⃣0️⃣'],
    words: ['Pele'],
    hint: 'O Rei do Futebol.'
  },
  {
    symbols: ['🏠', '🐷', '🌽', '👵🏼', '🐤'],
    words: ['Sitio'],
    hint: 'Primeiro nome da obra de Monteiro Lobtato que tinha como personagem Narizinho.'
  },
  {
    symbols: ['🔑', '🔑', '👦🏻', '🔑', '🔑'],
    words: ['Chaves'],
    hint: 'Nome do garoto que mora no barril e tem um seriado com o seu nome.'
  },
  {
    symbols: ['😘', '-', '🌼'],
    words: ['Beija', 'Flor'],
    hint: 'Ave também conhecida no Brasil por colibri.'
  },
  {
    symbols: ['💂‍♂️', '-', '🌧'],
    words: ['Guarda', 'Chuva'],
    hint: `Você irá se molhar caso se esquecer de levar.`
  },
  {
    symbols: ['🚪', '-', '💼💼💼'],
    words: ['Porta', 'Malas'],
    hint: 'Compartimento que cabe tudo o que você irá precisar na viagem.'
  },
  {
    symbols: ['🥧', '+', 'na', '+', '👨‍🦲'],
    words: ['Torta', 'Na', 'Cara'],
    hint: `Se errar a perguntar vai levar uma ____ na ____`
  },
  {
    symbols: ['N', '+', '❤️️🥰', '+', 'ados'],
    words: ['Namorados'],
    hint: `Um ótimo presente de Dia dos ______, é uma caixa de chocolates.`
  },
  {
    symbols: ['🏃‍♂️', '⚡⚡⚡'],
    words: ['Flash'],
    hint: 'Um super-herói muito veloz! Ele corre como um ______.'
  },
  {
    symbols: ['​🐔🐔​​​', '💨', '🏃‍♂️'],
    words: ['Fuga', 'das', 'Galinhas'],
    hint: 'Uma animação famosa no Brasil, lançada em 2000. Boa parte se passa num galinheiro.'
  },
  {
    symbols: ['🐷', '🐷', '🐷', '🏠'],
    words: ['Os', '3', 'Porquinhos'],
    hint: 'Fábula conehcida por ter como vilão, um lobo.'
  },
  {
    symbols: ['🌍', '🏆', '⚽'],
    words: ['Copa', 'do', 'Mundo'],
    hint: 'Campeonato mundial de futebol organizado pela FIFA a cada 4 anos.'
  },
  {
    symbols: ['​​👱​​', '​🔨', '​⚡​'],
    words: ['Thor'],
    hint: 'O Deus do Trovão ou um super-herói.'
  },
  {
    symbols: ['👋', '+', '🌍'],
    words: ['Ola', 'Mundo'],
    hint: 'O teste mais popular para a introdução de uma linguagem de programação.'
  },
  {
    symbols: ['🦇', '+', '👨'],
    words: ['Batman'],
    hint: 'Bruce Wayne'
  },
  {
    symbols: ['O', '+', '👑', '🦁'],
    words: ['O', 'Rei', 'Leão'],
    hint: `Clássico filme da Disney. Hakuna Matata!`
  },
  {
    symbols: ['🚐', '+', 'Gogh'],
    words: ['Van', 'Gogh'],
    hint: 'Famoso pintor holandês.'
  },
  {
    symbols: ['🥇', '🥈', '🥉', '🔥', '🌍'],
    words: ['Olimpiadas'],
    hint: 'Jogos que reunem competidores de todo o mundo a cada 4 anos.'
  },
  {
    symbols: ['👦🏻', '🕷', '🤟', '🕸'],
    words: ['Homem', 'Aranha'],
    hint: 'O super-herói que é o seu amigão da vizinhança!'
  },
  {
    symbols: ['​🏡', '​😱', '​🎄', '​👱​'],
    words: ['Esqueceram', 'de', 'Mim'],
    hint: 'Filme de comédia natalino de 1990. Kevin!!!'
  },
  {
    symbols: ['​​🚗', '​💨', '+', '​😡​​'],
    words: ['Velozes', 'e', 'Furiosos'],
    hint: 'Saga de filmes de ação e muita velocidade.'
  },
  {
    symbols: ['​​🦁', '🦓', '🦛', '🦒', '🎬'],
    words: ['Madagascar'],
    hint: 'Animação que possui o nome de uma ilha do continente africano.'
  }
];

export function isRebusAnswered(id) {
  const answeredRebusesBR = window.localStorage.getItem('answeredRebusesBR');
  return !!answeredRebusesBR && JSON.parse(answeredRebusesBR).includes(id);
}

export function markRebusAsAnswered(id) {
  const answeredRebusesBR = window.localStorage.getItem('answeredRebusesBR');
  if (!answeredRebusesBR) {
    window.localStorage.setItem('answeredRebusesBR', JSON.stringify([id]));
  } else {
    window.localStorage.setItem(
      'answeredRebusesBR',
      JSON.stringify([...JSON.parse(answeredRebusesBR), id])
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
