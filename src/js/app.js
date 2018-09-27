import '../css/main.css';
import { render } from './mini';
import { Wrapper, Button, Rebus, RebusInput, Score, GithubBanner, RebusForm } from './components';
import { actions } from './store';

render(
  Wrapper(
    { className: 'app' },
    Score(),
    Rebus(
      RebusForm(
        {
          onSubmit: e => {
            e.preventDefault();
            actions.check();
            actions.restoreFlash();
          }
        },
        RebusInput({ onInput: e => actions.setInput(e.target.value), focus: true })
      ),
      Wrapper(
        { className: 'rebus__buttons' },
        Button({ text: 'Next', onClick: actions.next }),
        Button({
          text: 'Try solution',
          class: '--try',
          onClick: () => {
            actions.check();
            actions.restoreFlash();
          }
        })
      )
    ),
    GithubBanner({ url: 'https://github.com/ollelauribostrom/rebus' })
  ),
  document.querySelector('.root')
);
