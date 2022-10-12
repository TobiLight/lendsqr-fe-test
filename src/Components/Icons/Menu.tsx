export const MenuIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            {...props}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M80 160h352M80 256h352M80 352h352"
            />
        </svg>
    )
}