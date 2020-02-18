const express = require('express');

const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  wrapError,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());

//routes
moviesApi(app);

//capturar el error 404
app.use(notFoundHandler);

//manejadores de errores
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

// app.get('/', function(req, res) {
//   res.send('hello world');
// });

// app.get('/json', function(req, res) {
//   res.json({ hello: 'world' });
// });

// app.get('/year/:year', (req, res) => {
//   const { year } = req.params;
//   const leapYear =
//     year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0)
//       ? 'es año bisiesto'
//       : 'no es año bisiesto';
//   res.send(`El ${year} ${leapYear}`);
// });

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
