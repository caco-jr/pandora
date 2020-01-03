require('dotenv').config();
const webpack = require('webpack');

const nextConfig = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  }
};

module.exports = nextConfig;
