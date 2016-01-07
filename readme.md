# fetchman [![Build Status](https://travis-ci.org/niksrc/fetchman.svg?branch=master)](https://travis-ci.org/niksrc/fetchman)

> My stellar module


## Install

```
$ npm install --save fetchman
```


## Usage

```js
const fetchman = require('fetchman');

fetchman('unicorns');
//=> 'unicorns & rainbows'
```


## API

### fetchman(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global fetchman
```

```
$ fetchman --help

  Usage
    fetchman [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ fetchman
    unicorns & rainbows
    $ fetchman ponies
    ponies & rainbows
```


## License

MIT © [Nikhil Srivastava](http://niksrc.github.io)
