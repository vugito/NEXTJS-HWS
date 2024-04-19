import React from 'react';
import {SVGProps} from "react"

const ShoppingCartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="15px"
        height="15px"
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
            d="M5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 3.5H2.91L2.5 1.4A.5.5 0 0 0 2 1H0v1h1.59l1.91 9.6a.5.5 0 0 0 .5.4h9v-1H4.41L4 9h9a.5.5 0 0 0 .5-.39l1-4.5a.5.5 0 0 0-.5-.61ZM12.6 8H3.81l-.7-3.5h10.265L12.6 8Z"
        />
    </svg>
)

export default ShoppingCartIcon;