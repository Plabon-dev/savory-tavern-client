import { useEffect } from "react";


const Features = () => {

    useEffect(()=>{
        let valueDisplay = document.querySelectorAll(".num");
        let interval = 8000;
        valueDisplay.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if(startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        })
    }, [])



    return (
        <div>
            <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                    <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                    <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                    <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p  className="text-3xl font-semibold"><span className="num" data-val="50">00</span>,000+</p>
                                <p className="capitalize">Online Orders Completed</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                    <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                    <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                    <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                    <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold"><span className="num" data-val="1000">0000</span>+</p>
                                <p className="capitalize">Happy Occasions Catered</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                    <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                                    <rect width="32" height="32" x="80" y="264"></rect>
                                    <rect width="32" height="32" x="240" y="128"></rect>
                                    <rect width="32" height="32" x="136" y="168"></rect>
                                    <rect width="32" height="32" x="400" y="264"></rect>
                                    <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold"><span className="num" data-val="30">0</span> Min</p>
                                <p className="capitalize">Average Delivery Time</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                    <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold"><span className="num" data-val="10">0</span>+</p>
                                <p className="capitalize">Years of Culinary Excellence</p>
                            </div>
                        </div>
                    </div>
                </section>
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 mt-10">
                <div>
                    <h2 className="text-4xl font-bold text-center mb-10">What Makes Us Special</h2>
                </div>
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://r4.wallpaperflare.com/wallpaper/469/114/499/food-meal-dinner-plate-wallpaper-38e60d08a000bca8a02cf14e78d2a45a.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Exceptional Culinary Craftsmanship</h3>
                            <p className="my-6 dark:text-gray-400">At Savory Tavern, we take pride in the art of culinary craftsmanship. Our dedicated chefs meticulously prepare each dish, using only the finest ingredients to create flavors that delight your senses. We believe that exceptional cuisine is at the heart of every memorable dining experience.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://c1.wallpaperflare.com/path/686/544/876/food-board-restaurant-dinner-2641f23b0f68f20a10809d96647c538f.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Farm-to-Table Freshness</h3>
                            <p className="my-6 dark:text-gray-400">We are committed to sourcing the freshest, locally sourced ingredients for our dishes. Our farm-to-table approach ensures that you enjoy the natural flavors of each season, while supporting local farmers and sustainable practices.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://r4.wallpaperflare.com/wallpaper/514/873/296/cocktails-cocktail-drinking-glass-wallpaper-4beea125f71342cac73f42f06c3298ab.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Crafted Cocktails</h3>
                            <p className="my-6 dark:text-gray-400">Enhance your dining experience with our crafted cocktails. Our mixologists create unique and flavorful drinks that perfectly complement your meal. Cheers to a memorable evening!</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://c0.wallpaperflare.com/path/68/655/750/dumplings-platter-a78cb772e10ce661acc787c3f77c1a43.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Curated Menus for Every Occasion</h3>
                            <p className="my-6 dark:text-gray-400">Whether it's a cozy dinner for two, a family feast, or a virtual gathering with friends, our curated menus cater to every occasion. Explore our diverse offerings that make your dining experience special, no matter where you are</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://c1.wallpaperflare.com/path/868/173/93/tempeh-salad-vegan-food-f25f7fbec9e690356bb569b4858eeed4.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                            <h3 className="text-3xl font-bold">Special Dietary Considerations</h3>
                            <p className="my-6 dark:text-gray-400">We understand that dietary preferences vary, which is why our online menu includes a variety of options for vegetarian, vegan, and special dietary needs. Everyone can savor the flavors of Savory Tavern.</p>

                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default Features;