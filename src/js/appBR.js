import * as Sentry from '@sentry/browser';
import { render } from './mini';
import { App } from './components/App';
import { Logo } from './components/Logo';
import { GithubCorner } from './components/GithubCorner';
import { ChangeButton } from './components/ChangeButton';
import { RebusBR } from './components/RebusBR';
import { ProgressBarBR } from './components/ProgressBarBR';
import { Hint } from './components/HintBR';

import { actions } from './storeBR';
import '../css/main.css';
import { ButtonCountryEN } from './components/ButtonEN';

import { init } from './app';
import { ResetButton, clickReset } from './components/ResetButton';

const events = function(event) {
  const keys = event.key;
  if (keys === 'ArrowRight' || keys === 39) {
    actions.next();
  }
  if (keys === 'ArrowLeft' || keys === 37) {
    actions.prev();
  }
};

export function registerListeners() {
  document.removeEventListener('keyup', events);
  document.addEventListener('keyup', events);
}

export function setCurrentFromURL(rebus) {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get(rebus));
  actions.setCurrent(id);
}

// FUNCTION REBUS IN PT-BR
export function initBR() {
  localStorage.setItem('flagBR', 'true'); // FLAG: is [pt-br] rebus

  try {
    render(
      App(
        { app: 'app-br' },
        Logo(),
        GithubCorner({ url: 'https://github.com/ollelauribostrom/rebus' }),
        ChangeButton({
          className: 'change-button--prev',
          onClick: () => actions.prev()
        }),
        ButtonCountryEN({ button: '/?rebus=1' }),
        RebusBR({
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
        ProgressBarBR(),
        ResetButton({ resetButton: 'reset-ptbr' })
      ),
      document.querySelector('.rootbr')
    );
    clickReset('reset-ptbr', 'answeredRebusesBR');
    clicken();
    registerListeners();

    // CONDITION: if init as reset [pt-br] rebus
    if (localStorage.getItem('resetFlagBR') === 'true') {
      document.querySelector('.root').classList.add('rootbr'); // switch to design [pt-br]

      document.getElementById('button-en').classList.remove('button-spam'); // display button [english]

      localStorage.setItem('resetFlagBR', 'false'); // FLAG: no reset [pt-br] rebus
    }
    return '0';
  } catch (err) {
    return Sentry.captureException(err);
  }
}

if (!global || !global.isTestRun) {
  Sentry.init({ dsn: 'https://8f025bee12e84d9b8a16e9c3b9155ce8@sentry.io/1300214' });
  initBR();
  registerListeners();
  setCurrentFromURL('rebus-br');
}

// BUTTON [ENGLISH] - LOAD BUTTON
export function clicken() {
  const e = document.querySelector('.app-br').querySelector('#button-en'); // get button [english]

  // HOVER FUNCTION: cursor (hover) [english]
  e.addEventListener('mouseover', () => {
    document.getElementById('button-text-id-en').classList.add('button-text-show');
  });
  e.addEventListener('mouseout', () => {
    document.getElementById('button-text-id-en').classList.remove('button-text-show');
  });

  // CLICK FUNCTION: click on button [english]
  e.addEventListener('click', () => {
    document.querySelector('.root').classList.remove('rootbr'); // switch to design [english]

    init(); // switch to [english] rebus
  });
}
