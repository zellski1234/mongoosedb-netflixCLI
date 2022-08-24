const Movie = require("./movieModel")

// creates movie
exports.createMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log("error in createMovie function")
        console.log(error)
    }
}

// List all movies
exports.listMovies = async () => {
    try {
        return await Movie.find({})
    } catch (error) {
        console.log("error in listMovie function")
        console.log(error)
    }
}

// deletes specific movie
exports.deleteMovie = async (movieObj) => {
    try {
        return await Movie.deleteOne(movieObj)
    } catch (error) {
        console.log("error in deleteMovie function")
        console.log(error)
    }
}

// deletes all movies
exports.deleteMovies = async () => {
    try {
        return await Movie.deleteMany({})
    } catch (error) {
        console.log("error in deleteMovie function")
        console.log(error)
    }
}

// updates Specified Movie
exports.updateMovie = async (movieObj, updateMovieObj) => {
    try {
        return await Movie.updateOne(movieObj, updateMovieObj)
    } catch (error) {
        console.log("error in updateMovie function")
        console.log(error)
    }
}

// finds all movies containing actor e.g if actor is in multiple movies
exports.findMoviesActors = async (actorObj) => {
    try {
        return await Movie.find(actorObj)
    } catch (error) {
        console.log("error in findMoviesActors function")
        console.log(error)
    }
}

// finds movie title
exports.findMoviesTitle = async (titleObj) => {
    try {
        return await Movie.findOne(titleObj)
    } catch (error) {
        console.log("error in findMovie function")
        console.log(error)
    }
}
