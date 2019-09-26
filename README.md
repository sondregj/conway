<h1 align="center">
  <span style="font-size: 100px;">🧫</span>
  <br>
  <br>
  Conway
</h1>

<h4 align="center">Conway's Game of Life</h4>

<p align="center">
  <a href="https://travis-ci.org/sondregj/conway">
    <img alt="Travis Build Status" src="https://img.shields.io/travis/sondregj/conway.svg?style=flat-square">
  </a>

  <a href="https://npmjs.com/conway">
  	<img alt="npm (latest)" src="https://img.shields.io/npm/v/conway/latest.svg?style=flat-square">
  </a>

  <a href="https://npmjs.com/conway">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/conway.svg?style=flat-square">
  </a>

  <a href="https://github.com/sondregj/conway">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/sondregj/conway.svg?style=flat-square">
  </a>

  <a href="https://github.com/sondregj/conway">
    <img alt="License" src="https://img.shields.io/github/license/sondregj/conway.svg?style=flat-square">
  </a>

  <a href="https://github.com/carloscuesta/gitmoji">
  <img alt="Gitmoji" src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square">
  </a>
</p>

A simple Game of Life implementation, in TypeScript.

## Usage

```javascript
import { initializeBoard, advance } from '@sondregj/conway'

const board = initializeBoard(30, 30, { random: true })

const nextStep = advance(board)
```

## License

MIT © 2019 Sondre Gjellestad
