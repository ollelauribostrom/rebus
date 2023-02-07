import { createComponent } from '../../mini';

export function NavBar() {
  const removeActiveClassFromNonSelected = selected => {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      if (link !== selected) {
        link.classList.remove('nav__link--active');
      }
    });
  };

  // style the selected nav link at the first render
  setImmediate(() => {
    // if the url doesn't contain a hash, set the first nav link as active
    if (!window.location.hash) {
      window.location.hash = document.querySelector('.nav__link').getAttribute('href');
    }

    // style the initial selected nav link
    const selected = document.querySelector(`a[href="${window.location.hash}"]`);
    selected.classList.add('nav__link--active');
  });

  let storedHash = window.location.hash;
  window.setInterval(() => {
    if (window.location.hash !== storedHash) {
      storedHash = window.location.hash;
      if (storedHash === '#demo') {
        const demoLink = document.querySelectorAll('.nav__link')[0];
        demoLink.classList.add('nav__link--active');
        removeActiveClassFromNonSelected(demoLink);
      }
      if (storedHash === '#select-game-language') {
        const playLink = document.querySelectorAll('.nav__link')[1];
        playLink.classList.add('nav__link--active');
        removeActiveClassFromNonSelected(playLink);
      }
      if (storedHash === '#about') {
        const aboutLink = document.querySelectorAll('.nav__link')[2];
        aboutLink.classList.add('nav__link--active');
        removeActiveClassFromNonSelected(aboutLink);
      }
    }
    window.clearInterval();
  }, 100);

  return createComponent({
    render() {
      return `
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#demo" class="nav__link">Demo</a>
          </li>
          <li class="nav__item">
            <a href="#select-game-language" class="nav__link">Play</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">About</a>
          </li>
        </ul>
      </nav>
      `;
    }
  });
}
