import { createComponent } from '../mini';
export function AudioPlayer(props) {
  return createComponent({
    props,
    render({ src =''}) {
      return `
      <div class = "audio">
      <button>
      <audio  id = "audio" src= ${src} controls autoPlay={false}></audio>
        Music
        </button>
      </div>
     
      `;
    }
  });
}
