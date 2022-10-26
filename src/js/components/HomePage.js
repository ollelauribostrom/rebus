import { createComponent } from '../mini';

export function HomePage(...children) {
  return createComponent({
    children,
    render() {
      return `
        <div class="home-page">
          <children>
        </div>
      `;
    }
  });
}
