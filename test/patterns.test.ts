import { applyPattern, glider } from '../src/patterns'
import { Board } from '../src'

test('Neighbor count function works as expected', () => {
    const world: Board = {
        cells: [
            [
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
            ],
            [
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
            ],
            [
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
            ],
            [
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
            ],
            [
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
            ],
        ],
    }

    const afterApply = applyPattern(world, glider, 1, 1)

    const expectedAfterApply: Board = {
        cells: [
            [
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
            ],
            [
                { alive: false },
                { alive: false },
                { alive: true },
                { alive: false },
                { alive: false },
            ],
            [
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: true },
                { alive: false },
            ],
            [
                { alive: false },
                { alive: true },
                { alive: true },
                { alive: true },
                { alive: false },
            ],
            [
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
                { alive: false },
            ],
        ],
    }

    expect(afterApply).toStrictEqual(expectedAfterApply)
})
