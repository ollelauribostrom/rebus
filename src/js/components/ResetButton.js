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
  let answeredRebuses = 'answeredRebuses';
  if (localStorage.getItem('flagBR') === 'true') answeredRebuses = 'answeredRebusesBR';
  const e = document.getElementById(resetButton);
  e.addEventListener('click', () => {
    window.localStorage.removeItem(answeredRebuses);
  });
}
