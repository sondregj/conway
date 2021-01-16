import { Board, Cell, Pattern } from './types'

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

    return { cells }
}

export const applyPattern = (
    board: Board,
    pattern: Pattern,
    x: number,
    y: number,
): Board => board
