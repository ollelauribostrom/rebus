import { createComponent } from '../mini';
import { connect } from '../store';

export function ProgressValue(props) {
    return connect(
      createComponent({
        props,
        render({ rebuses }) {
          const answeredRebusCount = rebuses.filter(rebus => rebus.isAnswered).length;
          const progress = (answeredRebusCount / rebuses.length)*100;
          var progressValue = progress.toFixed(1);
          return ` 
                  <div class="progress-value">${progressValue}%</div>
                  `;
        }
      })
    );
  }
  