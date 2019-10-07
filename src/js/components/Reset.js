import { createComponent } from '../mini';

export function Reset(props) {
  return createComponent({
    props,
    render({ className }) {
      return `
        <button class="${className}">
          Reset
        </button>
      `;
    }
  });
}
