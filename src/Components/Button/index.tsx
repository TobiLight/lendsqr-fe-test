import { ReactNode } from "react"

type Props = {
    btnText: string | ReactNode
    type: "button" | "submit" | "reset" | undefined
    handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    children?: ReactNode
} & Partial<HTMLButtonElement>

const Button = ({ btnText, type, id, name, className, handleClick, children }: Props) => {
    return (
        <button type={type} id={id} name={name} className={className} onClick={handleClick}>
            {btnText}
        </button>
    )
}

export default Button