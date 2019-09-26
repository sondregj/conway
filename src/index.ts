import { Board, BoardTick, Cell } from './types'

interface BoardInitializerConfig {
    random?: boolean
}

export const initializeBoard = (
    width: number,
    height: number,
    config: BoardInitializerConfig = {},
): Board => {
    const { random } = config

    const cells: Cell[][] = []

    for (let y = 0; y < height; y++) {
        cells[y] = []

        for (let x = 0; x < width; x++) {
            cells[y][x] = {
                alive: random ? Math.random() > 0.5 : false,
            }
        }
    }

    return { width, height, cells }
}

export const neighborCount = (board: Board, x: number, y: number): number => {
    const targets = [
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
                xIndex < board.width &&
                yIndex < board.height,
        )
        .map(([xIndex, yIndex]) => ({ x: xIndex, y: yIndex }))

    return targets
        .map(target => board.cells[target.y][target.x])
        .reduce((sum, cell) => (cell.alive ? sum + 1 : sum), 0)
}

export const advance: BoardTick = board => {
    const { width, height } = board

    const cells = board.cells.map((row, yIndex) =>
        row.map((cell, xIndex) => {
            const neighbors: number = neighborCount(board, xIndex, yIndex)

            if (!cell.alive && neighbors === 3) {
                return { alive: true }
            }

            if (neighbors < 2) {
                return { alive: false }
            }

            if (neighbors > 3) {
                return { alive: false }
            }

            return { ...cell }
        }),
    )

    return { width, height, cells }
}

export { Board, BoardTick, Cell } from './types'
