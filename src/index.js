const express = require('express');
require('express-async-errors')

const routes = require('./routes')

const app = express();

/* Reading from data in JSON. */
app.use(express.json());
app.use(routes)

/* Error Handler */
app.use((error, request, response, next) => {
    console.log(error)
    response.sendStatus(500)
})

app.get('/', (request, response) => {
  response.json({ message: 'Hello World' });
});

app.listen(3000, () => console.log('Server started at http://localhost:3000 🚀'));
