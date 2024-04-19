import React from 'react';
import {SVGProps} from "react"

const PurchaseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={16}
        fill="none"
    >
        <path
            fill="#2A254B"
            d="M20 .5H2A1.5 1.5 0 0 0 .5 2v12A1.5 1.5 0 0 0 2 15.5h18a1.5 1.5 0 0 0 1.5-1.5V2A1.5 1.5 0 0 0 20 .5ZM20 2v2.25H2V2h18ZM2 14V5.75h18V14H2Z"
        />
        <path fill="#2A254B" d="M11 11H3.5v1.5H11V11Z"/>
    </svg>
)

export default PurchaseIcon;