const devConfig = require('./config/development');
const prodConfig = require('./config/production');

module.exports = function(env, argv) {
  const isDev = env && env.NODE_ENV === 'development' ? true : false;

  return isDev ? devConfig : prodConfig;
};
