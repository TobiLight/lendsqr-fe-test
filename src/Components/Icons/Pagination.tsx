import React from "react";

export const NavigationPreviousIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg{...props} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
                <path d="M10.0061 11.0573C10.8472 11.8984 9.54344 13.1595 8.745 12.3184L3.99424 7.56759C3.61581 7.23127 3.61581 6.64282 3.99424 6.3065L8.61858 1.64002C9.45967 0.841036 10.7208 2.10267 9.87967 2.94322L5.8859 6.937L10.0061 11.0573Z" fill="#213F7D" />
            </g>
        </svg>
    )
}


export const NavigationNextIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg {...props} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.99391 2.94274C3.15281 2.10165 4.45656 0.840502 5.255 1.68165L10.0058 6.43241C10.3842 6.76873 10.3842 7.35718 10.0058 7.6935L5.38142 12.36C4.54033 13.159 3.27918 11.8973 4.12033 11.0568L8.1141 7.063L3.99391 2.94274Z" fill="#213F7D" />
        </svg>
    )
}