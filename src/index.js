// Importing files and libraries
import { handleMoviesSearchForm, fetchAndUpdateMoviesList } from "./movies";
import { initSortable } from "./plugins/init_sortable";
import { initMarkdown } from "./plugins/init_markdownit";
import { initSelect2  } from "./plugins/init_select2";

// Assigning behaviors
const searchForm = document.querySelector("#search-movies");
searchForm.addEventListener("submit", handleMoviesSearchForm);

// Initializations
initSortable();
initMarkdown();
initSelect2();

// Ajax calls
fetchAndUpdateMoviesList("harry potter");
