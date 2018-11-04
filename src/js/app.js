import * as Sentry from '@sentry/browser';
import { render } from './mini';
import { App } from './components/app';
import { Logo } from './components/logo';
import { GithubCorner } from './components/github-corner';
import { ChangeButton } from './components/change-button';
import { Rebus } from './components/rebus';

import { actions } from './store';
import '../css/main.css';

export function registerListeners() {
  document.addEventListener('keyup', event => {
    const key = event.key || event.keyCode; // For older browser support
    if (key === 'ArrowRight' || key === 39) {
      actions.next();
    }
    if (key === 'ArrowLeft' || key === 37) {
      actions.prev();
    }
    if (key === 'Enter' || key === 13) {
      actions.shake();
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
  setCurrentFromURL();
}
