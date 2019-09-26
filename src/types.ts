// Data types
export interface Cell {
    alive: boolean
}

export interface Board {
    width: number
    height: number

    cells: Cell[][]
}

// Transform functions
export type BoardTick = (board: Board) => Board
