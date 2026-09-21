import { advance, Board, RuleFunction } from '../src'

describe('Advance function', () => {
    test('Function works as expected', () => {
        const world: Board = {
            cells: [
                [{ alive: false }, { alive: false }, { alive: true }],
                [{ alive: true }, { alive: false }, { alive: true }],
                [{ alive: false }, { alive: true }, { alive: true }],
            ],
        }

        const rules: RuleFunction = (board, cell, x, y) => !cell.alive

        const day1 = advance(world, rules)

        const expected: Board = {
            cells: [
                [{ alive: true }, { alive: true }, { alive: false }],
                [{ alive: false }, { alive: true }, { alive: false }],
                [{ alive: true }, { alive: false }, { alive: false }],
            ],
        }

        expect(day1).toEqual(expected)
    })
})
