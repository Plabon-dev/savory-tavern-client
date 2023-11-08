import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TopFoodCard from "./TopFoodCard";



const TopFood = () => {

    const foods = useLoaderData();
    console.log(foods);
    const sortedFoods = foods.sort((a, b) => parseFloat(b.quantity) - parseFloat(a.quantity)).slice(0, 6);

    console.log(sortedFoods);


    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-20">Top Selling Foods</h2>

           <div className="grid grid-cols-1 place-content-center md:grid-cols-2 w-10/12 mx-auto gap-10 my-16">
           {
                sortedFoods?.map(food =><TopFoodCard 
                    key={food._id} 
                   food={food} 
               ></TopFoodCard>)
            }
           </div>

        </div>
    );
};

export default TopFood;