import { englishRebuses } from './englishRebuses';
import { frenchRebuses } from './frenchRebuses';

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
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  let chosenRebuses = [];

  switch (lang) {
    case 'en':
      window.localStorage.removeItem('answeredRebuses');
      chosenRebuses = englishRebuses;
      break;
    case 'fr':
      window.localStorage.removeItem('answeredRebuses');
      chosenRebuses = frenchRebuses;
      break;
    default:
      chosenRebuses = englishRebuses;
  }
  return chosenRebuses.map((rebus, index) => {
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
