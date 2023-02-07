import { createComponent } from '../../mini';
import MyImage from '../../../../rebus-demo.gif';

export function Demo() {
  return createComponent({
    render() {
      return ` 
        <section class="demo" id="demo">
            <h1 class="demo__title">Demo</h1>
            <div class="demo__container">
                <img src=${MyImage} alt="Rebus Demo" class="demo__img">
            </div>
        </section> 
      `;
    }
  });
}
