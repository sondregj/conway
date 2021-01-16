import { Board, mooreNeighborhoodCount } from '../src'

describe('Utility functions', () => {
    test('Neighbor count function works as expected', () => {
        const world: Board = {
            cells: [
                [{ alive: false }, { alive: false }, { alive: true }],
                [{ alive: true }, { alive: false }, { alive: true }],
                [{ alive: false }, { alive: true }, { alive: true }],
            ],
        }

        const count = mooreNeighborhoodCount(world, 1, 1)

        expect(count).toEqual(5)
    })
})
