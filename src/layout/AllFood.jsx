import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from './../provider/AuthProvider';
import FoodCard from "../components/FoodCard";
import PageTitle from "../components/PageTitle";



const AllFood = () => {
    const [page, setPage] = useState(0);
    const { user } = useContext(AuthContext);
    const { data: { result, foodCount } } = useQuery({
        queryKey: ["allFood", page],
        queryFn: () =>
            fetch(`https://savory-tavern-server.vercel.app/allfood?page=${page}`).then((response) => response.json()),
        initialData: { result: [], foodCount: 0 },
    });
    const totalPages = Math.ceil(foodCount / 9);
    const pages = [...new Array(totalPages).fill(0)]

    console.log(totalPages);
    console.log(page);

    const [search, setSearch] = useState(''); 
    console.log(search);


    return (
        <div>
            <PageTitle title='Savory Tavern | All Food Items'></PageTitle>
            <div className="my-20 text-center">
                <h2 className="text-4xl">Discover the World of Flavor at Savory Tavern's Food Items</h2>

            </div>

            <div className="form-control mb-14">
                
                <input onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Search food items" className="input input-bordered w-10/12 mx-auto" />
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 content-center  w-11/12 mx-auto mb-20">
                {
                    result.filter((food)=> {
                        return search.toLowerCase() === '' ? food : food.Name.toLowerCase().includes(search); 
                    }).map(food => <FoodCard
                        key={food._id}
                        food={food}
                    ></FoodCard>)
                }
            </div>
            <div className="flex justify-center space-x-1 dark:text-gray-100 mb-10">
                <button onClick={() => setPage(Math.max(0, page - 1))} title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                {pages.map((item, index) => <button onClick={() => setPage(index)} key={item} className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded ${page == index ? "bg-[#100935e7] text-white" : "text-[#100935e7]"}  shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400`}>{index + 1}</button>)}

                <button onClick={() => { setPage(Math.min(totalPages - 1, page + 1)) }} title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default AllFood;