const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use('/users', require('./controllers/users.controller'));
app.use('/comments', require('./controllers/users.controller'));

// starts the server
app.listen(port, () => console.log(`server listening on port ${port}`));
