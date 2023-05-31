import { useState } from 'react'
import { LotSimplifiedItem } from '../../components/lot.simplified.item/LotSimplifiedItem'
import { useBoolean } from '../../hooks/useBoolean'
import { AuctionLot, AuctionLotSimplified } from '../../types/dto'
import { Modal } from '../../ui/modal/Modal'
import { PrimaryButton } from '../../ui/primary.button/PrimaryButton'
import './AuctionForParticipant.scss'
import cn from 'classnames'
import { FormField } from '../../components/form.field/FormField'

const mockedLots: AuctionLotSimplified[] = [
    {
        id: 1,
        name: "Лот 1",
        status: 'Завершен',
        winner: {
            userName: "team1",
            bid: 53
        }
    },
    {
        id: 2,
        name: "Лот 2",
        status: 'Текущий',
    },
    {
        id: 3,
        name: "Лот 3",
        status: 'Не начат',
    },
]

const mockedCurrentLot: AuctionLot = {
    id: 2,
    name: "Лот 2",
    lotType: "Тип 1",
    startingPrice: 50,
    marginalPrice: 100
}

export const AuctionForParticipant = () => {

    const { value: isCreateBidModalOpened, toggle: toggleCreateBidModal} = useBoolean()

    const [bid, setBid] = useState('')

    const onCloseModal = () => {
        setBid('')
        toggleCreateBidModal()
    }

    const blockName = "auction-for-participant"

    return (
        <div 
            className={cn(
                "page-container", 
                "page-container--low-paddings", 
                blockName
            )}
        >
            <div className={`${blockName}__content`}>
                <div className={`${blockName}__head`}>
                    <div className={`${blockName}__balance ${blockName}__head-info`}>
                        <div className={`${blockName}__balance-label ${blockName}__head-info-label`}>
                            Баланс:
                        </div>
                        <div className={`${blockName}__balance-value ${blockName}__head-info-value`}>
                            1000
                        </div>
                    </div>
                    <div className={`${blockName}__timer ${blockName}__head-info`}>
                        <div 
                            className={`${blockName}__timer-label ${blockName}__head-info-label`}
                        >
                            До конца торгов:
                        </div>
                        <div 
                            className={`${blockName}__timer-value ${blockName}__head-info-value`}
                        >
                            1:30
                        </div>
                    </div>
                </div>
                <div className={`${blockName}__lots-container`}>
                    {mockedLots.map(lot => (
                        <LotSimplifiedItem 
                            key={lot.id}
                            lotData={lot}
                            className={`${blockName}__lot`}
                        />
                    ))}
                </div>
                <div className={`${blockName}__current-lot auction-for-participant-current-lot`}>
                    <div 
                        className='auction-for-participant-current-lot__label'
                    >
                        Текущий
                    </div>
                    <div className='auction-for-participant-current-lot__name'>
                        {mockedCurrentLot.name}
                    </div>
                    <div className='auction-for-participant-current-lot__info'>
                        {`Тип: ${mockedCurrentLot.lotType}`}
                    </div>
                    <div className='auction-for-participant-current-lot__info'>
                        {`Стартовая цена: ${mockedCurrentLot.startingPrice}`}
                    </div>
                    <div className='auction-for-participant-current-lot__info'>
                        {`Предельная цена: ${mockedCurrentLot.marginalPrice}`}
                    </div>
                </div>
                <PrimaryButton 
                    text='Сделать ставку'
                    onClick={toggleCreateBidModal}
                />
                <Modal
                    isOpen={isCreateBidModalOpened}
                    closeModal={onCloseModal}
                >
                    <FormField 
                        label='Ставка'
                        value={bid}
                        type='number'
                        onChange={e => setBid(e.target.value)}
                        className={`${blockName}__bid-input`}
                    />
                    <PrimaryButton 
                        text='Готово'
                        onClick={onCloseModal}
                    />
                </Modal>
            </div>
        </div>
    )
}