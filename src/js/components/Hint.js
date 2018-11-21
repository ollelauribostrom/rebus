import { createComponent } from '../mini';
import { connect } from '../store';

export function Hint(props) {
  return connect(
    createComponent({
      props,
      render({ current, rebuses, incorrectAnswerCount }) {
        const INCORRECT_ANSWER_MAX_COUNT = 3;
        const HINT_SYMBOL = '💡';
        const rebus = rebuses[current];
        const showHint =
          incorrectAnswerCount >= INCORRECT_ANSWER_MAX_COUNT && !rebus.isAnswered && rebus.hint;
        return ` 
        ${
          showHint
            ? `<span class="rebus__hint">
                ${HINT_SYMBOL} ${rebus.hint}
              </span>`
            : '<span></span>'
        }
        `;
      }
    })
  );
}
