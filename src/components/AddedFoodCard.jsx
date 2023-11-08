import { Link } from "react-router-dom";


const AddedFoodCard = ({food}) => {
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <h2 className="text-2xl font-semibold">{food?.Name}</h2>
                    </div>
                    
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={food?.Image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>Available: {food?.Quantity} Servings</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-400">Price: ${food?.Price}</h3>
                        </a>
                        <p className="text-sm dark:text-gray-400">Details: {food?.Description}</p>
                        <div className="flex justify-end">
                        <Link to={`/updatefood/${food?._id}`} className=" btn btn-neutral">Update Info</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedFoodCard;