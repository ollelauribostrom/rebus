import { createComponent } from '../mini';

export function Char(props) {
  return createComponent({
    props,
    render({ current, rebuses, wordIndex, charIndex }) {
      const rebus = rebuses[current];
      const previousWords = rebus.words.slice(0, wordIndex).join('');
      const index = wordIndex > 0 ? previousWords.length + charIndex : charIndex;
      const value = rebus.input[index] || '';
      return `
        <input
          type="text"
          maxlength="1"
          class="word__char"
          placeholder=" "
          value="${value}"
        >`;
    }
  });
}
