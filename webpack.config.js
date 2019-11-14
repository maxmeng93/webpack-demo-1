const devConfig = require('./config/development');
const prodConfig = require('./config/production');

module.exports = function(env, argv) {
  const isDev = env && env.development ? true : false;

  return isDev ? devConfig : prodConfig;
};
