export interface AuctionLot {
    id: string | number
    name: string
    lotType: string
    startingPrice: number
    marginalPrice: number
}

type LotStatus = 'Текущий' | 'Не начат' | 'Завершен'

export interface Bid {
    userName: string
    value: number
}

export interface AuctionLotWithInfo extends AuctionLot {
    status: LotStatus
    bids: Bid[]
}

export interface AuctionLotResult {
    id: string | number
    name: string
    winner: string
    bid: number
    efficiency: number
}

export interface AuctionLotSimplified {
    id: string | number
    name: string
    winner?: {
        userName: string
        bid: number
    } | null
    status: LotStatus
}