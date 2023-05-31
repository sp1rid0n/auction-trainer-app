import { AuctionLotSimplified } from '../../types/dto'
import './LotSimplifiedItem.scss'
import cn from 'classnames'

interface LotSimplifiedItemProps {
    lotData: AuctionLotSimplified
    className?: string
}

export const LotSimplifiedItem = ({ lotData, className }: LotSimplifiedItemProps) => {

    const blockName = 'lot-simplified-item'

    return (
        <div className={cn(blockName, className)}>
            <div className={`${blockName}__head`}>
                <div className={`${blockName}__name`}>
                    {lotData.name}
                </div>
                <div className={`${blockName}__status`}>
                    {lotData.status}
                </div>
            </div>
            {lotData.status === 'Завершен' && lotData.winner && 
                <div className={`${blockName}__winner`}>
                    {`Победитель: ${lotData.winner.userName} - ${lotData.winner.bid}`}
                </div>
            }
        </div>
    )
}