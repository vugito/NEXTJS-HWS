import React from 'react';
import {SVGProps} from "react"

const SproutIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={22}
        fill="none"
    >
        <path
            fill="#2A254B"
            d="M14.75.5a8.257 8.257 0 0 0-7.684 5.268A5.245 5.245 0 0 0 2.75 3.5H.5v2.25A5.256 5.256 0 0 0 5.75 11h.75v6.787a7.442 7.442 0 0 0-4.553 2.16l1.06 1.06a6.001 6.001 0 0 1 9.232.91l1.246-.834A7.486 7.486 0 0 0 8 17.797V11h.75A8.26 8.26 0 0 0 17 2.75V.5h-2.25Zm-9 9A3.754 3.754 0 0 1 2 5.75V5h.75A3.754 3.754 0 0 1 6.5 8.75v.75h-.75Zm9.75-6.75A6.758 6.758 0 0 1 8.75 9.5H8v-.75A6.758 6.758 0 0 1 14.75 2h.75v.75Z"
        />
    </svg>
)

export default SproutIcon;