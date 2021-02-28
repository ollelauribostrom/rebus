import { clickReset } from './components/ResetButton';
import { checkIsPTBR } from './checkBR';

export function loadButtons(resetIdiom) {
  clickReset(resetIdiom);
  loadCountryButtons();
}

function loadCountryButtons() {
  clickbr();
  clicken();
}

// BUTTON [PT-BR] - LOAD BUTTON
export function clickbr() {
  // CONDITION: if init as [pt-br] rebus, change design and hide button [ptbr]
  // ELSE: hide button [english]
  checkIsPTBR();

  const e = document.getElementById('button-ptbr'); // get button [pt-br]

  // HOVER FUNCTION: cursor (hover) [pt-br]
  mouseHoverPTBR(e);

  // CLICK FUNCTION: click on button [pt-br]
  e.addEventListener('click', () => {
    localStorage.setItem('flagBR', 'true'); // FLAG: now [pt-br] rebus
  });
}

// BUTTON [EN] - LOAD BUTTON
export function clicken() {
  const e = document.getElementById('button-en'); // get button [english]

  // HOVER FUNCTION: cursor (hover) [english]
  mouseHoverEN(e);

  // CLICK FUNCTION: click on button [english]
  e.addEventListener('click', () => {
    localStorage.setItem('flagBR', 'false'); // FLAG: now [english / original] rebus
  });
}

function mouseHoverPTBR(e) {
  e.addEventListener('mouseover', () => {
    document.getElementById('button-text-id-br').classList.add('button-text-show');
  });
  e.addEventListener('mouseout', () => {
    document.getElementById('button-text-id-br').classList.remove('button-text-show');
  });
}

function mouseHoverEN(e) {
  e.addEventListener('mouseover', () => {
    document.getElementById('button-text-id-en').classList.add('button-text-show');
  });
  e.addEventListener('mouseout', () => {
    document.getElementById('button-text-id-en').classList.remove('button-text-show');
  });
}
