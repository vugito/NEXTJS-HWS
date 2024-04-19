import React from 'react';
import {SVGProps} from "react"

const UserAvatarIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        />
        <path
            fill="#2A254B"
            d="M8 1a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7ZM5 13.188V12.5A1.502 1.502 0 0 1 6.5 11h3a1.502 1.502 0 0 1 1.5 1.5v.688a5.949 5.949 0 0 1-6 0Zm6.996-.725A2.5 2.5 0 0 0 9.5 10h-3a2.5 2.5 0 0 0-2.496 2.463 6 6 0 1 1 7.992 0Z"
        />
    </svg>
)

export default UserAvatarIcon;