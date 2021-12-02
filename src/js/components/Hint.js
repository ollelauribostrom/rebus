import { createComponent } from '../mini';
import { connect } from '../store';

export function Hint(props) {
  function selectedSolutionBtn(Component) {
    const solutionBtn = document.querySelector('.solutionBtn');
    solutionBtn.addEventListener('click', () => {
      Component.showSolution = true;
      Component.update();
    });
  }
  return connect(
    createComponent({
      props,
      componentDidMount() {
        this.showSolution = false;
        selectedSolutionBtn(this);
      },
      componentDidUpdate() {
        this.showSolution = false;
        selectedSolutionBtn(this);
      },
      render({ current, rebuses, incorrectAnswerCount }) {
        const INCORRECT_ANSWER_MAX_COUNT = 3;
        const HINT_SYMBOL = '💡';
        const rebus = rebuses[current];
        const showHint =
          incorrectAnswerCount >= INCORRECT_ANSWER_MAX_COUNT && !rebus.isAnswered && rebus.hint;
        const showSolution = this.showSolution;
        if (showHint && !showSolution) {
          return `<div class="rebus__hint">
                  <span>
                    ${HINT_SYMBOL} ${rebus.hint}
                  </span>
                  <br>
                  <span class="solutionBtn">🔑 Solution</span>
                </div>
                `
          ;
        }
        else if (showHint && showSolution) {
          return `<div class="rebus__hint">
                    <p>🔑 ${rebus.words.join(' ')}</p>
                  </div>
                 `
          ;
        }
        else {
          return `<div class="rebus__hint">
                  </div>
                 `
          ;
        }
      }
    })
  );
}