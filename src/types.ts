export interface Cell {
    alive: boolean
}

export interface Board {
    cells: Cell[][]
}

export interface Pattern extends Board {
    name: string
    cells: Cell[][]
}

export type BoardTick = (board: Board, ...args: any[]) => Board

export type RuleFunction = (board: Board, cell: Cell, x: number, y: number) => boolean
export type NeighborCounter = (board: Board, x: number, y: number) => number
