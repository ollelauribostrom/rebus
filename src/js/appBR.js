import { clickReset } from './components/ResetButton';

export function loadButtons(resetIdiom) {
  clickReset(resetIdiom);

  // BUTTON [PT-BR] - LOAD BUTTON
  checkIsPTBR();
  document
    .getElementById('button-ptbr')
    .addEventListener('click', () => localStorage.setItem('flagBR', 'true'));
  // CLICK FUNCTION: click on button [pt-br]
  // FLAG: now [pt-br] rebus

  // BUTTON [EN] - LOAD BUTTON
  document
    .getElementById('button-en')
    .addEventListener('click', () => localStorage.setItem('flagBR', 'false'));
  // CLICK FUNCTION: click on button [english]
  // FLAG: now [english / original] rebus
}

export function checkResetPTBR() {
  const resetIdiom = localStorage.getItem('flagBR') === 'true' ? 'reset-ptbr' : 'reset-english';
  return resetIdiom;
}

// CONDITION: if init as [pt-br] rebus, change design and hide button [ptbr]
// ELSE: hide button [english]
export function checkIsPTBR() {
  if (localStorage.getItem('flagBR') === 'true') {
    return (
      document.querySelector('.root').classList.add('rootbr'),
      document.getElementById('button-ptbr').classList.add('button-spam')
    );
  }
  return document.getElementById('button-en').classList.add('button-spam');
}
