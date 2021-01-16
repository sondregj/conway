import { Board, NeighborCounter } from './types'

export const checkAliveCount = (board: Board, indices: number[][]) =>
    indices
        .filter(
            ([xIndex, yIndex]) =>
                Math.min(xIndex, yIndex) >= 0 &&
                xIndex < board.cells[0].length &&
                yIndex < board.cells.length,
        )
        .map(([xIndex, yIndex]) => ({ x: xIndex, y: yIndex }))
        .map(target => board.cells[target.y][target.x])
        .reduce((sum, cell) => (cell.alive ? sum + 1 : sum), 0)

export const mooreNeighborhoodCount: NeighborCounter = (board, x, y) =>
    checkAliveCount(board, [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
    ])

export const vonNeumannNeighborhoodCount: NeighborCounter = (board, x, y) =>
    checkAliveCount(board, [[x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y]])

export const vonNeumannExtendedNeighborhoodCount: NeighborCounter = (board, x, y) =>
    checkAliveCount(board, [
        [x - 2, y],
        [x - 1, y],
        [x + 1, y],
        [x + 2, y],
        [x, y - 2],
        [x, y - 1],
        [x, y + 1],
        [x, y + 2],
    ])
