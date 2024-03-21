 const validateMovieData = (req, res, next) => {
    // const { title, year, director, duration, genres, rate, poster } = req.body;
    // if (!title || !year || !director || !duration || !genres || !rate || !poster) {
    //     return res.status(400).json({ message: "Faltan datos obligatorios para crear la película" });
    // }
    // Agregar validaciones 
     next();
 };

module.exports = {
    validateMovieData
};