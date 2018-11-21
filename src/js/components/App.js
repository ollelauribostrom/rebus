import { createComponent } from '../mini';

export function App(...children) {
  return createComponent({
    children,
    render() {
      return `
        <div class="app">
          <children>
        </div>
      `;
    }
  });
}
