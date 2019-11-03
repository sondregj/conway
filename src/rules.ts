import { RuleFunction } from './types'
import { mooreNeighborhoodCount } from './neighborhood'

export const conwayRules: RuleFunction = (board, cell, x, y) => {
    const neighbors = mooreNeighborhoodCount(board, x, y)

    if (!cell.alive && neighbors === 3) {
        return true
    }

    if (neighbors < 2) {
        return false
    }

    if (neighbors > 3) {
        return false
    }

    return cell.alive
}
