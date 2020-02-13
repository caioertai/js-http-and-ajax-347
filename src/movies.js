const moviesList = document.querySelector("#movie-results");
const formQuery  = document.querySelector("#keyword");

const insertMovieTag = (movie) => {
  const movieTitle     = movie.Title;
  const moviePosterURL = movie.Poster;

  const movieTag = `
    <img width="200" src="${moviePosterURL}" alt="${movieTitle} poster" />
  `;

  moviesList.insertAdjacentHTML("beforeEnd", movieTag);
};

const fetchAndUpdateMoviesList = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      moviesList.innerHTML = "";

      const movies = data.Search;
      movies.forEach(insertMovieTag);
    });
};

const handleMoviesSearchForm = (event) => {
  event.preventDefault();

  const query = formQuery.value;
  fetchAndUpdateMoviesList(query);
};

export { handleMoviesSearchForm, fetchAndUpdateMoviesList };
