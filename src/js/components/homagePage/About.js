import { createComponent } from '../../mini';
import rebusExplanationImage from '../../../../howToUseRebus.svg';

export function About() {
  return createComponent({
    render() {
      return `
        <section class="about" id="about">
            <h1 class="about__title">About</h1>
            <div class="about__content">
                <p class="about__description">Rebus consists of guessing words by using a combination of pictures and letters.</p>
                <div class="rebus_example">
                  <h2>Example:</h2>
                  <div>
                    <span>🌲+ 🍎 = Pineapple </span>
                    <span><em>AND</em></span>
                    <span>G + ❤️ = GLove </span>
                  </div>
                </div>
                <figure>
                  <img src=${rebusExplanationImage} alt="Rebus explanation" class="what__image"/>
                  <figcaption>The <em>Rebus</em> on the figure correspond to <strong>caravan</strong></figcaption>
                </figure>
            </div>
        </section>
      `;
    }
  });
}
