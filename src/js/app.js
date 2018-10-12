import { render } from './mini';
import { App, Logo, GithubCorner, ChangeButton, Rebus } from './components';
import { actions } from './store';
import '../css/main.css';

function registerListeners() {
  document.addEventListener('keyup', event => {
    const key = event.key || event.keyCode; // For older browser support
    if (key === 'ArrowRight' || key === 39) {
      actions.next();
    }
    if (key === 'ArrowLeft' || key === 37) {
      actions.prev();
    }
    if (key === 'Enter' || key === 13) {
      actions.next();
    }
  });
}

export function init() {
  return render(
    App(
      Logo(),
      GithubCorner({ url: 'https://github.com/ollelauribostrom/rebus' }),
      ChangeButton({
        className: 'change-button--prev',
        onClick: () => actions.prev()
      }),
      Rebus({
        charInput: (input, wordIndex, charIndex) => {
          const confettiCanon = document.querySelector('.confetti-canon');
          actions.setInput(input, wordIndex, charIndex);
          actions.check(confettiCanon);
        }
      }),
      ChangeButton({
        className: 'change-button--next',
        onClick: () => actions.next()
      })
    ),
    document.querySelector('.root')
  );
}

if (!global || !global.isTestRun) {
  init();
  registerListeners();
}
