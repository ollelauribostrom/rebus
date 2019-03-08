import { createComponent } from '../mini';
import { Char } from './Char';
import { actions } from '../store';

export function Word(props, ...children) {
  return createComponent({
    props,
    children,
    render({ word, charInput }) {
      this.children = word.split('').map((_, charIndex) =>
        Char({
          charIndex,
          ...props,
          onInput: e => {
            const input = e.target.value;
            charInput(input, props.wordIndex, charIndex);

            if (/[a-zA-Z]/.test(input)) {
              const nextChild = e.target.nextElementSibling;
              if (nextChild !== null) {
                nextChild.focus();
              }
            }
          },
          onKeydown: e => {
            const key = e.key;
            const keyCode = e.keyCode;
            if (keyCode >= 65 && keyCode <= 90){
              e.target.value = '';
            }
            if (key === 'Enter' || keyCode === 13) {
              actions.shake();
            }
            if (key === 'Backspace' || keyCode === 8) {
              const input = e.target.value;
              const prevChild = e.target.previousElementSibling;
              if (prevChild !== null && input === '') {
                prevChild.focus();
                e.preventDefault();
              }
            }
          }
        })
      );
      return `
          <div class="word">
            <children>
          </div>
        `;
    }
  });
}
