import { BoardTick } from './types'

import { conwayRules } from './rules'

export const advance: BoardTick = (board, rules = conwayRules) => ({
    cells: board.cells.map((row, yIndex) =>
        row
            .map((cell, xIndex) => rules(board, cell, xIndex, yIndex))
            .map(alive => ({ alive })),
    ),
})
