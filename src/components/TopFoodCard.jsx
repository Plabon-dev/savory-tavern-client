import { Link } from "react-router-dom";


const TopFoodCard = ({food}) => {
    return (
        <div>
           <div className="group relative block bg-black">
  <img
    alt="Developer"
    src={food?.image}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
  

    <p className="text-3xl font-bold text-white sm:text-2xl">{food?.Name}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex justify-between"
      >
        <p className="text-2xl font-semibold text-green-500">
         {food?.Price}</p>
       <div className="flex justify-end">
       <Link ><button className='btn text-green-400 border-green-500 hover:text-white hover:bg-green-500 jus  btn-ghost'>See Details</button></Link>
       </div>
         
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default TopFoodCard;