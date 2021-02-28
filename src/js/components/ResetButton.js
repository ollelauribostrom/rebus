import { createComponent } from '../mini';

export function ResetButton(props) {
  return createComponent({
    props,
    render({ resetButton }) {
      return `
        <button onclick="window.location.href=''" id="${resetButton}" class="reset">RESET</button>
        `;
    }
  });
}

export function clickReset(resetButton) {
  const answeredRebuses =
    localStorage.getItem('flagBR') === 'true' ? 'answeredRebusesBR' : 'answeredRebuses';
  const e = document.getElementById(resetButton);
  e.addEventListener('click', () => window.localStorage.removeItem(answeredRebuses));
}
