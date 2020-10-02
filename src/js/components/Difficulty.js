export function getDifficulty(rebus) {
  switch (rebus.difficulty) {
    case 1:
      return 'easy';
    case 2:
      return 'basic';
    case 3:
      return 'intermediate';
    case 4:
      return 'hard';
    case 5:
      return 'very hard';
    default:
      return '';
  }
}
