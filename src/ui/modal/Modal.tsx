import ReactDOM from 'react-dom'
import './Modal.scss'
import cn from 'classnames'

type ModalProps = {
    isOpen: boolean
    closeModal: () => void
    children: React.ReactNode
    contentContainerClassName?: string
}

const portalContainer = document.getElementById("modal-portal")!

export const Modal = ({ isOpen, closeModal, children, contentContainerClassName }: ModalProps) => {

    const renderModal = () => {

        return (
            <div 
                className="modal-container" 
                onClick={closeModal}
            >
                <div 
                    className={cn("modal", contentContainerClassName)} 
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        )
    }

    if (!isOpen) {
        return null
    }

    return ReactDOM.createPortal(renderModal(), portalContainer)
}