var path = require("path");
module.exports = {
  entry: "./src/Modal.js",
  devtool: 'source-map',
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
          loader: "babel-loader?optional=runtime&cacheDirectory",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.txt$/i,
        use: "raw-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  externals: {
    react: "react",
    "react-bootstrap": "react-bootstrap",
    "react-dom": "react-dom",
    "prop-types": "prop-types",
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
      "react-bootstrap": path.resolve("./node_modules/react-bootstrap"),
      "prop-types": path.resolve("./node_modules/prop-types"),
    }
  }
};
