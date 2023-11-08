import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import AddedFoodCard from "../components/AddedFoodCard";


const MyAddedFood = () => {
    const {user} = useContext(AuthContext);
    const result = useLoaderData();
    console.log(result);
    console.log(user?.email);
    
    const addedFood = result.filter(food => food?.AddedBy == user?.email);
    console.log(addedFood);

    return (
        <div>
            <h2 className="text-3xl font-semibold text-center mt-14">My Added Food Items </h2>
            <div className="grid grid-cols-1 place-items-center gap-12 mt-10 mb-20">
            {
                    addedFood.map(food => <AddedFoodCard
                        key={food._id}
                        food={food}
                    ></AddedFoodCard>)
                }
            </div>
        </div>
    );
};

export default MyAddedFood;