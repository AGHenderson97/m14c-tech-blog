const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
const routes = require('./routes');
app.use('/', routes);

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

// Register dashboard route
const dashboardRoutes = require('./routes/dashboard');
app.use('/dashboard', dashboardRoutes);
