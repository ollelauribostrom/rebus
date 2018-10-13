import * as Sentry from '@sentry/browser';
import { render } from './mini';
import { App, Logo, GithubCorner, ChangeButton, Rebus } from './components';
import { actions } from './store';
import '../css/main.css';

function focusInput() {
  const firstInput = document.querySelector('input.word__char');
  firstInput.focus();
}

export function registerListeners() {
  document.addEventListener('keyup', event => {
    const key = event.key || event.keyCode; // For older browser support
    if (key === 'ArrowRight' || key === 39) {
      actions.next();
    }
    if (key === 'ArrowLeft' || key === 37) {
      actions.prev();
    }
  });
  const letterInputs = document.querySelectorAll('.word__char');
  for (let i = 0; i < letterInputs.length; i += 1) {
    letterInputs[i].addEventListener('keydown', e => {
      const maxlength = letterInputs[i].getAttribute('maxlength');
      if (
        letterInputs[i].value.length === parseInt(maxlength, 10) &&
        letterInputs[i + 1] !== undefined &&
        e.keyCode !== 8
      ) {
        letterInputs[i + 1].focus();
      }
      if (e.keyCode === 8 && letterInputs[i - 1] !== undefined && letterInputs[i].value === '') {
        letterInputs[i - 1].focus();
      }
    });
  }
}

export function init() {
  try {
    return render(
      App(
        Logo(),
        GithubCorner({ url: 'https://github.com/ollelauribostrom/rebus' }),
        ChangeButton({
          className: 'change-button--prev',
          onClick: () =>
            actions.prev().then(() => {
              focusInput();
            })
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
          onClick: () => {
            actions.next().then(() => {
              focusInput();
            });
          }
        })
      ),
      document.querySelector('.root')
    );
  } catch (err) {
    return Sentry.captureException(err);
  }
}

if (!global || !global.isTestRun) {
  Sentry.init({ dsn: 'https://8f025bee12e84d9b8a16e9c3b9155ce8@sentry.io/1300214' });
  init();
  registerListeners();
  focusInput();
}
