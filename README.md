# webpack-scaffold

A little [webpack](http://webpack.github.io/) setup.

## shopping list

### required

 * Can use CommonJS modules :+1:
 * External source maps :+1:
 * Bundle splitting :+1:
 * Lazy loading of modules :+1:
 * Mustache template handling :+1:
 * Karma setup :+1: (via [karma-webpack](https://github.com/webpack/karma-webpack))

### nice to have

 * CSS/SASS treated as first class :+1:
 * Images treated as first class :question:
 * Can use CommonJS and AMD modules in the same project :+1:
 * Gulp setup :+1:
 * SASS compilation :+1:
 * CSS included in bundle splitting :question:

## run

Install dependencies:

```sh
$ npm install
```

To use the webpack dev server:

```sh
$ gulp
```

Then open `http://localhost:8080/webpack-dev-server/index.html`. Try resizing the window to see various components in action.

Or you can dev without the server:

```sh
$ gulp build-dev
```

Then open `index.html`.

To build for prod:

```sh
$ gulp build-prod
```
