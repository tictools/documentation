# WEBPACK CONFIGURATION FOR REACT PROJECT
## WEBPACK DEPENDENCIES
Install required dependencies as `devDependencies`.
* `npm install webpack --save-dev`
* `npm install webpack-cli --save-dev`

## WEBPACK CONFIGURATION
Create `webpack.config.js` to set webpack configuration
* `entry`: entry point fro application 
* `output`: output file name and path
* `loader`: as far as Webpack only understands JavaScript and JSON, loaders allow Webpack to process other types of files and resources to convert them into modules that can be consumed in your application. (see => https://github.com/webpack-contrib/awesome-webpack)
* `plugin`

## WEBPACK LOADERS

### Babel
Required for React-jsx transpilation to js.\
Install required dependencies as `devDependencies`. Take in account that presets contain several plugins which set rules for babel.
* `npm install @babel/core --save-dev`
* `npm install @babel/preset-env --save-dev`
* `npm install @babel/preset-react --save-dev`
* `npm install babel-loader --save-dev`
This loader requires configuration (see **babel configuration** section).

### CSS
Required for css transpilation to js.\
Install required dependencies as `devDependencies`. Take in account that loaders order is important.
* `npm install style-loader --save-dev`
* `npm install css-loader --save-dev` => allows to define hashed classes for CSSModules
* `npm install postcss-loader --save-dev` 

## WEBPACK PLUGINS

### HtmlWebpackPlugin
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation (see => https://webpack.js.org/plugins/html-webpack-plugin/ ). \
Install required dependencies as `devDependencies`.
* `npm install html-webpack-plugin --save-dev` => must be configured in webpack configuration:
```
plugins: [
    new HtmlWebpackPlugin({
      title: "Pokédex",
      template: "./src/index.html",
      hash: true
    })
  ]
```

## WEBPACK SCRIPTS
Define webpack scripts in `package.json`
* `"build": "webpack --mode production"`,
* `"start:dev-server": "webpack --config ./webpack.config.js --mode development --watch"`,

## WEBPACK-DEV-SERVER
Watch changes in development mode and refresh automatically the local application.\
It's more efficient because it keeps files in memory, avoiding files write in disk.\
Install required dependencies as `devDependencies`. Take in account that loaders order is important.
* webpack-dev-server\
This configuration must be included in the dev script in `package.json` (see **webpack scripts** section).
 
# BABEL CONFIGURATION
Define babel configuration creating `babel.config.json`, if not defined as _options_ in webpack configuration. (see https://babeljs.io/setup#installation)
```javascript
{
  "presets": [
    ["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3 }],
    "@babel/preset-react"
  ]
}
```

## REACT DEPENDENCIES
Install required prod dependendies for your project
* `react`
* `react-dom`
* ...
