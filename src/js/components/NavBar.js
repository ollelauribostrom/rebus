import { createComponent } from '../mini';

export function NavBar() {
  return createComponent({
    render() {
      return `
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="${window.location.origin}?rebus=${1}" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a class="nav__link">About</a>
          </li>
        </ul>
      </nav>
      `;
    }
  });
}
