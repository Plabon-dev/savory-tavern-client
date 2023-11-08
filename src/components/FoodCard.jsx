
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const {Name, _id , Image, Category, Price, Quantity} = food;
    return (
        <div className="w-full mx-auto  rounded-xl">
            <a href="#" className="group relative block bg-black">
                <img
                    alt="Food"
                    src={Image}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                   

                    <p className="text-xl font-bold  text-white  sm:text-3xl">{Name}</p>
                    <p className="text-white">Category: {Category}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex justify-between"
                        >
                            <p className="text-3xl font-bold text-green-400">
                                Price: ${Price}  
                            </p>
                            <Link to={`/allfood/${_id}`}><button className='btn text-green-400 border-green-500 hover:text-white hover:bg-green-500  btn-ghost'>See Details</button></Link>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default FoodCard;