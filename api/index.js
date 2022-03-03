const { urlencoded } = require('express');
const express = require('express');

const app = express();

const PORT = '8000';

const routes = require('./routes/index')
//Adding CORS middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept")
    next();
});

//Adding Body Parser
app.use(urlencoded({ extended: true }));
app.use(express.json());


// app.get('/', (request, response) => {
//     response.send("Welcome to UI - Focus")
// });

app.use("/", routes);

// Because heroku assigns the PORT dynamically.
app.listen(process.env.PORT || PORT, () => {
    console.log('App is running on PORT:' + PORT);
});

