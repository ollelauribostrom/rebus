import { clickReset } from './components/ResetButton';

export function loadButtons(resetIdiom) {
  clickReset(resetIdiom);
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
    localStorage.setItem('flagBR', 'true');
  });
  // FLAG: now [pt-br] rebus
}

// BUTTON [EN] - LOAD BUTTON
export function clicken() {
  const a = document.getElementById('button-en'); // get button [english]

  // HOVER FUNCTION: cursor (hover) [english]
  mouseHoverEN(a);

  // CLICK FUNCTION: click on button [english]
  a.addEventListener('click', () => {
    localStorage.setItem('flagBR', 'false');
  });
  // FLAG: now [english / original] rebus
}

function mouseHoverPTBR(e) {
  e.addEventListener('mouseover', () => {
    document.getElementById('button-text-id-br').classList.add('button-text-show');
  });
  e.addEventListener('mouseout', () => {
    document.getElementById('button-text-id-br').classList.remove('button-text-show');
  });
}

function mouseHoverEN(a) {
  a.addEventListener('mouseover', () => {
    document.getElementById('button-text-id-en').classList.add('button-text-show');
  });
  a.addEventListener('mouseout', () => {
    document.getElementById('button-text-id-en').classList.remove('button-text-show');
  });
}

export function checkResetPTBR() {
  let resetIdiom = 'reset-english';
  if (localStorage.getItem('flagBR') === 'true') resetIdiom = 'reset-ptbr';
  return resetIdiom;
}

export function checkIsPTBR() {
  if (localStorage.getItem('flagBR') === 'true') {
    return (
      document.querySelector('.root').classList.add('rootbr'),
      document.getElementById('button-ptbr').classList.add('button-spam')
    );
  }
  return document.getElementById('button-en').classList.add('button-spam');
}
