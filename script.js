function search() {
  const userInput = document.getElementById("search_input");
  const movieName = userInput.value;
  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=235792ba" + movieName;
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
  };
}
