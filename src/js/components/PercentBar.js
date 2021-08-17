import { createComponent } from '../mini';
import { connect } from '../store';

export function PercentBar(props) {
  return connect(
    createComponent({
      props,
      render({ rebuses }) {
        const answeredRebusCount = rebuses.filter(rebus => rebus.isAnswered).length;
        const percent = Math.round((answeredRebusCount / rebuses.length) * 100 * 10) / 10;
        return ` 
        <span class ="percent-bar" id="myspan"> ${percent}% </span>
        `;
      }
    })
  );
}
