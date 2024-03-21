const axios = require('axios');

const genres = ["Action", "Fantasy", "Comedy", "Drama", "Sci-fi", "Terror", "Adventure"];

const btnSubmit = document.getElementById('btnSubmit');
const btnCleaner = document.getElementById('btnCleaner');
const options = document.getElementById('options');
const title = document.getElementById('title');
const year = document.getElementById('year');
const director = document.getElementById('director');
const duration = document.getElementById('duration');
const rate = document.getElementById('rate');
const poster = document.getElementById('poster');

function renderGenres() {
    options.innerHTML = ' ';

    for (const genre of genres) {
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = "checkbox"
        input.id = genre
        input.name = "genre[]"
        input.value = genre

        label.htmlFor = genre;
        label.textContent = genre;

        options.appendChild(input);
        options.appendChild(label);
    }
    return options;
}

renderGenres();

function validateCheckboxes(){
    const checkboxes = document.querySelectorAll('input[name="genre[]"]');
    let selectedGenres = [];

    for (const item of checkboxes){
        if(item.checked){
            item.classList.add("selected");
            selectedGenres.push(item.value);
            //return true;
        }
    }
    return selectedGenres;
}

validateCheckboxes();

function handlerSubmit(event){
    event.preventDefault();

    const genres = validateCheckboxes();

    if(![title.value, year.value, director.value, duration.value, rate.value, poster.value, genres].every(Boolean)) {
        return alert('Faltan llenar campos');
    }
    //document.getElementById('genres').value = JSON.stringify(genres);
    return alert('Pelicula enviada');
};
document.getElementById('genres').value = JSON.stringify(genres);

function cleanInputs () {
    title.value = '';
    year.value = '';
    director.value = '';
    duration.value = '';
    rate.value = '';
    poster.value = '';

    const checkboxes = document.querySelectorAll('input[name="genre[]"]')

   

    checkboxes.forEach(item => {
        item.checked = false;
        item.classList.remove('selected');
    });
}

function handleCleanForm(event){
    event.preventDefault();
    cleanInputs();
}

btnSubmit.addEventListener('click', handlerSubmit);
btnCleaner.addEventListener('click', handleCleanForm);


//////

// function validateForm({
//     title, year, director, duration, genre, rate, poster
// }) {
//     if(!title || !year || !director || !duration || !genre[0] || !rate || !poster)
//         return "Todos los campos son obligatorios";
//     if(director.lenght < 5 || director.lenght > 50)
//         return "Director debe contener entre 5 y 50 caracteres";
//     if(isNaN(rate) || rate < 1 || rate > 10)
//         return "El rating debe ser un numero entre 1 y 10";
//     if(!poster.includes("https://"))
//         return "El poster debe ser una URL valida";
//     return null;
// }



// function createMovie(event){
//     event.preventDefault();

//     const title = document.getElementById("title").value;
//     const year = document.getElementById("year").value;
//     const director = document.getElementById("director").value;
//     const duration = document.getElementById("duration").value;
//     const genre = document.getElementById("genre").value.split(" ");
//     const rate = document.getElementById("rate").value;
//     const poster = document.getElementById("poster").value;

//     const error = validateForm({ title, year, director, duration, genre, rate, poster});
//     if(error) return alert(error);

//     return alert("Datos correctos");
// }

//module.exports = createMovie;