import { createComponent } from '../mini';
import { connect } from '../store';

export function RandomButton(props) {
  return connect(
    createComponent({
      props,
      render() {
        return `<button class='random-button'>Random</button>`;
      }
    })
  );
}
