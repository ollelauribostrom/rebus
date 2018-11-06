import { createComponent } from '../mini';
import { connect } from '../store';
import { Word } from './word';
import { INCORRECT_ANSWER_MAX_COUNT, HINT_SYMBOL } from '../mini/constants';

export function Rebus(props, ...children) {
  return connect(
    createComponent({
      props,
      children,
      componentDidMount() {
        this.$element.querySelector('input').focus();
      },
      componentDidUpdate() {
        this.$element.querySelector('input').focus();
      },
      render({ current, rebuses, animation, incorrectAnswerCount }) {
        const rebus = rebuses[current];
        const showHint =
          incorrectAnswerCount >= INCORRECT_ANSWER_MAX_COUNT && !rebus.isAnswered && rebus.hint;
        this.children = rebus.words.map((word, wordIndex) =>
          Word({ word, wordIndex, current, rebuses, charInput: props.charInput })
        );
        return `
          <div class="rebus ${rebus.isAnswered ? 'rebus--answered' : ''} animation--${
          !showHint ? animation : 'none'
        }">
            <div class="rebus__header">
              <span>${current + 1}/${rebuses.length}</span>
            </div>
            <span class="rebus__symbols">${rebus.symbols.join(' ')}</span>
            <div class="rebus__words">
              <children>
            </div>
            ${
              showHint
                ? `<span class="rebus__hint">
                ${HINT_SYMBOL} ${rebus.hint}
              </span>`
                : ''
            }
          </div>
        `;
      }
    })
  );
}
