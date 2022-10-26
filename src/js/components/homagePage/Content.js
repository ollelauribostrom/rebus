import { createComponent } from '../../mini';

export function Content(...children) {
  return createComponent({
    children,
    render() {
      return `
        <div class="content">
          <children>
        </div>
      `;
    }
  });
}
