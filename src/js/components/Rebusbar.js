import { createComponent } from '../mini';
import { connect } from '../store';

export function Rebusbar(props) {
  return connect(
    createComponent({
      props,
      render({rebuses}) {
      const rebusBar = rebuses.map((item, i) => {
        return `
          <button type="number" name="rebus" value="${i+1}">${i+1}</button>
        `}).join('');
       return`
        <form class="rebusbar">
          ${rebusBar}
        </form>
       `;
      }
    })
  );
}
