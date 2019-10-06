import { createComponent } from '../mini';

export function Reset(props) {
  return createComponent({
    props,
    render({ className }){
      return `
        <button className=${className} style= "background-color:purple; color:white; font-size: 25px; height: 35px; width: 150px; grid-column-start: 3;
        grid-row-start: 3;"}>
          Reset
        </button>      
      `;
    }
  });   
}

