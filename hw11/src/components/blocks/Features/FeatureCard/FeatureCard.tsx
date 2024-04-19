import React from 'react';
import DeliveryIcon from "@/components/icons/DeliveryIcon/DeliveryIcon";

interface Props {
    icon?: React.ReactNode;
    title?: string;
    text?: string
}


const FeatureCard = ({icon,title,text}:Props) => {

    return (
        <div className="flex justify-center p-10 items-center w-[305px] h-[244px]">
            <div className="flex flex-col gap-4">
                {icon}
                <span className="text-xl text-[#2A254B] font-normal">{title}</span>
                <span className="text-base text-[#2A254B] font-normal">{text}</span>
            </div>
        </div>
    );
};

export default FeatureCard;