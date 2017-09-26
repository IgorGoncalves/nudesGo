var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nudes-go'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://user:password@localhost/nudesgodb',    

  },

  test: {
    root: rootPath,
    app: {
      name: 'nudes-go'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/nudes-go-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nudes-go'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/nudes-go-production'
  }
};

module.exports = config[env];
