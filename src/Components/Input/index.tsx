import React, { ChangeEventHandler } from "react";

type Props = Partial<HTMLInputElement> & {
    ariaLabel: string | undefined
    handleChange: ChangeEventHandler<HTMLInputElement> | undefined
}

const Input = ({ ariaLabel, autofocus, type, name, className, id, placeholder, required, value, handleChange }: Props): JSX.Element => {
    return (
        <input aria-label={ariaLabel} required={required} autoFocus={autofocus} type={type} name={name} id={id} className={className} placeholder={placeholder} value={value} onChange={handleChange} />
    )
}

export default Input