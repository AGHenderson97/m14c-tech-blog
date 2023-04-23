const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const models = {
  User: sequelize.import('./user'),
  Post: sequelize.import('./post'),
  Comment: sequelize.import('./comment')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  models
};

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
