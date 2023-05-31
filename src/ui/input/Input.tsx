import { InputHTMLAttributes } from "react"
import './Input.scss'
import cn from 'classnames'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {

    const blockName = "input"

    return (
        <input
            {...props}
            className={cn(blockName, { [props.className!]: props.className })}
        />
    )
}