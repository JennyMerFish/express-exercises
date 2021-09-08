const PORT = 3001
const express = require("express")
const app = express()
const es6Renderer = require("express-es6-template-engine");
const cities = [{cityName: "Houston", continent: "North America"}, {cityName: "Atlanta", continent: "North America"}, {cityName: "Tampa", continent: "Anarctica"}, {cityName: "Moscow", continent: "Asia"}, {cityName: "Sydney", continent: "Australia"}]
const movies = [
    {movieName: "O Brother Where Art Thou", poster: `<img src="https://www.grammy.com/sites/com/files/styles/news_detail_header/public/o-brother-where-art-thou-gettyimages-159823899.jpg?itok=kqrqH5Dm">`}, 
    {movieName: "Pulp Fiction", poster: `<img src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg">`}, 
    {movieName: "Guardians of The Galaxy", poster: `<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3FAFBC0A49231243C13DCC537CF805918DD39E79681650B6DC690A5082F393FA/scale?width=1200&aspectRatio=1.78&format=jpeg">`}, 
    {movieName: "Boondock Saints", poster: `<img src="https://www.indiewire.com/wp-content/uploads/2017/04/shutterstock_5874140f.jpg">`}, 
    {movieName: "Get Out", poster: `<img src="https://img.cinemablend.com/quill/9/5/f/b/0/8/95fb08714607e3bb176a045d559512d8ef69bdbb.jpg">`}]

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
app.use(express.static("public"));

// Write your routes between the ***

// ***
// 1.
// app.get("/", (req, res) => {res.send("Node and Express are just lovely")})
// 2.
// app.get("/", (req, res) => {res.render("cities", {locals: {cities}})});
// 3.
// app.get('/', (req, res) => {res.status(400).send("That's an invalid route, mofo")});
// 4.
// app.get("/", (req, res) => {res.send({name: "JennyBoBenny", city: "SWAT", state: "Texas, baby"})})
// 5.
// app.get("/", (req, res) => {res.render("home", {locals: {movies: movies}})});



// ***

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})