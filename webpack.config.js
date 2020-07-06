module.exports = {

  entry: './src/index.ts',

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },

  output: {
    path: require('path').resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'fantastical',
    libraryTarget: 'umd'
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};