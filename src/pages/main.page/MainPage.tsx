import './MainPage.scss'
import { PrimaryButton } from "../../ui/primary.button/PrimaryButton";
import { useBoolean } from '../../hooks/useBoolean';
import { Modal } from '../../ui/modal/Modal';
import { FormField } from '../../components/form.field/FormField';
import { useNavigate } from 'react-router-dom'
import { PageKeys, navItems, pagesLink } from '../../navigation/nav.items';
import { nanoid } from 'nanoid';
import cn from 'classnames'

// Моковое id аукциона
const mockedAuctionId = nanoid()

export const MainPage = () => {

    const { value: isJoinModalOpen, toggle: toggleModal } = useBoolean()

    const navigate = useNavigate()

    const joinAuctionButtonHandler = () => {
        navigate(navItems[PageKeys.AuctionForParticipant]!.getPageUrl({ auctionId: mockedAuctionId }))
    }

    const blockName = 'main-page'

    return (
        <div className={cn("page-container", blockName)}>
            <div className="main-page-content">
                <div className="history-placeholder" />
                <div className="main-page-buttons">
                    <PrimaryButton 
                        text="Создать аукцион"
                        className='main-page-buttons__button'
                        onClick={() => navigate(pagesLink[PageKeys.CreateAuction])}
                    />
                    <PrimaryButton 
                        text="Присоединиться"
                        className='main-page-buttons__button'
                        onClick={toggleModal}
                    />
                </div>
            </div>
            <Modal
                isOpen={isJoinModalOpen}
                closeModal={toggleModal}
            >
                <FormField 
                    label='Код'
                    className='main-page-auction-code-input'
                />
                <PrimaryButton 
                    text='Готово'
                    onClick={joinAuctionButtonHandler}
                />
            </Modal>
        </div>
    )
}