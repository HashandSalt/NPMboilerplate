# Overview

This build tool uses NPM build scripts to compile and optimise SASS, JS and images. It will also live reload the browser using browsersync.

Assumes you are working from a local dev domain created with Vagrant, MAMP, WAMP etc and the domain is reachable. We use Scotchbox on Vagrant.

It was built for OSX, but will work on other systems with minor tweaks.

This was built becuase maintaining a 1,250 line Gulp file was getting pretty darn tedious.

## Features

1. Uses Postcss to inline code from old school css files in the `node_modules` folder or from within your folder tree. Useful for things like Normalize.css.
2. Uses browserify & CommonJS. Easily create javascript complete with dependencies from `node_modules` or local scripts created yourself. See the `site.js` file for more.

## Pre-requisties

* Requires Node (NVM recommended)
* Requires yarn
* Requires Imageoptim (Mac only. Other operating systems will have to swap this line out to use imagemin instead).

## Configuration

Open `bs-config.js` and set line 30 to match your local domain.

Attach the compiled CSS and JS to your page(s):

```
<link rel="stylesheet" href="/assets/css/site.css">
<script src="/assets/js/site.js"></script>
```

Start your local server.

run `yarn install -D`.

run `yarn start`.

If everything went well, your site should spin up under a proxy to the local domain and changes to sass and js should auto reload in the browser.

### Using a Framework

It's possible to load in a framework from `node_modeules` folder. For instance, to use Susy do the following:

1. `yarn add susy`
2. Open `package.json` and set line 12 to the path to Susy ie: `"frameworkpath": "node_modules/susy/sass"`.
3. Add susy to your stylesheet: `@import "susy";`
4. Profit.
