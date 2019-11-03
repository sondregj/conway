import { advance, Board } from '../src'

describe('Advance function', () => {
    test('Function works as expected', () => {
        const world: Board = {
            cells: [
                [{ alive: false }, { alive: false }, { alive: true }],
                [{ alive: true }, { alive: false }, { alive: true }],
                [{ alive: false }, { alive: true }, { alive: true }],
            ],
        }

        const day1 = advance(world)

        const expected: Board = {
            cells: [
                [{ alive: false }, { alive: true }, { alive: false }],
                [{ alive: false }, { alive: false }, { alive: true }],
                [{ alive: false }, { alive: true }, { alive: true }],
            ],
        }

        expect(day1).toEqual(expected)
    })
})
