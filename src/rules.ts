import { RuleFunction } from './types'
import { neighborCount } from './utils'

export const conwayRules: RuleFunction = (board, cell, x, y) => {
    const neighbors = neighborCount(board, x, y)

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
