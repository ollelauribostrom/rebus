import { createComponent } from '../mini';
import { connect } from '../store';
import { totalRebusesCount } from '../rebuses';

export function ProgressBar() {
  return connect(
    createComponent({
      render() {
        const answeredRebuses = window.localStorage.getItem('answeredRebuses');
        let answeredRebusCount = 0;
        if (answeredRebuses) {
          answeredRebusCount = JSON.parse(answeredRebuses).length;
        }
        return ` 
        <progress class="progress-bar" value="${answeredRebusCount}" max="${totalRebusesCount}">
        </progress> 
        `;
      }
    })
  );
}
