<h1 align="center">
  <span style="font-size: 128px;">🧫</span>

  <br>
  <br>

Conway

</h1>

<h4 align="center">Cellular Automata</h4>

<p align="center">
  <a href="https://npmjs.com/conway">
  	<img alt="npm (latest)" src="https://img.shields.io/npm/v/@sondregj/conway/latest.svg?style=flat-square">
  </a>

  <a href="https://npmjs.com/conway">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/@sondregj/conway.svg?style=flat-square">
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

A simple cellular automaton implementation, in TypeScript.

## Usage

```javascript
import { initializeBoard, advance } from '@sondregj/conway'

const board = initializeBoard(30, 30, { random: true })

const nextStep = advance(board)
```

## License

MIT © 2019 Sondre Gjellestad
