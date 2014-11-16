# webpack-scaffold

A little [webpack](http://webpack.github.io/) setup. It'll be used for another project that has some specific requirements.

## table of contents

- [features](#features)
  - [commonjs modules](#commonjs-modules)
  - [amd modules](#amd-modules)
  - [external source maps](#external-source-maps)
  - [bundle splitting](#bundle-splitting)
  - [lazy loading](#lazy-loading)
  - [mustache templates](#mustache-templates)
  - [karma setup](#karma-setup)
  - [sass compilation](#sass-compilation)
  - [image bundling](#image-bundling)
  - [gulp setup](#gulp-setup)
  - [vendor files](#vendor-files)
- [running](#running)
- [todo](#todo)
- [references](#references)

## features

### commonjs modules

[media-query-facade](https://github.com/tanem/media-query-facade) is installed via npm. `lib/module` is a commonjs module.

### amd modules

`lib/logger` is an amd module.

### exernal source maps

The webpack [devtool](http://webpack.github.io/docs/configuration.html#devtool) `source-map` option is used - see `tasks/dev`.

### bundle splitting

`lib/app/index.js` defines a [split point](http://webpack.github.io/docs/code-splitting.html#defining-a-split-point) and webpack takes care of the rest.

### lazy loading

[Taken care of by webpack](http://webpack.github.io/docs/code-splitting.html#chunk-loading) once you have defined a split point.

### mustache templates

Taken care of via the [mustache loader](https://github.com/deepsweet/mustache-loader).

### karma setup

Not implemented in this repo, but can be taken care of by [karma-webpack](https://github.com/webpack/karma-webpack).

### sass compilation

Taken care of via the [sass loader](https://github.com/jtangelder/sass-loader). 

### image bundling

Taken care of via the [url loader](https://github.com/webpack/url-loader). A data url is returned if the image is <= 8kb, otherwise it emits the file to the output directory setting the filename to the md5 hash of the file.

### gulp setup

Refer `gulpile.js` and the `tasks` directory.

### vendor files

See the `vendor` directory. Vendor libs are build into a separate file since it's unlikely they'll change as often as application code. Aliases are also set up in `webpack.config.js` so we don't have to refer to the full path from within modules.

## running

Install the dependencies:

```sh
$ npm install
```

To use the webpack dev server:

```sh
$ gulp
```

Then open `http://localhost:8080/webpack-dev-server/index.html`. Try resizing the window to see various components in action.

Or you can build and watch without the server:

```sh
$ gulp build-dev
```

Then open `index.html`.

To build for prod:

```sh
$ gulp build-prod
```

## todo

 * CSS source maps

## references

 * [webpack-howto](https://github.com/petehunt/webpack-howto)
 * [webpack-with-common-libs](https://github.com/webpack/webpack-with-common-libs)