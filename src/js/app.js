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
import wav from '../media/click.wav';

const player = new Audio(wav);

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

            /* I have added a sound effect to a button when you click on it 
             npm install --save-dev html-loader
             in webpack.config.js 
             
            {
              test: /\.wav$/,
              use: ['file-loader']
            }
            */
            
            player.setAttribute('preload', 'metadata');
            player.play();

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
