import { createComponent } from '../mini';

export function SearchBar() {
  return createComponent({
    render() {
      return `
      <form class="searchbar">
      <strong>Go To Number:</strong> <input type="number" name="rebus" min="1" max="999">
      
      </form>
      `;
    }
  });
}
