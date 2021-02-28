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
import { ButtonCountryPTBR } from './components/ButtonPTBR';
import { ResetButton, clickReset } from './components/ResetButton';
import { ButtonCountryEN } from './components/ButtonEN';
import { clickbr, clicken, checkResetPTBR } from './appBR';

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
}

export function setCurrentFromURL(rebus) {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get(rebus));
  actions.setCurrent(id);
}

export function init() {
  // CONDITION: if init as [pt-br] rebus, choose reset idiom
  const resetIdiom = checkResetPTBR();

  try {
    render(
      App(
        Logo(),
        GithubCorner({ url: 'https://github.com/ollelauribostrom/rebus' }),
        ChangeButton({
          className: 'change-button--prev',
          onClick: () => actions.prev()
        }),
        ButtonCountryPTBR({ button: '/?rebus-br=1' }),
        ButtonCountryEN({ button: '/?rebus=1' }),
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
        ProgressBar(),
        ResetButton({ resetButton: resetIdiom })
      ),
      document.querySelector('.root')
    );
    clickReset(resetIdiom);
    clickbr();
    clicken();
  } catch (err) {
    Sentry.captureException(err);
  }
}

if (!global || !global.isTestRun) {
  Sentry.init({ dsn: 'https://8f025bee12e84d9b8a16e9c3b9155ce8@sentry.io/1300214' });
  init();
  registerListeners();
  setCurrentFromURL();
}
