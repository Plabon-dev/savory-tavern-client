import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Qkhqz7v/wallpaperflare-com-wallpaper.jpg)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover the Charm of <span className="text-red-500">Savory Tavern</span></h1>
                        <p className="mb-5 font-semibold"><span className="text-xl font-bold">Where Flavors and Ambiance Come Together</span><br />   Immerse yourself in the rustic charm of our establishment, where the harmony of delectable cuisine and cozy surroundings ensures an extraordinary dining journey</p>
                        <Link to='/allfood'><button className="btn btn-error">See All Food items</button></Link>
                    </div>
                </div>
            </div>

                

            {/* <section
                className="relative  bg-[url(https://i.ibb.co/Qkhqz7v/wallpaperflare-com-wallpaper.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32  sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Discover the Charm of 

                            <strong className="block font-extrabold text-rose-700">
                            Savory Tavern
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        <span className="text-xl font-bold">Where Flavors and Ambiance Come Together</span><br />   Immerse yourself in the rustic charm of our establishment, where the harmony of delectable cuisine and cozy surroundings ensures an extraordinary dining journey
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                           
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Banner;