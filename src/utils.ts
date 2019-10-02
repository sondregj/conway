import { Board } from './types'

export const neighborCount = (board: Board, x: number, y: number): number => {
    return [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
    ]
        .filter(
            ([xIndex, yIndex]) =>
                Math.min(xIndex, yIndex) >= 0 &&
                xIndex < board.cells[0].length &&
                yIndex < board.cells.length,
        )
        .map(([xIndex, yIndex]) => ({ x: xIndex, y: yIndex }))
        .map(target => board.cells[target.y][target.x])
        .reduce((sum, cell) => (cell.alive ? sum + 1 : sum), 0)
}
