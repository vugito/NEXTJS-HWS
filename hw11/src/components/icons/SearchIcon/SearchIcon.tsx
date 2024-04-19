import React from 'react';
import {SVGProps} from "react"

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="14px"
        height="14px"
        fill="none"
    >
        <path
            fill="#fff"
            d="M0 0h16v16H0z"
            style={{
                mixBlendMode: "multiply",
            }}
        />
        <path
            fill="#2A254B"
            d="m14.5 13.793-3.776-3.776a5.509 5.509 0 1 0-.707.707l3.776 3.776.707-.707ZM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
        />
    </svg>
)

export default SearchIcon;