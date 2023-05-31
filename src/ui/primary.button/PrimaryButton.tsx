import { ButtonHTMLAttributes } from "react"
import './PrimaryButton.scss'
import cn from 'classnames'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    viewStyle?: 'normal' | 'gray'
}

export const PrimaryButton = ({ text, viewStyle = 'normal', ...buttonProps }: ButtonProps) => {
    
    const blockName = 'primary-button'

    return (
        <button
            {...buttonProps}
            className={cn(
                blockName,
                {
                    [buttonProps.className!]: buttonProps.className
                },
                {
                    [`${blockName}--${viewStyle}`]: viewStyle
                }
            )}
        >
            {text}
        </button>
    )
}