const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.static(path.join(__dirname, 'client/build')));

//APP ENDPOINTS
app.use('/users', require('./controllers/users.controller'));
app.use('/comments', require('./controllers/comments.controller'));

//ERROR HANDLING
app.use((err, req, res, next) => {
  // log the error...
  res.sendStatus(err.httpStatusCode || 500).json(err);
});
// starts the server
app.listen(port, () => console.log(`server listening on port ${port}`));

module.exports = app;
