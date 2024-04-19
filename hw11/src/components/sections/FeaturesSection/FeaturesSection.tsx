import React from 'react';
import styles from "./FeaturesSection.module.css";
import FeatureCard from "@/components/blocks/Features/FeatureCard/FeatureCard";
import DeliveryIcon from "@/components/icons/DeliveryIcon/DeliveryIcon";
import CheckMarkOutlineIcon from "@/components/icons/CheckMarkOutlineIcon/CheckMarkOutlineIcon";
import PurchaseIcon from "@/components/icons/PurchaseIcon/PurchaseIcon";
import SproutIcon from "@/components/icons/SproutIcon/SproutIcon";


const FeaturesSection = () => {
    return (
        <div className="flex flex-col justify-around items-center w-full h-[355px]">
            <div>
                <span className="text-2xl text-[#2A254B] font-normal">What makes our brand different</span>
            </div>
            <div className="flex flex-row gap-10">
                <FeatureCard icon={<DeliveryIcon/>}
                             title="Next day as standard"
                             text="Order before 3pm and get your order the next day as standard"/>
                <FeatureCard icon={<CheckMarkOutlineIcon/>}
                             title="Made by true artisans"
                             text="Handmade crafted goods made with real passion and craftmanship"/>
                <FeatureCard icon={<PurchaseIcon/>}
                             title="Unbeatable prices"
                             text="For our materials and quality you won’t find better prices anywhere"/>
                <FeatureCard icon={<SproutIcon/>}
                             title="Recycled packaging"
                             text="We use 100% recycled packaging to ensure our footprint is manageable"/>
            </div>
        </div>
    );
};

export default FeaturesSection;