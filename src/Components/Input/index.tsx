import React from "react";

type Props = Partial<HTMLInputElement>

const Input = ({ autofocus, type, name, className, id, placeholder }: Props): JSX.Element => {
    return (
        <input autoFocus={autofocus} type={type} name={name} id={id} className={className} placeholder={placeholder} />
    )
}

export default Input