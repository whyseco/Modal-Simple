var path = require("path");
module.exports = {
  entry: "./src/Modal.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "Modal.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  externals: {
    react: "react",
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
    }
  }
};
