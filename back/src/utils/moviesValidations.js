function moviesValidation (movieObject){
    if(!movieObject.title || !movieObject.director || !movieObject.year){
        throw new Error("Missing required fields");
    }
    return true;
}

module.exports = moviesValidation;