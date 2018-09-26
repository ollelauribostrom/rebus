import '../css/main.css';
import { createComponent, render } from './mini';
import { Counter, Child, Button, List } from './components';
import { actions } from './store';

function App(...children) {
  return createComponent({
    children,
    render() {
      return `
        <div>
          <children>
        </div>
      `;
    }
  });
}

render(
  App(
    Counter(Child({ text: 'I am a useless child' })),
    Button({ text: 'Decrement', onClick: actions.decrement }),
    Button({ text: 'Increment', onClick: actions.increment }),
    List()
  ),
  document.querySelector('.root')
);
