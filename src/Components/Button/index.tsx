type Props = {
    btnText: string
    type: "button" | "submit" | "reset" | undefined
    handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined
} & Partial<HTMLButtonElement>

const Button = ({ btnText, type, id, name, className, handleClick }: Props) => {
    return (
        <button type={type} id={id} name={name} className={className} onClick={handleClick}>{btnText}</button>
    )
}

export default Button