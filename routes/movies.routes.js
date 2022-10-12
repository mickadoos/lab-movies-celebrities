// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/movies/create", (req, res, next) => {
    console.log('estic a movies/create!!');
    Celebrity.find()
    .then(dbCelebs => {
        res.render("movies/new-movie", {dbCelebs});
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/movies/create', (req, res, next) => {
    Movie.create(req.body)
    .then(result => {
        res.redirect('/movies')
    })
    .catch(err => {
        res.render("movies/new-movie")
    })
})

router.get('/movies', (req, res, next) => {
    console.log('hello from movies')
    Movie.find()
    .then(result => {
        // const data = {movie: result}
        res.render("movies/movies", {movie: result})
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .populate('cast')
    .then(result => {
        res.render('movies/movie-details', {movie: result});
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/movies/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(result => {
        res.redirect('/movies')
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/movies/:id/edit', (req, res, next) => {
    // Celebrity.find()
    Movie.findById(req.params.id)
    .then(result => {
        console.log('//////', result)
        res.render('movies/edit-movie', {movie: result})
    })
    .catch(err => {
        console.log(err)
    })
    // Movie.findByIdAndUpdate(req.params.id)
})

module.exports = router;