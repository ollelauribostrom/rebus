import { trimCharsStart } from 'lodash/fp';
import { createComponent } from '../mini';
import { connect } from '../store';

export function Hint(props) {
  function setShowHintButtonFunctionality(Component) {
    const showHintButton = document.querySelector('.rebus__hint');
    showHintButton.addEventListener('click', () => {
      Component.showHint = !Component.showHint;

      Component.update();
    });
  }
  return connect(
    createComponent({
      props,
      componentDidMount() {
        this.showHint = false;
        setShowHintButtonFunctionality(this);
      },
      componentDidUpdate() {
        this.showHint = false;
        setShowHintButtonFunctionality(this);
      },
      render({ current, rebuses, incorrectAnswerCount }) {
        // const INCORRECT_ANSWER_MAX_COUNT = 3;
        const HINT_SYMBOL = '💡';
        const rebus = rebuses[current];
        const showHint = this.showHint;
        // (incorrectAnswerCount >= INCORRECT_ANSWER_MAX_COUNT && !rebus.isAnswered && rebus.hint) ||

        return `${
          showHint
            ? `<span class="rebus__hint"> ${HINT_SYMBOL} ${rebus.hint} </span>`
            : `<span class="rebus__hint">${HINT_SYMBOL} Show Hint</span>`
        }`;
      }
    })
  );
}
