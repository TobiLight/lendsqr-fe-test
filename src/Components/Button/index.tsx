type Props = {
    btnText: string
    type: "button" | "submit" | "reset" | undefined
} & Partial<HTMLButtonElement>

const Button = ({ btnText, type, id, name, className }: Props) => {
    return (
        <button type={type} id={id} name={name} className={className}>{btnText}</button>
    )
}

export default Button