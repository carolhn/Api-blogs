const express = require('express');
const { routesLogin, routeUser, routesCategory, routesPost } = require('./routes');

// ...
const app = express();

app.use(express.json());

app.use(routesLogin);
app.use(routeUser);
app.use(routesCategory);
app.use(routesPost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
