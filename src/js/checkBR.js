export function checkResetPTBR(param) {
  let resetIdiom = param;
  if (localStorage.getItem('flagBR') === 'true') {
    resetIdiom = 'reset-ptbr';
  } else {
    resetIdiom = 'reset-english';
  }
  return resetIdiom;
}

export function checkIsPTBR() {
  if (localStorage.getItem('flagBR') === 'true') {
    document.querySelector('.root').classList.add('rootbr');
    document.getElementById('button-ptbr').classList.add('button-spam');
  } else {
    document.getElementById('button-en').classList.add('button-spam');
  }
}
