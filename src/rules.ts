import { RuleFunction, Cell } from './types'
import { mooreNeighborhoodCount } from './neighborhood'

const applyNeighbors = (
    neighbors: number,
    cell: Cell,
    rules: (neighbors: number, cell: Cell) => boolean,
) => rules(neighbors, cell)

export const conwayRules: RuleFunction = (board, cell, x, y) =>
    applyNeighbors(mooreNeighborhoodCount(board, x, y), cell, (neighbors, cell) =>
        !cell.alive && neighbors === 3
            ? true
            : neighbors < 2
            ? false
            : neighbors > 3
            ? false
            : cell.alive,
    )
