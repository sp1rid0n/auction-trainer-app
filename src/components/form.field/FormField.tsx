import { InputProps } from "../../ui/input/Input"
import './FormField.scss'
import { Input } from '../../ui/input/Input'
import cn from 'classnames'

interface FormFieldProps extends InputProps {
    label: string
    containerClassName?: string
}

export const FormField = ({ label, containerClassName, ...inputProps}: FormFieldProps) => {

    const blockName = 'form-field'

    return (
        <label className={cn(blockName, containerClassName)}>
            <div className={`${blockName}__label`}>{label}</div>
            <Input {...inputProps}/>
        </label>
    )
}