import { AuctionLotResult } from "../../types/dto"
import './LotResultItem.scss'
import cn from 'classnames'

type LotResultItemProps = {
    lotData: AuctionLotResult
    className?: string
}

export const LotResultItem = ({ lotData, className }: LotResultItemProps) => {

    const blockName = 'lot-result-item'

    return (
        <div className={cn(blockName, className)}>
            <div className={`${blockName}__name`}>
                {lotData.name}
            </div>
            <div className={`${blockName}__info`}>
                <div className={`${blockName}__info-block lot-result-item-info-block`}>
                    <div className="lot-result-item-info-block__label">
                        Победитель:
                    </div>
                    <div className="lot-result-item-info-block__value">
                        {lotData.winner}
                    </div>
                </div>
                <div className={`${blockName}__info-block lot-result-item-info-block`}>
                    <div className="lot-result-item-info-block__label">
                        Ставка:
                    </div>
                    <div className="lot-result-item-info-block__value">
                        {lotData.bid}
                    </div>
                </div>
                <div className={`${blockName}__info-block lot-result-item-info-block`}>
                </div>
            </div>
        </div>
    )
}