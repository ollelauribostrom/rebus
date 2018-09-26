import { createComponent } from './mini';
import { connect } from './store';

export function Button(props, ...children) {
  return createComponent({
    props,
    children,
    render({ text, className = '' }) {
      return `<button class="button ${className}">${text}</button>`;
    }
  });
}

export function Child(props) {
  return createComponent({
    props,
    render({ text }) {
      return `<span class="child">${text}</span>`;
    }
  });
}

export function Counter(...children) {
  return connect(
    createComponent({
      children,
      render({ count }) {
        const text = `Count: ${count}`;
        return `
          <div>
            <span class="count">${text}</span>
            <children>
          </div>
        `;
      }
    })
  );
}

export function List(props) {
  return connect(
    createComponent({
      props,
      render({ count }) {
        return `
          <ul>
            ${[...Array(count)].fill('<li>item</li>').join('')}
          </ul>
        `;
      }
    })
  );
}
