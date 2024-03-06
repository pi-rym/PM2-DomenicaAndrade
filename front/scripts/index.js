const moviesContainer = document.getElementById("movies-container");

$.get("https://students-api.2.us-1.fl0.io/movies", (data) =>{
  renderCards(data)
});
    
const renderCards = (data) => {
  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.innerHTML = movie.title;

    const poster = document.createElement("img");
    poster.classList.add("card-image");
    poster.src = movie.poster;

    const year = document.createElement("p");
    year.classList.add("card-text");
    year.innerHTML = movie.year;

    const director = document.createElement("p");
    director.classList.add("card-text");
    director.innerHTML = movie.director;

    const duration = document.createElement("p");
    duration.classList.add("card-text");
    duration.innerHTML = movie.duration;

    const genre = document.createElement("p");
    genre.classList.add("card-text");
    genre.innerHTML = movie.genre;

    const rate = document.createElement("p");
    rate.classList.add("card-text");
    rate.innerHTML = movie.rate;


    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(director);
    card.appendChild(duration);
    card.appendChild(genre);
    card.appendChild(rate);

    moviesContainer.appendChild(card);
  });
}
