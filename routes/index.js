const router = require("express").Router();

const movies = require("../routes/movies.routes");
const celebrities = require("../routes/celebrities.routes");


/* GET home page */
router.get("/", (req, res, next) => {
  // console.log("hola desde index")
  res.render("index");
});

module.exports = router;
