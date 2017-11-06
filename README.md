# Docs

This are docs built using `Sphinx` from `source` folder on master/dev.

## How

To contribute, please send your PRs to master/dev branches, editing the `rst` files in `source` folder.

## Build

### Requirements

- Node v4.2.0 or newer (to support `jsdoc`)
- Python (v2 and v3 are both supported)

```js
npm i -g jsdoc
```

```py
pip install sphinx sphinx-js sphinx-rtd-theme
```

From root on `master` branch:
```
$ cd source
$ sphinx-build -b html . ../docs
```

## Deploy

Deployment onto `gh-pages` requires a different approach from the classic push:

```sh
$ git subtree push --prefix docs origin gh-pages
```
This command will push only the `docs` folder onto the `gh-pages` branch, exposing the `index.html` for Github to discover.


## References

[Using Subtree to deploy docs](https://gist.github.com/cobyism/4730490)

[Solving the github-pages issues of ignoring underscore directories](https://github.com/michaeljones/sphinx-to-github)
