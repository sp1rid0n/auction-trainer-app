import { AuctionLot } from "../../types/dto"
import './LotEditableItem.scss'
import CrossIcon from '../../icons/cross.svg'
import cn from 'classnames'

interface LotEditableItemProps {
    itemData: AuctionLot
    onEditClick: () => void
    onDeleteClick: () => void
    className?: string
}

export const LotEditableItem = ({ 
    itemData, 
    onEditClick, 
    onDeleteClick, 
    className 
}: LotEditableItemProps) => {

    const onCrossClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation()
        onDeleteClick()
    }

    const blockName = 'lot-editable-item'

    return (
        <div className={cn(blockName, className)} onClick={onEditClick}>
            <div className={`${blockName}__name`}>
                {itemData.name}
            </div>
            <div className={`${blockName}__info`}>
                <div className={`${blockName}__type ${blockName}__info-item`}>
                    {itemData.lotType}
                </div>
                <div className={`${blockName}__starting-price ${blockName}__info-item ${blockName}__price`}>
                    {itemData.startingPrice}
                </div>
                <div className={`${blockName}__starting-price ${blockName}__info-item ${blockName}__price`}>
                    {itemData.marginalPrice}
                </div>
            </div>
            <img 
                src={CrossIcon} 
                alt="Close"
                onClick={onCrossClick}
                className={`${blockName}__cross-icon`} 
            />
        </div>
    )
}