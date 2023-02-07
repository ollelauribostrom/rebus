import { createComponent } from '../../mini';

export function HomePage(...children) {
  return createComponent({
    children,
    render() {
      return `
        <main class="home-page">
          <children>
        </main>
      `;
    }
  });
}
