const TVShow = require("./tvshowModel")


// creates tvShow
exports.createtvShow = async (tvShowObj) => {
    try {
        await TVShow.create(tvShowObj)
    } catch (error) {
        console.log("error in createtvShow function")
        console.log(error)
    }
}

// List all tvShows
exports.listtvShows = async () => {
    try {
        return await TVShow.find({})
    } catch (error) {
        console.log("error in listtvShow function")
        console.log(error)
    }
}

// deletes specific tvShow
exports.deletetvShow = async (tvShowObj) => {
    try {
        return await TVShow.deleteOne(tvShowObj)
    } catch (error) {
        console.log("error in deletetvShow function")
        console.log(error)
    }
}

// deletes all tvShows
exports.deletetvShows = async () => {
    try {
        return await TVShow.deleteMany({})
    } catch (error) {
        console.log("error in deletetvShow function")
        console.log(error)
    }
}

// updates Specified tvShow
exports.updatetvShow = async (tvShowObj, updatetvShowObj) => {
    try {
        return await TVShow.updateOne(tvShowObj, updatetvShowObj)
    } catch (error) {
        console.log("error in updatetvShow function")
        console.log(error)
    }
}

// finds all tvShows containing actor e.g if actor is in multiple tvShows
exports.findtvShowsActors = async (actorObj) => {
    try {
        return await TVShow.find(actorObj)
    } catch (error) {
        console.log("error in findtvShowsActors function")
        console.log(error)
    }
}

// finds tvShow title
exports.findtvShowsTitle = async (titleObj) => {
    try {
        return await TVShow.findOne(titleObj)
    } catch (error) {
        console.log("error in findtvShow function")
        console.log(error)
    }
}


