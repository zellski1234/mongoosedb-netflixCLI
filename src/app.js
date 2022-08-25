require("./db/connection");
const mongoose = require('mongoose')
const yargs = require("yargs")

const { createMovie, listMovies, deleteMovie, deleteMovies, updateMovie, findMoviesActors, findMoviesTitle } = require("./movie/movieFunctions")
const { createtvShow, listtvShows, deletetvShow, deletetvShows, updatetvShow, findtvShowsActors, findtvShowsTitle } = require("./tvshow/tvshowFunctions")

const app = async (yargsObj) => {
    try {
        // Creates new document requires you to say movies title and actor
         // requires --add --movies --title <movieName> --actor <actorName>
        if(yargsObj.add && yargsObj.movies) {
            await createMovie({
                title: yargsObj.title, 
                actor: yargsObj.actor})
                log(await listMovies())
        }
        // Lists all movies only requires you to do --list --movies
        else if (yargsObj.list && yargsObj.movies) {
            let list = await listMovies()
            log("Listing all movies:")
            log(list)
        } 
        // Deletes specified movie requires you to say movies title and actor
        // requires --delete --movies --title <movieName> --actor <actorName>
        else if (yargsObj.delete && yargsObj.movies) {
            await deleteMovie({
                title: yargsObj.title, 
                actor: yargsObj.actor
            })
            log("Deleting Specified Movie!")
            log("Remaining Movies are:")
            log(await listMovies())
        }
        // Deletes all movies only requires you to do --deleteAll --movies
        else if (yargsObj.deleteAll && yargsObj.movies) {
            await deleteMovies()
            log("Deleted All Movies!")
        }
        // Updates specified movie requires you to say movies title and actor
        // requires --update --newTitle <movieName> --newActor <actorName> --title <movieName> --actor <actorName>
        // current movie is title: Spiderman actor: "Andrew Garfield"
        // To update do the following:
        // node app.js --update --movies --newTitle Batman --newActor Christian --title Spiderman --actor "Andrew Garfield"
        else if (yargsObj.update && yargsObj.movies) {
            await updateMovie(
                {
                title: yargsObj.title, 
                actor: yargsObj.actor},
                {
                title: yargsObj.newTitle,
                actor: yargsObj.newActor,
                })
            log("Updated Specified Movie")
            log(await listMovies())
        }
        // Lists all movies cotain actor requires you to do --findActor
        // If actor is in multiple movies it will show all movies containing --findActor
        // e.g If you have an actor in multiple movies for example "Joe" so you would type:
        // --findActor --movies --actor <actorName>
        // --find --movies --actor <actorName>
        else if ((yargsObj.findActor && yargsObj.movies) || (yargsObj.find && yargsObj.actor && yargsObj.movies)) {
            let findActor = await findMoviesActors({actor: yargsObj.actor})
            log(await findActor)
        }
        // Finds movie you specify by using --findMovie 
        // if your movie was called "Batman" you would type:
        // --findMovie --movies --title <movieName>
        // --find --movies --title <movieName>
        else if ((yargsObj.findMovie && yargsObj.movies) || (yargsObj.find && yargsObj.title && yargsObj.movies)) {
            let findMovie = await findMoviesTitle({title: yargsObj.title})
            log(await findMovie)
        }

        // ------------------------------------------------------------------------------------------------------------
        // ------------------------------------------------ TV SHOWS --------------------------------------------------
        // ------------------------------------------------------------------------------------------------------------


        else if(yargsObj.add && yargsObj.tvshows) {
            await createtvShow({
                title: yargsObj.title, 
                actor: yargsObj.actor})
                log(await listtvShows())
        }
        // Lists all tvshows only requires you to do --list --tvshows
        else if (yargsObj.list && yargsObj.tvshows) {
            let listTV = await listtvShows()
            log("Listing all tvshows:")
            log(listTV)
        } 
        // Deletes specified tvshows requires you to say tvshows title and actor
        // requires --delete --tvshows --title <movieName> --actor <actorName>
        else if (yargsObj.delete && yargsObj.tvshows) {
            await deletetvShow({
                title: yargsObj.title, 
                actor: yargsObj.actor
            })
            log("Deleting Specified tvshows!")
            log("Remaining tvshows are:")
            log(await listtvShows())
        }
        // Deletes all movies only requires you to do --deleteAll --movies
        else if (yargsObj.deleteAll && yargsObj.tvshows) {
            await deletetvShows()
            log("Deleted All tvshows!")
        }
        // Updates specified movie requires you to say movies title and actor
        // requires --update --newTitle <movieName> --newActor <actorName> --title <movieName> --actor <actorName>
        // current movie is title: Spiderman actor: "Andrew Garfield"
        // To update do the following:
        // node app.js --update --tvshows --newTitle Batman --newActor Christian --title Spiderman --actor "Andrew Garfield"
        else if (yargsObj.update && yargsObj.tvshows) {
            await updatetvShow(
                {
                title: yargsObj.title, 
                actor: yargsObj.actor},
                {
                title: yargsObj.newTitle,
                actor: yargsObj.newActor,
                })
            log("Updated Specified tvshows")
            log(await listtvShows())
        }
        // Lists all tvshows cotain actor requires you to do --findActor
        // If actor is in multiple tvshows it will show all tvshows containing --findActor
        // e.g If you have an actor in multiple tvshows for example "Joe" so you would type:
        // --findActor --tvshows --actor <actorName>
        // --find --tvshows --actor <actorName>
        else if ((yargsObj.findActor && yargsObj.tvshows) || (yargsObj.find && yargsObj.actor && yargsObj.tvshows)) {
            let findTVActor = await findtvShowsActors({actor: yargsObj.actor})
            log(await findTVActor)
        }
        // Finds tvshows you specify by using --findMovie 
        // if your tvshows was called "Batman" you would type:
        // --findMovie --tvshows --title <movieName>
        // --find --tvshows --title <movieName>
        else if ((yargsObj.findTVShow && yargsObj.tvshows) || (yargsObj.find && yargsObj.title && yargsObj.tvshows)) {
            let findTVShow = await findtvShowsTitle({title: yargsObj.title})
            log(await findTVShow)
        }
        else {
            log("incorrect command")
        }
        await mongoose.disconnect();
    } catch (error) {
        log(error)
        await mongoose.disconnect();
    }

}

let log = console.log
app(yargs.argv)