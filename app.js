const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const generateRubbish = require("./generate")
const port = 3000

// set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set static files
app.use(express.static("public"))

// set route
app.get("/", (req,res) => {
    res.render("index")
})

app.post("/post", (req,res) => {
    console.log(req.body)
    const option = req.body
    const result = generateRubbish(option)
    res.render("index", { result: result, option: option })  
})

// listen server
app.listen(port, () => {
    console.log("It's work!")
})