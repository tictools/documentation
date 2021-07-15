# WEBPACK CONFIGURATION FOR REACT PROJECT
## WEBPACK DEPENDENCIES
Install required dependencies as `devDependencies`.
* webpack
* webpack-cli

## WERPACK CONFIGURATION
Create `webpack.config.js` to set webpack configuration
* entry: entry point fro application 
* output: output file name and path
* loader: as far as Webpack only understands JavaScript and JSON, loaders allow Webpack to process other types of files and resources to convert them into modules that can be consumed in your application. (see => https://github.com/webpack-contrib/awesome-webpack)
* plugins:

## WEBPACK LOADERS

### Babel
Required for React-jsx transpilation to js.\
Install required dependencies as `devDependencies`. Take in account that presets contain several plugins which set rules for babel.
* @babel/core
* @babel/preset-env
* @babel/preset-react
* babel-loader 
This loader requires configuration (see **babel configuration** section).

### CSS
Required for css transpilation to js.\
Install required dependencies as `devDependencies`. Take in account that loaders order is important.
* style-loader
* css-loader
* postcss-loader
`css-loader` allows to define hashed classes for CSSModules

## WEBPACK SCRIPTS
Define webpack scripts in `package.json`
* "build": "webpack --mode production",
*  "start:dev-server": "webpack --config ./webpack.config.js --mode development --watch",

## WEBPACK-DEV-SERVER
Watch changes in development mode and refresh automatically the local application.\
It's more efficient because it keeps files in memory, avoiding files write in disk.\
Install required dependencies as `devDependencies`. Take in account that loaders order is important.
* webpack-dev-server
This configuration must be included in the dev script in `package.json`:
* `"dev": "webpack serve --config ./webpack.config.js --mode development",`

## REACT DEPENDENCIES
Install required prod dependendies for your project
* react
* react-dom
* ...
  
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
