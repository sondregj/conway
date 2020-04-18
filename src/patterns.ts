import { Board } from './types'
import { Pattern } from './types'

export const applyPattern = (
    board: Board,
    pattern: Board,
    x: number = 0,
    y: number = 0,
): Board => {
    if (x > board.cells.length - 1 || y > board.cells[0].length - 1) {
        throw Error('Index out of bounds')
    }

    const xMax = x + pattern.cells.length
    const yMax = y + pattern.cells[0].length

    return {
        cells: board.cells.map((row, yIndex) =>
            row.map((cell, xIndex) => ({
                alive:
                    xIndex >= x && xIndex < xMax && yIndex >= y && yIndex < yMax
                        ? pattern.cells[yIndex - y][xIndex - x].alive
                        : cell.alive,
            })),
        ),
    }
}

export const glider: Pattern = {
    name: 'Glider',
    cells: [
        [{ alive: false }, { alive: true }, { alive: false }],
        [{ alive: false }, { alive: false }, { alive: true }],
        [{ alive: true }, { alive: true }, { alive: true }],
    ],
}
