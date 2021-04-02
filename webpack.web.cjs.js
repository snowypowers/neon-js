const path = require("path");

let env = process.env.NODE_ENV || "development";

module.exports = function (rootDir, pkgName) {
  return {
    name: "Web CJS",
    target: "web",
    output: {
      path: path.resolve(rootDir, "lib", "script", "cjs"),
      filename: "index.js",
      library: {
        type: "umd",
        name: pkgName,
      },
    },
    mode: env,
    devtool: env === "development" ? "inline-source-map" : "source-map",
    entry: path.resolve(rootDir, "src", "index.ts"),
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"],
      fallback: {
        crypto: false,
        bufferutil: false,
        "utf-8-validate": false,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            projectReferences: true,
            context: rootDir,
            compilerOptions: {
              target: "es2015",
              lib: ["es2015"],
              sourceMap: env === "development",
              module: "commonjs",
            },
          },
        },
      ],
    },
  };
};
