const moviesList = document.querySelector("#movie-results");
const searchForm = document.querySelector("#search-movies");
const formQuery  = document.querySelector("#keyword");

const insertMovieTag = (movie) => {
  const movieTitle  = movie.Title;
  const moviePosterURL = movie.Poster;

  const movieTag = `
    <li class="list-inline-item">
      <img width="200" src="${moviePosterURL}" alt="${movieTitle} poster" />
      <p>${movieTitle}</p>
    </li>
  `;

  moviesList.insertAdjacentHTML("beforeEnd", movieTag);
}

const fetchAndUpdateMoviesList = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      moviesList.innerHTML = "";

      const movies = data.Search;
      movies.forEach(insertMovieTag)
    });
};

const handleMoviesSearchForm = (event) => {
  event.preventDefault();

  const query = formQuery.value;
  fetchAndUpdateMoviesList(query)
};

searchForm.addEventListener("submit", handleMoviesSearchForm)

fetchAndUpdateMoviesList("harry potter");
