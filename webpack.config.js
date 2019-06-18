module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'vtpbf.bundle.js',
    library: 'vtpbf',
    libraryTarget: 'var'
  }
};
