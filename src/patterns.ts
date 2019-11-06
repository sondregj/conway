import { Board } from './types'
import { Pattern } from './types'

export const applyPattern = (
    board: Board,
    pattern: Board,
    x: number,
    y: number,
): Board => {
    return {
    }
}

export const glider: Pattern = {
    cells: [
        [{ alive: false }, { alive: true }, { alive: false }],
        [{ alive: false }, { alive: false }, { alive: true }],
        [{ alive: true }, { alive: true }, { alive: true }],
    ],
}
