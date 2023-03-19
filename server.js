
const express = require("express");
const app = express(); // start an express app
const port = process.env.PORT || 5501;
const path = require("path"); // window or mac
const router = express.Router();

app.use(express.static(".")); // sending static files 


app.use("/", router);


app.listen(port, () => {
    console.log("App is starting at port ", port);
}); // required



router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
});

router.get('/sobre-mim', (request, response) => {
    response.sendFile(path.join(__dirname, "aboutme.html"));
});



router.get("*", (req, res) => {
    res.json("Page not found");
});



