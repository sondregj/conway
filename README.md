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

Install by running `npm install @sondregj/conway`

```javascript
import { advance } from '@sondregj/conway'

const world = {
    cells: [
        [{ alive: false }, { alive: false }, { alive: true }],
        [{ alive: true }, { alive: false }, { alive: true }],
        [{ alive: false }, { alive: true }, { alive: true }],
    ],
}

const day1 = advance(world)
```

### Custom rule functions

You can also define custom rule functions.

```javascript
import { advance } from '@sondregj/conway'

const world = {
    cells: [
        [{ alive: false }, { alive: false }, { alive: true }],
        [{ alive: true }, { alive: false }, { alive: true }],
        [{ alive: false }, { alive: true }, { alive: true }],
    ],
}

const rules = (board, cell, x, y) => !cell.alive

const day1 = advance(world, rules)
```

### Initializing a board

A convenience function for initializing boards is also included.

```javascript
import { initializeBoard, advance } from '@sondregj/conway'

const genesis: Board = initializeBoard(64, 64, { random: true })

const day1 = advance(genesis)
```

### TypeScript types

The following TypeScript types are included.

```typescript
import { Board, BoardTick, Cell, RuleFunction } from '@sondregj/conway'

const world: Board = {
    cells: [
        [{ alive: false }, { alive: false }, { alive: true }],
        [{ alive: true }, { alive: false }, { alive: true }],
        [{ alive: false }, { alive: true }, { alive: true }],
    ],
}

const cell: Cell = { alive: true }

const advance: BoardTick = (board: Board): Board => board

const rules: RuleFunction = (board: Board, cell: Cell, x: number, y: number): boolean =>
    true
```

## License

MIT © 2019 Sondre Gjellestad
