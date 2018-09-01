# easy-fork [![Build Status](https://travis-ci.com/Hoishin/easy-fork.svg?branch=master)](https://travis-ci.com/Hoishin/easy-fork) [![codecov](https://codecov.io/gh/Hoishin/easy-fork/badge.svg?branch=master)](https://codecov.io/gh/Hoishin/easy-fork?branch=master)

> Easily fork node process to run scripts concurrently

## Why

Sometimes you want to run multiple node processes at once. For example

- Type-checking command like `tsc --project src`
- Bundler command like `parcel src --out-dir build`
- Server starting command like `onchange build --initial -- node build/start.js`

There are several ways to solve this:

- Make npm/yarn scripts and run them independently
	- Probably the "healthy" way. But it is annoying to open terminals and run these command one by one.

- Gulp
	- Using exposed APIs is usually takes more effort than CLI commands.

- `command1 & command2 & command3 & ...`
	- Sending `SIGTERM` does not kill all processes.

With `easy-fork`, you can pass multiple CLI commands to run them concurrently, and now all you have to do is run the script.

## Install

```
$ npm install easy-fork
```
or
```
$ yarn add easy-fork
```


## Usage

```js
const fork = require('easy-fork');

fork('tsc --watch --project ./src/client');
fork('tsc --watch --project ./src/server');
fork('parcel serve ./src/client/index.html --out-dir ./build/client');
fork('tcm --watch --camelCase --pattern ./src/client/**/*.scss')
fork('onchange ./build/server --initial -- node ./build/server')
```


## API

### easyFork(command)

#### command

Type: `string`

Command to run. Must be locally installed node CLI.

## License

MIT © [Hoishin](https://github.com/hoishin)
