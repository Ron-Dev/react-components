module.exports = {
    entry: { main: "./src/components" },
    output: {
      path: __dirname + "/dist",
      filename: "[name].js",
      libraryTarget: "umd",
      library: "<lib name>"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" }
        }
      ]
    },
    externals: {
      react: "react",
    }
  };
  