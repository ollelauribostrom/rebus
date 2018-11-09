import { createComponent } from '../mini';
import { connect } from '../store';
import { Word } from './Word';

export function Rebus(props, ...children) {
  return connect(
    createComponent({
      props,
      children,
      componentDidMount() {
        const rebus = this.props.rebuses[this.props.current];
        if (rebus.isAnswered) {
          this.$parent.querySelector('.change-button--next').focus();
        } else {
          this.$element.querySelector('input').focus();
        }
      },
      componentDidUpdate() {
        const rebus = this.props.rebuses[this.props.current];
        /* If history API isn't available, we shouldn't revert to the more widely available `window.location.href`, 
        as it incurs a new HTTP request and thus results in an infinite loop (and breaks SPAs). */
        if (window.history) {
          // Adds 'rebus' query parameter to end of URL. Should be endpoint-agnostic.
          window.history.pushState('', '', `?rebus=${rebus.id}`);
        }
        if (rebus.isAnswered) {
          this.$parent.querySelector('.change-button--next').focus();
        } else {
          this.$element.querySelector('input').focus();
        }
        if (rebus.isAnswered) {
          this.$parent.querySelector('.change-button--next').focus();
        } else {
          this.$element.querySelector('input').focus();
        }
        let maxWordLength = 0;
        function getMaxWordLength(value) {
          if (maxWordLength < value.length) {
            maxWordLength = value.length;
          }
        }
        rebus.words.forEach(getMaxWordLength);
        if (100 / maxWordLength >= 17) {
          maxWordLength = `50px`;
        } else {
          maxWordLength = `${100 / maxWordLength}%`;
        }
        function setWordColumnWidth(element) {
          element.setAttribute('style', `grid-template-columns: repeat(auto-fit,${maxWordLength})`);
        }
        const rebusWordElements = this.$element.querySelectorAll('.word');
        rebusWordElements.forEach(setWordColumnWidth);
      },
      render({ current, rebuses, animation }) {
        const rebus = rebuses[current];
        this.children = rebus.words.map((word, wordIndex) =>
          Word({ word, wordIndex, current, rebuses, charInput: props.charInput })
        );
        return `
          <div class="rebus ${rebus.isAnswered ? 'rebus--answered' : ''} animation--${animation}">
            <div class="rebus__header">
              <span>${current + 1}/${rebuses.length}</span>
            </div>
            <span class="rebus__symbols">${rebus.symbols.join(' ')}</span>
            <div class="rebus__words">
              <children>
            </div>
          </div>
        `;
      }
    })
  );
}
