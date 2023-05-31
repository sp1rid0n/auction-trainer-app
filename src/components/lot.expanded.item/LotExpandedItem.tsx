import { AuctionLotWithInfo } from '../../types/dto'
import './LotExpandedItem.scss'
import ArrowIcon from '../../icons/expander-arrow.svg'
import cn from 'classnames'
import { useState } from 'react'

type LotExpandedItem = {
    lotData: AuctionLotWithInfo
    className?: string
}

export const LotExpandedItem = ({ lotData, className }: LotExpandedItem) => {

    const [isExpanded, setIsExpanded] = useState(false)

    const blockName = 'lot-expanded-item'

    return (
        <div className={cn(blockName, className)}>
            <div 
                className={cn(
                    `${blockName}__head`, 
                    {
                        [`${blockName}__head--expanded`]: isExpanded
                    }
                )}
            >
                <div className={`${blockName}__name`}>
                    {lotData.name}
                </div>
                <div className={`${blockName}__status`}>
                    {lotData.status}
                </div>
                <img 
                    onClick={() => setIsExpanded(!isExpanded)}
                    src={ArrowIcon} 
                    alt={isExpanded ? 'Свернуть' : 'Развернуть'}
                    className={cn(
                        `${blockName}__expander-icon`, 
                        {
                            [`${blockName}__expander-icon--up`]: isExpanded
                        }
                    )}
                />
            </div>
            {isExpanded && (
                <>
                    <div 
                        className={`${blockName}__info`}
                    >
                        <div 
                            className={`${blockName}__info-item`}
                        >
                            <div 
                                className={`${blockName}__info-item-label`}
                            >
                                Тип:
                            </div>
                            <div
                                className={`${blockName}__info-item-value`}
                            >
                                {lotData.lotType}
                            </div>
                        </div>
                        <div 
                            className={`${blockName}__info-item`}
                        >
                            <div 
                                className={`${blockName}__info-item-label`}
                            >
                                Начальная цена:
                            </div>
                            <div
                                className={`${blockName}__info-item-value`}
                            >
                                {lotData.startingPrice}
                            </div>
                        </div>
                        <div 
                            className={`${blockName}__info-item`}
                        >
                            <div 
                                className={`${blockName}__info-item-label`}
                            >
                                Предельная цена:
                            </div>
                            <div
                                className={`${blockName}__info-item-value`}
                            >
                                {lotData.marginalPrice}
                            </div>
                        </div>
                    </div>
                    {Array.isArray(lotData.bids) && lotData.bids.length > 0 &&
                        <div className={`${blockName}__bids-container`}>
                            {lotData.bids.map(bid => (
                                <div className={`${blockName}__bid bid`}>
                                    <div className='bid__user-name'>
                                        {`${bid.userName} -`}
                                    </div>
                                    <div className='bid__value'>
                                        {bid.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </>
            )}
        </div>
    )
}