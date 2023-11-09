import Swal from "sweetalert2";


const PurchaseCard = ({food, setbookings, bookings}) => {


    
    const handleDelete = _id => {

        console.log(_id);
    
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
          }).then((result) => {
            if (result.isConfirmed) {
           
                fetch(`https://savory-tavern-server.vercel.app/bookings/${_id}`, {
                    method: 'DELETE'
                }) 
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0){
                        Swal.fire(
                                'Deleted!',
                                'Car removed from Cart',
                                'success'
                              )
                            const remaining = bookings.filter(myCart => myCart._id !== _id);
                            setbookings(remaining);
                        
    
                        
                    }
    
    
                } )
    
    
    
            }
          })
    
    
        } 
   
    return (
        <div>
       <article
  className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
>
  <img
    alt="Office"
    src={food?.image}
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div
    className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
  >
    <div className="p-4 sm:p-6 ">
     

      
      
      <h3 className="mt-0.5 font-semibold text-2xl text-white">
         {food?.Name}
        </h3>
        <h3 className="mt-0.5 font-semibold text-2xl text-green-400">
         {food?.Price}
        </h3>
      

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
       Order Date: {food.Date}

      </p>
      
    <div className="flex justify-end items-end">
    <button onClick={() => handleDelete(food._id)} className="btn text-green-400 btn-ghost border-green-400 border-[3px] ">
        Cancel Order
      </button>
    </div>
    </div>
  </div>
</article>
        </div>
    );
};

export default PurchaseCard;