import { render } from './mini';
import { App, Logo, GithubCorner, ChangeButton, Rebus } from './components';
import { actions } from './store';
import '../css/main.css';

export const onKeyUp = event => {
  switch (event.key) {
    case 'Left':
    case 'ArrowLeft':
      return actions.prev();

    case ' ':
    case 'Spacebar':
    case 'Right':
    case 'ArrowRight':
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
