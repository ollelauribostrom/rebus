import * as Sentry from '@sentry/browser';
import { render } from './mini';
import { App } from './components/App';
import { Logo } from './components/Logo';
import { GithubCorner } from './components/GithubCorner';
import { ChangeButton } from './components/ChangeButton';
import { Rebus } from './components/Rebus';
import { ProgressBar } from './components/ProgressBar';
import { Hint } from './components/Hint';

import { actions } from './store';
import '../css/main.css';

export function registerListeners() {
  let modifier = false;
  document.addEventListener('keyup', event => {
    const key = event.key || event.keyCode; // For older browser support
    if (key === 'ArrowRight' || key === 39) {
      if (!modifier) actions.next();
      if (modifier) actions.next10();
    }
    if (key === 'ArrowLeft' || key === 37) {
      if (!modifier) actions.prev();
      if (modifier) actions.prev10();
    }
    if (key === 'Shift' || key === 16) {
      modifier = false;
    }
  });
  document.addEventListener('keydown', event => {
    const key = event.key || event.keyCode;
    if (key === 'Shift' || key === 16) {
      modifier = true;
    }
  });
}

export function setCurrentFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('rebus'));
  actions.setCurrent(id);
}

export function init() {
  try {
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
        }),
        Hint(),
        ProgressBar()
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
  setCurrentFromURL();
}
