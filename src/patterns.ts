import { Pattern } from './types'

export const glider: Pattern = {
    cells: [
        [{ alive: false }, { alive: true }, { alive: false }],
        [{ alive: false }, { alive: false }, { alive: true }],
        [{ alive: true }, { alive: true }, { alive: true }],
    ],
}
