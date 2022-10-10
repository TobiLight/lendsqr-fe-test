import React from "react";

type Props = HTMLInputElement

const Input = ({type, name, className, id, }: Props): JSX.Element => {
    return (
        <input type={type} name={name} id={id} className={className} />
    )
}

export default Input