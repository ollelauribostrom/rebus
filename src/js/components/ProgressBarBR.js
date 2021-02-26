import { createComponent } from '../mini';
import { connect } from '../storeBR';

export function ProgressBarBR(props) {
  return connect(
    createComponent({
      props,
      render({ rebuses }) {
        const answeredRebusCount = rebuses.filter(rebus => rebus.isAnswered).length;
        return ` 
        <progress class="progress-bar-br" value="${answeredRebusCount}" max="${rebuses.length}">
        </progress> 
        `;
      }
    })
  );
}
