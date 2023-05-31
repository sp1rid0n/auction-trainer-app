import './CreateAuctionPage.scss'
import { useState } from "react"
import { FormField } from "../../components/form.field/FormField"
import { PrimaryButton } from '../../ui/primary.button/PrimaryButton'
import { Modal } from '../../ui/modal/Modal'
import { useBoolean } from '../../hooks/useBoolean'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { PageKeys, navItems } from '../../navigation/nav.items'
import { AuctionLot } from '../../types/dto'
import cn from 'classnames'
import { LotEditableItem } from '../../components/lot.editable.item/LotEditableItem'



export const CreateAuctionPage = () => {

    const [auctionLots, setAuctionLots] = useState<AuctionLot[]>([])

    const { value: isOpen, toggle } = useBoolean()

    // Форма создания лота
    const [editableLotId, setEditableLotId] = useState<string | null>(null)

    const [nextLotName, setNextLotName] = useState('')
    const [nextLotType, setNextLotType] = useState('')
    const [nextLotStartingPrice, setNextLotStartingPrice] = useState('')
    const [nextLotMarginalPrice, setNextLotMarginalPrice] = useState('')

    const navigate = useNavigate()

    const createAuctionLotSubmit = () => {
        if (!Boolean(editableLotId)) {
            setAuctionLots(lots => {
                return [...lots, {
                    id: nanoid(),
                    name: nextLotName,
                    lotType: nextLotType,
                    startingPrice: Number(nextLotStartingPrice),
                    marginalPrice: Number(nextLotMarginalPrice)
                }]
            })
        }
        else {
            setAuctionLots(lots => {
                const result = lots.map(lot => {
                    if (lot.id === editableLotId) {
                        return {
                            ...lot,
                            name: nextLotName,
                            lotType: nextLotType,
                            startingPrice: Number(nextLotStartingPrice),
                            marginalPrice: Number(nextLotMarginalPrice)
                        }
                    }
                    return lot
                })
                return result
            })
        }
        closeModal()
    }

    const closeModal = () => {
        setNextLotName('')
        setNextLotType('')
        setNextLotStartingPrice('')
        setNextLotMarginalPrice('')
        setEditableLotId(null)
        toggle()
    }

    const createAuctionSubmit = () => {
        // Моковый id аукциона
        const auctionId = nanoid()
        navigate(navItems[PageKeys.AuctionForCreator]!.getPageUrl({ auctionId }))
    }

    const onEditAuctionLot = (item: AuctionLot) => {
        setNextLotName(item.name)
        setNextLotType(item.lotType)
        setNextLotStartingPrice(String(item.startingPrice))
        setNextLotMarginalPrice(String(item.marginalPrice))
        setEditableLotId(String(item.id))
        toggle()
    }

    // Тут должен быть запрос к апи
    const onDeleteAuctionLot = (item: AuctionLot) => {
        setAuctionLots(prevLots => {
            const result = prevLots.filter(lot => lot.id !== item.id)
            return result
        })
    }

    const blockName = 'create-auction-page'

    return (
        <div className={cn('page-container', 'page-container--low-paddings', blockName)}>
            <div className={`${blockName}__content`}>
                <div className="auction-params">
                    <div className="auction-params__title">
                        Параметры
                    </div>
                    <FormField 
                        label="Время(мин.)"
                        containerClassName="auction-params__input"
                        type='number'
                    />
                    <FormField 
                        label="Кол-во команд"
                        containerClassName="auction-params__input"
                        type='number'
                    />
                </div>
                <div className="auction-lots-container">
                    {auctionLots.map((auctionLot, index) => (
                        <LotEditableItem 
                            key={auctionLot.id}
                            itemData={auctionLot}
                            className='auction-lot'
                            onEditClick={() => onEditAuctionLot(auctionLot)}
                            onDeleteClick={() => onDeleteAuctionLot(auctionLot)}
                        />
                    ))}
                    <PrimaryButton 
                        text='+'
                        viewStyle='gray'
                        onClick={toggle}
                    />
                </div>
                <PrimaryButton 
                    text='Готово'
                    onClick={createAuctionSubmit}
                />
                <Modal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    contentContainerClassName='create-auction-form'
                >
                    <FormField 
                        label='Название'
                        containerClassName='create-auction-form__input'
                        value={nextLotName}
                        onChange={(ev) => setNextLotName(ev.target.value)}
                    />
                    <FormField 
                        label='Тип'
                        containerClassName='create-auction-form__input'
                        value={nextLotType}
                        onChange={(ev) => setNextLotType(ev.target.value)}
                    />
                    <FormField 
                        label='Стартовая цена'
                        containerClassName='create-auction-form__input'
                        value={nextLotStartingPrice}
                        onChange={(ev) => setNextLotStartingPrice(ev.target.value)}
                        type='number'
                    />
                    <FormField 
                        label='Предельная цена'
                        containerClassName='create-auction-form__input'
                        value={nextLotMarginalPrice}
                        onChange={(ev) => setNextLotMarginalPrice(ev.target.value)}
                        type='number'
                    />
                    <PrimaryButton 
                        text='Готово'
                        className='create-auction-form__button'
                        onClick={createAuctionLotSubmit}
                    />
                </Modal>
            </div>
        </div>
    )
}