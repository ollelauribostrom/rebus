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
  let answeredRebuses = '';
  if (localStorage.getItem('flagBR') === 'true') {
    answeredRebuses = 'answeredRebusesBR';
  } else {
    answeredRebuses = 'answeredRebuses';
  }
  const e = document.getElementById(resetButton);
  e.addEventListener('click', () => {
    if (resetButton === 'reset-ptbr') {
      localStorage.setItem('resetFlagBR', 'true');
      window.localStorage.removeItem(answeredRebuses);
    } else {
      localStorage.setItem('resetFlagBR', 'false');
      window.localStorage.removeItem(answeredRebuses);
    }
  });
}
