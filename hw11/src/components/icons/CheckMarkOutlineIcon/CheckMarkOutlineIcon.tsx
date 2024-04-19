import React from 'react';
import {SVGProps} from "react"

const CheckMarkOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        fill="none"
    >
        <path
            fill="#2A254B"
            d="m9.5 15.06-3.75-3.75 1.06-1.06 2.69 2.69 5.689-5.69 1.061 1.061-6.75 6.75Z"
        />
        <path
            fill="#2A254B"
            d="M11 .5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21ZM11 20a9 9 0 1 1 0-17.999A9 9 0 0 1 11 20Z"
        />
    </svg>
)

export default CheckMarkOutlineIcon;