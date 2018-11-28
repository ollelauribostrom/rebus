import { createComponent } from '../mini';

export function ChangeButton(props) {
  return createComponent({
    props,
    render({ className = '' }) {
      return `
        <button class="change-button ${className}">
          <svg width="36px" height="67px" viewBox="0 0 36 67" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="App" transform="translate(-282.000000, -478.000000)" fill="#837373" fill-rule="nonzero">
                <g id="Button.button.button--prev" transform="translate(300.000000, 511.500000) scale(-1, -1) translate(-300.000000, -511.500000) translate(282.000000, 478.000000)">
                  <path d="M2.7,66.561337 C2.07931034,67.146221 1.0862069,67.146221 0.465517241,66.561337 C-0.155172414,65.9456697 -0.155172414,64.9606019 0.465517241,64.3449345 L31.562069,33.5 L0.465517241,2.65506547 C-0.155172414,2.03939812 -0.155172414,1.05433035 0.465517241,0.438662991 C1.0862069,-0.146220997 2.07931034,-0.146220997 2.7,0.438662991 L36,33.5 L2.7,66.561337 Z"
                    id="Shape"></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
      `;
    }
  });
}
