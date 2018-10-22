var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/includes'),
        use: ['raw-loader']
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      header: '<h1>Title of the page</h1>',
      main: '<div class="main">MAIN information</div>',
      footer: '<p>Bottom of the page</p>',
      // Load a custom template (lodash by default see the FAQ for details)
      template: 'src/index.html'
    })
  ]
};
