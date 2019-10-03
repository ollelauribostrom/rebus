import { createComponent } from '../mini';
import { connect } from '../store';

//progress bar to keep track of progress
export function ProgressBar(props) {
  return connect(
    createComponent({
      props,
      render({ rebuses }) {
        const answeredRebusCount = rebuses.filter(rebus => rebus.isAnswered).length;
        return ` 
        <progress class="progress-bar" value="${answeredRebusCount}" max="${rebuses.length}">
        </progress> 
        `;
      }
    })
  );
}
