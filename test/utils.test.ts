import { Board, neighborCount } from '../src'

test('Neighbor count function works as expected', () => {
    const world: Board = {
        cells: [
            [{ alive: false }, { alive: false }, { alive: true }],
            [{ alive: true }, { alive: false }, { alive: true }],
            [{ alive: false }, { alive: true }, { alive: true }],
        ],
    }

    const count = neighborCount(world, 1, 1)

    expect(count).toStrictEqual(5)
})
