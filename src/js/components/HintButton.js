import { createComponent } from '../mini';

export function HintButton(props) {
  return createComponent({
    props,
    render() {
      const HINT_SYMBOL = '💡';
      return `
        <button class="hint-button">
          ${HINT_SYMBOL}
        </button>
      `;
    }
  });
}
