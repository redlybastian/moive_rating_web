function search() {
  const userInput = document.getElementById("search_input");
  const movieName = userInput.value;
  const url = "" + movieName;
  const httpRequest = new XMLHttpRequest();

  httpRequest.open("GET", url);
  httpRequest.responseType = "json";
  httpRequest.send();

  httpRequest.onload = function () {
    console.log(httpRequest.response);
    const posterImage = document.getElementById("moviePoster");
    posterImage.src = httpRequest.response.Poster;

    const movieTitle = document.getElementById("movie_title");
    movieTitle.innerHTML = httpRequest.response.Title;

    const movieYear = document.getElementById("movie_year");
    movieYear.innerHTML = httpRequest.response.Year;

    const movieRating = document.getElementById("rating");
    movieRating.innerHTML = httpRequest.response.imdbRating;

    const moviePloat = document.getElementById("plot");
    moviePloat.innerHTML = httpRequest.response.Plot;
  };
}
