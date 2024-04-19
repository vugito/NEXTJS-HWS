import Image from "next/image";
import {Inter} from "next/font/google";
import SearchIcon from "@/components/icons/SearchIcon/SearchIcon";
import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon/ShoppingCartIcon";
import UserAvatarIcon from "@/components/icons/UserAvatarIcon/UserAvatarIcon";
import FeaturesSection from "@/components/sections/FeaturesSection/FeaturesSection";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col gap-10 items-center ${inter.className}`}
        >
            {/* Top Nav */}
            <div className="flex w-[100%] flex-col">
                <div className="flex justify-between w-[100%] p-7">
                    <div className="flex justify-start items-center w-1/3">
                        <SearchIcon/>
                    </div>
                    <div className="flex justify-center items-center w-1/3">
                        <span className="text-2xl font-normal text-black">Avion</span>
                    </div>
                    <div className="flex gap-5 justify-end items-center w-1/3">
                        <div>
                            <ShoppingCartIcon/>
                        </div>
                        <div>
                            <UserAvatarIcon/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="border-b-2 w-[95%]"></div>
                </div>
                <div className="flex justify-center w-[100%] p-7">
                    <div className="flex w-2/5 justify-between">
                        <span className="text-base font-normal text-[#726E8D]">Plant pots</span>
                        <span className="text-base font-normal text-[#726E8D]">Ceramics</span>
                        <span className="text-base font-normal text-[#726E8D]">Tables</span>
                        <span className="text-base font-normal text-[#726E8D]">Chairs</span>
                        <span className="text-base font-normal text-[#726E8D]">Crockery</span>
                        <span className="text-base font-normal text-[#726E8D]">Tableware</span>
                        <span className="text-base font-normal text-[#726E8D]">Cutlery</span>
                    </div>
                </div>
            </div>
            {/* Hero Blocks */}
            <div className="flex w-[100%] justify-center h-[584px]">
                <div className="flex justify-between bg-[#2A254B] items-center w-4/5">
                    <div className="flex flex-col h-full p-10">
                        <div className="flex flex-col justify-around h-full">
                            <span className="text-white font-normal text-[32px] h-1/4 w-2/4">The furniture brand for the future, with timeless designs</span>
                            <div className="flex items-center">
                                <button
                                    className="flex items-center justify-center h-1/4 px-8 py-8 bg-[#F9F9F926] text-white text-base font-normal">View
                                    collection
                                </button>
                            </div>
                            <span className="flex text-white h-2/4 items-end">A new era in eco friendly furniture with Avelon, the French luxury retail brand
                        with nice fonts, tasteful colors and a beautiful way to display things digitally
                        using modern web technologies.</span>
                        </div>
                    </div>
                    <Image src="/assets/images/hero-block-img.png" alt="hero-image" width={520} height={584}/>

                </div>
                {/*                <div className="flex w-[100%] flex-row">*/}
                {/*                    <div className="flex flex-col justify-around items-center bg-[#2a254b]">*/}
                {/*                        <span className="font-normal text-[32px]">The furniture brand for the future, with timeless designs</span>*/}
                {/*                        <button className="flex px-8 py-4 bg-[#df2626] text-black text-base font-normal">View*/}
                {/*                            collection*/}
                {/*                        </button>*/}
                {/*                        <span className="flex">A new era in eco friendly furniture with Avelon, the French luxury retail brand*/}
                {/*with nice fonts, tasteful colors and a beautiful way to display things digitally*/}
                {/*using modern web technologies.</span>*/}
                {/*                    </div>*/}
                {/*                    <div className="flex w-[520] h-[590]">*/}
                {/*                        <Image src="/assets/images/hero-block-img.png" alt="hero-image" width={520} height={584}/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
            </div>
            {/* Features */}
            <FeaturesSection/>
            {/* Listings */}
            <div className="flex flex-col justify-between w-[80%] px-10 py-[68px] h-[760px]">
                <div className="flex">
                    <span className="font-normal text-[32px]">New ceramics</span>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-5">
                        <img className="max-h-[375px]" src="/assets/images/hero-block-img.png" alt="the-dandy-chair"/>
                        <span>The Dandy Chair</span>
                        <span>$250</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img className="max-h-[375px]" src="/assets/images/vase-set.png"
                             alt="Rustic Vase Set"/>
                        <span>Rustic Vase Set</span>
                        <span>$155</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img className="max-h-[375px]" src="/assets/images/vase.png" alt="The Silky Vase"/>
                        <span>The Silky Vase</span>
                        <span>$125</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img className="max-h-[375px]" src="/assets/images/lucy-lamp.png"
                             alt="The Lucy Lamp"/>
                        <span>The Lucy Lamp</span>
                        <span>$399</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="flex text-black px-[32px] py-[16px] bg-[#f9f9f9]">View collection</button>
                </div>
            </div>
            {/* Listings */}
            <div className="flex flex-col justify-between w-[80%] px-10 py-[68px] h-[760px]">
                <div className="flex">
                    <span className="font-normal text-[32px]">Our popular products</span>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-5">
                        <img className="max-h-[375px]" src="/assets/images/listing-popular-sofa.png"
                             alt="the-dandy-chair"/>
                        {/*<Image src="/assets/images/listing-popular-sofa.png" alt="the-dandy-chair"/>*/}
                        <span>The Poplar suede sofa</span>
                        <span>$989</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img className="max-h-[375px]" src="/assets/images/hero-block-img.png" alt="the-dandy-chair"/>
                        <span>The Dandy Chair</span>
                        <span>$250</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img className="max-h-[375px]" src="/assets/images/listing-dandy-chair.png"
                             alt="the-dandy-chair"/>
                        <span>The Dandy chair</span>
                        <span>$250</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="flex text-black px-[32px] py-[16px] bg-[#f9f9f9]">View collection</button>
                </div>
            </div>
            {/* Email Sign Up */}
            <div className="flex w-[80%] h-[481px] justify-center items-center">
                <div className="flex flex-col gap-10 justify-center items-center w-4/5 h-4/5">
                    <div className="flex flex-col gap-10 justify-center items-center w-3/5">
                        <span className="text-black text-4xl font-normal">Join the club and get the benefits</span>
                        <span className="text-black text-[16px] font-normal w-3/5 text-center">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</span>
                    </div>
                    <div className="flex flex-row justify-center">
                        <input placeholder="your@email.com" className="px-[32px] py-[16px]" type="email"/>
                        <button className="flex text-white px-[32px] py-[16px] bg-[#2A254B]">Sign up</button>
                    </div>
                </div>
            </div>
            {/* Features */}
            <div className="flex w-[80%] h-[603px]">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col justify-around items-center">
                        <div className="flex flex-col justify-center gap-10 items-center w-3/5 h-3/5">
                            <span className="text-2xl font-normal">From a studio in London to a global brand with over 400 outlets</span>
                            <div>
                                <span className="text-base">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </span>
                                <span className="text-base">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="flex text-black px-[32px] py-[16px] bg-[#f9f9f9]">View collection
                            </button>
                        </div>
                    </div>
                    <img src="/assets/images/features-room.png" alt="Features room"/>
                    {/*<div className="flex w-1/2 justify-center">*/}
                    {/*</div>*/}
                </div>
            </div>
            {/* Footer */}
            <div className="flex flex-col justify-between items-center h-[380px] w-full bg-[#2A254B]">
                <div className="flex flex-row flex-1 w-4/5">
                    <div className="flex flex-row justify-around items-center w-1/2">
                        <div>
                            <span className="text-base font-normal text-white">Menu</span>
                            <ul className="flex flex-col gap-5">
                                <li className="text-[14px] font-normal text-white">New arrivals</li>
                                <li className="text-[14px] font-normal text-white">Best sellers</li>
                                <li className="text-[14px] font-normal text-white">Recently viewed</li>
                                <li className="text-[14px] font-normal text-white">Popular this week</li>
                                <li className="text-[14px] font-normal text-white">All products</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-base font-normal text-white">Categories</span>
                            <ul className="flex flex-col gap-5">
                                <li className="text-[14px] font-normal text-white">Crockery</li>
                                <li className="text-[14px] font-normal text-white">Furniture</li>
                                <li className="text-[14px] font-normal text-white">Homeware</li>
                                <li className="text-[14px] font-normal text-white">Plant pots</li>
                                <li className="text-[14px] font-normal text-white">Chairs</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-base font-normal text-white">Our company</span>
                            <ul className="flex flex-col gap-5">
                                <li className="text-[14px] font-normal text-white">About us</li>
                                <li className="text-[14px] font-normal text-white">Vacancies</li>
                                <li className="text-[14px] font-normal text-white">Contact us</li>
                                <li className="text-[14px] font-normal text-white">Privacy</li>
                                <li className="text-[14px] font-normal text-white">Returns policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center w-1/2">
                        <div className="flex w-[80%] px-[32px]">
                            <span className="text-base text-white">Join our mailing list</span>
                        </div>
                        <div className="flex w-[80%] flex-row justify-center">
                            <input placeholder="your@email.com" className="w-3/4 px-[32px] py-[16px] bg-[#FFFFFF26]"
                                   type="email"/>
                            <button className="flex text-white px-[32px] py-[16px] bg-[#2A254B]">Sign up</button>
                        </div>

                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-4/5 p-10">
                    <div className="flex">
                        <span className="text-white">Copyright 2022 Avion LTD</span>
                    </div>
                    <div className="flex">
                        <img className="h-[25px]" src="/assets/images/img.png" alt="sosial" />
                    </div>
                </div>
            </div>
        </main>
    );
    }
