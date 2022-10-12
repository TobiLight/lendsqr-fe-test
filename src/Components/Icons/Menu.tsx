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

export const MenuVerticalIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg {...props} viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.99992 4.1111C2.92214 4.1111 3.66658 3.36666 3.66658 2.44444C3.66658 1.52222 2.92214 0.777771 1.99992 0.777771C1.0777 0.777771 0.333252 1.52222 0.333252 2.44444C0.333252 3.36666 1.0777 4.1111 1.99992 4.1111ZM1.99992 6.33333C1.0777 6.33333 0.333252 7.07777 0.333252 7.99999C0.333252 8.92221 1.0777 9.66666 1.99992 9.66666C2.92214 9.66666 3.66658 8.92221 3.66658 7.99999C3.66658 7.07777 2.92214 6.33333 1.99992 6.33333ZM1.99992 11.8889C1.0777 11.8889 0.333252 12.6333 0.333252 13.5555C0.333252 14.4778 1.0777 15.2222 1.99992 15.2222C2.92214 15.2222 3.66658 14.4778 3.66658 13.5555C3.66658 12.6333 2.92214 11.8889 1.99992 11.8889Z" fill="#545F7D" />
        </svg>
    )
}