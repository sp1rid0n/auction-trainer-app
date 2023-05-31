import './AuctionResultsPage.scss'
import cn from 'classnames'
import { PrimaryButton } from '../../ui/primary.button/PrimaryButton'
import { AuctionLotResult } from '../../types/dto'
import { LotResultItem } from '../../components/lot.result.item/LotResultItem'
import { useNavigate } from 'react-router-dom'
import { PageKeys, navItems } from '../../navigation/nav.items'

const lotsItems: AuctionLotResult[] = [
    {
        id: "1",
        name: "Лот 1",
        winner: "team1",
        bid: 69,
        efficiency: 70,
    },
    {
        id: "2",
        name: "Лот 2",
        winner: "team2",
        bid: 85,
        efficiency: 61,
    },
    {
        id: "3",
        name: "Лот 2",
        winner: "team1",
        bid: 110,
        efficiency: 38,
    },
]

export const AuctionResultsPage = () => {

    const navigate = useNavigate()

    const blockName = 'auction-results-page'

    return (
        <div className={cn("page-container", "page-container--low-paddings", blockName)}>
            <div className={`${blockName}__content`}>
                <h1 className={`${blockName}__title`}>Сводка</h1>
                <div className={`${blockName}__lots-container`}>
                    {lotsItems.map(lot => (
                        <LotResultItem 
                            key={lot.id}
                            lotData={lot}
                            className={`${blockName}__lot`}
                        />
                    ))}
                </div>
                <PrimaryButton 
                    text='Вернуться на главную'
                    onClick={() => navigate(navItems[PageKeys.Main]!.getPageUrl())}
                />
            </div>
        </div>
    )
}