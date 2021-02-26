import { createComponent } from '../mini';

export function App(props, ...children) {
  return createComponent({
    props,
    children,
    render({ app }) {
      return `
        <div class="${app}">
          <children>
        </div>
      `;
    }
  });
}
