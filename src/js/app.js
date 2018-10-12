import { render } from './mini';
import { App, Logo, GithubCorner, ChangeButton, Rebus } from './components';
import { actions } from './store';
import '../css/main.css';

export const onKeyUp = event => {
  const key = event.key || event.keyCode; // For older browser support
  switch (key) {
    case 'ArrowLeft':
    case 37:
      return actions.prev();
    case 'ArrowRight':
    case 'Enter':
    case 39:
    case 13:
      return actions.next();
    default:
      return undefined;
  }
};

export function registerListeners() {
  document.addEventListener('keyup', onKeyUp);
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
