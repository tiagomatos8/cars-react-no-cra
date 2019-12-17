<h1>React JS project without create-react-app boirlerplate!</h1>

<h3>How to run the project</h3>
<p>git clone https://github.com/tiagomatos8/cars-react-no-cra.git</p>
<p>then</p>

<h4>Development mode</h4>
<ol>
  <li>cd cars-react-no-cra</li>
  <li>yarn install</li>
  <li>yarn start</li>
  <li>open http://localhost:8080/</li>
</ol>

<h3>Production mode</h3>
<ol>
  <li>yarn global add live-server</li>
  <li>cd cars-react-no-cra</li>
  <li>yarn install</li>
  <li>yarn build</li>
  <li>cd dist</li>
  <li>live-server</li>
</ol>

<h3>Packages explanation</h3>
<ul>
  <li><strong>@babel/core</strong>: Transpile es6 code to browser friendly code</li>
  <li><strong>@babel/preset-react</strong>: Transpile jsx files</li>
  <li><strong>@babel/preset-env</strong>: Allows to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s)</li>
  <li><strong>babel-loader</strong>: Allows transpiling JavaScript files using Babel and webpack</li>
  <li><strong>bulma</strong>: Open source CSS framework based on Flexbox</li>
  <li><strong>css-loader</strong>: Interprets @import and url() like import/require() and will resolve them</li>
  <li><strong>html-webpack-plugin</strong>: Generate html build/file based on template</li>
  <li><strong>mini-css-extract-plugin</strong>: extracts CSS into separate files. It creates a CSS file per JS file which contains CSS</li>
  <li><strong>node-sass-chokidar</strong>: Stylesheet preprocessor</li>
  <li><strong>sass-loader</strong>: Loads a Sass/SCSS file and compiles it to CSS</li>
  <li><strong>style-loader</strong>: Inject CSS into the DOM</li>
  <li><strong>webpack</strong>: Bundle assets together</li>
  <li><strong>webpack-cli</strong>: Allow to run webpack commands (used in build script)</li>
  <li><strong>webpack-dev-server</strong>: Development server that provides live reloading</li>
</ul>