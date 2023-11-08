import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const FoodDetails = () => {
    const singleFood = useLoaderData();
    const { user } = useContext(AuthContext);
    const { Name, Price, Origin, Category, Description, Image, Quantity, _id } = singleFood;

    return (
        <div>
            <h2 className="text-xl md:text-4xl font-bold text-center my-10">Delve into the Exquisite Culinary World of {Name}</h2>


            {/* SIngleCard */}


            <section
                className="flex flex-col-reverse md:flex-row overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center mb-20 shadow-xl"
            >
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div
                        className="mx-auto max-w-xl text-center  space-y-8 ltr:sm:text-left rtl:sm:text-right"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 md:text-3xl">
                            {Name}
                        </h2>

                        <p className=" text-gray-500 md:mt-4 text-xs md:text-base text-start">
                            {Description}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="text-start">
                                <p>Category: {Category}</p>
                                <p>Origin: {Origin}</p>
                                <p>Quantity: {Quantity}</p>
                            </div>
                            <p className="justify-between text-end text-2xl text-emerald-500 font-semibold">Price: ${Price}</p>
                        </div>


                        <div className="mt-4 md:mt-8">
                        <div>
                                    <Link to={`/foodpurchase/${_id}`} className="btn-ghost btn-block mt-10 md:mt-16 inline-block rounded btn px-12 py-3 text-sm font-medium text-emerald-600 border-emerald-600 border-[2px] transition hover:bg-emerald-700 focus:outline-none focus:ring hover:text-white focus:ring-yellow-400"
                                   >
                                       Add to Cart
                                   </Link>
                                  </div>

                            
                        </div>
                    </div>
                </div>

                <img
                    alt="Food"
                    src={Image}
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>

        </div>
    );
};

export default FoodDetails;