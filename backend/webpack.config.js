var BundleTracker  = require('webpack-bundle-tracker');

module.exports = {
    entry: './frontendapp/src/index.js',
    output: {
      filename: 'main.js',
      path: __dirname + '/frontendapp/static/frontend',
    },
    module: {
      rules: [
        {
          test: /\.js$|jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        { test: /\.css$/, 
         use: ["style-loader","css-loader" ]}
         , {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          use: ['url-loader'] }
      ]
    },
    plugins: [
        new BundleTracker({path: __dirname, filename: 'webpack-stats.json'})
      ]
  };