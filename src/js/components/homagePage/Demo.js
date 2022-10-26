import { createComponent } from '../../mini';

export function Demo() {
  return createComponent({
    render() {
      return `
        <section class="demo" id="demo">
            <h1 class="demo__title">Demo</h1>
            <p class="demo__text">This is a demo of the Rebus game.</p>
            <p class="demo__text">The game is built with vanilla JavaScript and CSS.</p>
            <p class="demo__text">The game is built with vanilla JavaScript and CSS.</p>
            <p class="demo__text">The game is built with vanilla JavaScript and CSS.</p>
            <p class="demo__text">The game is built with vanilla JavaScript and CSS.</p>
            <p class="demo__text">The game is built with vanilla JavaScript and CSS.</p>
            <p class="demo__text">The game is built with vanilla JavaScript and CSS.</p>
            <p class="demo__text">The game is built with vanilla JavaScript and CSS.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus 
            molestie orci, eu gravida elit rhoncus id. Aliquam tincidunt lacinia nibh vitae 
            varius. Donec id nisi non tellus condimentum efficitur. Phasellus viverra dolor 
            ut nisi sollicitudin porttitor. Curabitur cursus magna id arcu varius, vitae 
            scelerisque massa mollis. Mauris at turpis vel arcu molestie sodales vel id odio. 
            Cras vel erat ac sapien vestibulum condimentum eu in nisi. Morbi iaculis lacinia 
            imperdiet. Nam aliquam elit in est facilisis posuere. Aenean euismod feugiat erat, 
            et ullamcorper libero varius in. Suspendisse potenti. Class aptent taciti sociosqu 
            ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nibh justo, consequat
             id congue et, euismod vel velit. Integer blandit ante ante, et iaculis ex iaculis quis. 
             Pellentesque rutrum nulla maximus lorem sollicitudin, vel mattis orci luctus. Nunc arcu leo, 
             finibus non posuere eget, rhoncus sed felis. Integer at vestibulum libero. Suspendisse odio 
             magna, tempus nec erat eu, viverra consequat dolor. Pellentesque tellus massa, dignissim a diam ut, 
             dictum tristique sem. Morbi ut augue malesuada, commodo sapien sit amet, sollicitudin turpis.
              Donec et libero arcu. Sed at mi non nulla congue dignissim. Nulla facilisi. Vivamus dictum nibh 
              posuere ante placerat, fermentum mollis ligula vehicula. Vivamus sagittis ligula ante. Praesent 
              quis urna sagittis, accumsan augue eu, ultricies nibh. Duis sollicitudin suscipit viverra.
              </p>
        </section>
      `;
    }
  });
}
