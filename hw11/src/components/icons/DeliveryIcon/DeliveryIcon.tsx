import React from 'react';
import {SVGProps} from "react"

const DeliveryIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="17px"
        fill="none"
    >
        <path fill="#2A254B" d="M11 8H2v1.5h9V8ZM8 4.25H.5v1.5H8v-1.5Z"/>
        <path
            fill="#2A254B"
            d="m21.44 8.455-2.25-5.25a.749.749 0 0 0-.69-.455h-2.25v-1.5A.75.75 0 0 0 15.5.5h-12V2h11.25v9.417a2.992 2.992 0 0 0-1.393 1.833H8.643a3 3 0 1 0 0 1.5h4.714a2.985 2.985 0 0 0 5.786 0h1.607a.75.75 0 0 0 .75-.75V8.75a.747.747 0 0 0-.06-.295ZM5.75 15.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm10.5-11.25h1.756L19.613 8H16.25V4.25Zm0 11.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM20 13.25h-.857A2.996 2.996 0 0 0 16.25 11V9.5H20v3.75Z"
        />
    </svg>
)

export default DeliveryIcon;