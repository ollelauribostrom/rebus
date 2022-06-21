import { createComponent } from '../mini';
import { connect } from '../store';

export function Hint(props) {
  return connect(
    createComponent({
      props,
      render({ current, rebuses }) {
        const HINT_SYMBOL = '💡';
        const rebus = rebuses[current];
        if (rebus.isShowHint)
          return `<span class="rebus__hint">${HINT_SYMBOL} ${rebus.hint}</span>`;
        return '<span></span>';
      }
    })
  );
}
