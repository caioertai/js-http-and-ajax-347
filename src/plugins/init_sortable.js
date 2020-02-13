// init_sortable.js
import Sortable from 'sortablejs';

// Sortable init
const initSortable = () => {
  // Find my element
  const movieResults = document.querySelector("#movie-results");
  Sortable.create(movieResults, {
    animation: 500,
    ghostClass: "sortable-ghost",
    onEnd: (event) => {
      console.log(event);
    }
  })
}

export { initSortable };
