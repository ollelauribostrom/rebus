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

let resetIdiom;

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

export function init() {
  // CONDITION: if init as [pt-br] rebus, choose reset idiom
  if (localStorage.getItem('flagBR') === 'true') {
    resetIdiom = 'reset-ptbr';
  } else {
    resetIdiom = 'reset-english';
  }

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
    registerListeners();
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

// BUTTON [PT-BR] - LOAD BUTTON
export function clickbr() {
  // CONDITION: if init as [pt-br] rebus, change design and hide button [ptbr]
  // ELSE: hide button [english]
  if (localStorage.getItem('flagBR') === 'true') {
    document.querySelector('.root').classList.add('rootbr');
    document.getElementById('button-ptbr').classList.add('button-spam');
  } else {
    document.getElementById('button-en').classList.add('button-spam');
  }
  const e = document.getElementById('button-ptbr'); // get button [pt-br]

  // HOVER FUNCTION: cursor (hover) [pt-br]
  e.addEventListener('mouseover', () => {
    document.getElementById('button-text-id-br').classList.add('button-text-show');
  });
  e.addEventListener('mouseout', () => {
    document.getElementById('button-text-id-br').classList.remove('button-text-show');
  });

  // CLICK FUNCTION: click on button [pt-br]
  e.addEventListener('click', () => {
    localStorage.setItem('flagBR', 'true'); // FLAG: now [pt-br] rebus
  });
}

export function clicken() {
  const e = document.getElementById('button-en'); // get button [english]

  // HOVER FUNCTION: cursor (hover) [english]
  e.addEventListener('mouseover', () => {
    document.getElementById('button-text-id-en').classList.add('button-text-show');
  });
  e.addEventListener('mouseout', () => {
    document.getElementById('button-text-id-en').classList.remove('button-text-show');
  });

  // CLICK FUNCTION: click on button [english]
  e.addEventListener('click', () => {
    localStorage.setItem('flagBR', 'false'); // FLAG: now [english / original] rebus
  });
}
