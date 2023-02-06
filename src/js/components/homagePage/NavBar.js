import { createComponent } from '../../mini';

export function NavBar() {
  return createComponent({
    render() {
      return `
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#select-game-language" class="nav__link">Play</a>
          </li>
          <li class="nav__item">
            <a href="#demo" class="nav__link">Demo</a>
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
