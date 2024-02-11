import { createComponent } from '../mini';
import '../../css/main.css';

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
