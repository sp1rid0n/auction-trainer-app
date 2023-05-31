import './AuctionForCreatorPage.scss'
import { useParams } from 'react-router-dom'
import cn from 'classnames'
import { useState } from 'react'
import { AuctionLotWithInfo } from '../../types/dto'
import { LotExpandedItem } from '../../components/lot.expanded.item/LotExpandedItem'
import { PrimaryButton } from '../../ui/primary.button/PrimaryButton'

const auctionLots: AuctionLotWithInfo[] = [
    {
        id: "1",
        name: "Лот 1",
        lotType: "Тип 1",
        startingPrice: 50,
        marginalPrice: 100,
        status: "Текущий",
        bids: [
            {
                userName: "team1",
                value: 58
            },
            {
                userName: "team2",
                value: 70
            },
            {
                userName: "team2",
                value: 79
            },
        ]
    },
    {
        id: "2",
        name: "Лот 2",
        lotType: "Тип 1",
        startingPrice: 100,
        marginalPrice: 150,
        status: "Не начат",
        bids: []
    },
    {
        id: "3",
        name: "Лот 3",
        lotType: "Тип 1",
        startingPrice: 200,
        marginalPrice: 500,
        status: "Не начат",
        bids: []
    },
]

// Мок
const lotsCount = 3

export const AuctionForCreatorPage = () => {

    const [currentLotIndex, setCurrentLotIndex] = useState(1)

    const { auctionId } = useParams<{auctionId: string}>()

    const blockName = 'auction-for-creator-page'

    return (
        <div 
            className={cn("page-container page-container--low-paddings", blockName)}
        >
            <div className={`${blockName}__content`}>
                <div className={`${blockName}__head`}>
                    <div className={`${blockName}__access-code`}>
                        <div 
                            className={`${blockName}__access-code-label`}
                        >
                            Код доступа:
                        </div>
                        <div 
                            className={`${blockName}__access-code-value`}
                        >
                            {`${auctionId}`}
                        </div>
                    </div>
                    <div className={`${blockName}__lots-counter`}>
                        {`${currentLotIndex}/${lotsCount}`}
                    </div>
                </div>
                <div className={`${blockName}__lots-container`}>
                    {auctionLots.map(lot => (
                        <LotExpandedItem
                            key={lot.id} 
                            lotData={lot}
                            className={`${blockName}__lot-item`}
                        />
                    ))}
                </div>
                <PrimaryButton 
                    text='Начать лот'
                />
            </div>
        </div>
    )
}