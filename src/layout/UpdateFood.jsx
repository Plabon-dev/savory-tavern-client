import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const UpdateFood = () => {

    const { user } = useContext(AuthContext);
    const food = useLoaderData();
    // console.log(food);
    const handleUpdateFood = event => {
        event.preventDefault();
        const form = event.target;
        const Name = form.name.value;
        const Category = form.category.value;
        const Image = form.image.value;
        const Origin = form.origin.value;
        const Price = form.price.value;
        const Quantity = form.quantity.value;
        const AddedBy = form.addedBy.value;
        const Description = form.description.value;

        const updatedFood = {Name, Category, Image, Origin, Price, Quantity, AddedBy, Description};
        console.log(updatedFood);

        // send data to the server
        fetch(`http://localhost:5000/allfoods/${food?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Food Information has been updated',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })

                
            }
          

        })


        


    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/9WLpQ90/wp12956092-restaurant-4k-wallpapers.jpg)' }}>

                <div className="hero-overlay "></div>

                <div className="hero-content text-center text-neutral-content flex flex-col">
                    <h2 className="text-4xl text-[#C4FCF0] font-bold mt-6">Update {food?.Name} Information</h2>
                    <form onSubmit={handleUpdateFood} className="card-body">
                        <div className="grid grid-cols-2 gap-5">
                            {/* name */}
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Food Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered text-violet-950 " defaultValue={food?.Name} />
                            </div>
                            {/* Category */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Food Category</span>
                                </label>
                                <input type="text" placeholder="Food Category" name="category" className="input input-bordered text-violet-950" defaultValue={food?.Category} />
                            </div>
                            {/* Image */}
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text font-semibold text-white">Image URL</span>
                                </label>

                                <textarea name="image" className="textarea textarea-bordered text-violet-950" placeholder="Image URL" defaultValue={food?.Image}></textarea>
                        </div>
                        {/* Origin */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#C4FCF0] font-semibold">Origin</span>
                            </label>
                            <input type="text" placeholder="Origin" name="origin" className="input input-bordered text-violet-950" defaultValue={food?.Origin } />
                        </div>
                        {/* price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#C4FCF0] font-semibold">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered text-violet-950" defaultValue={food?.Price}/>
                        </div>
                        {/* Quantity */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#C4FCF0] font-semibold">Quantity</span>
                            </label>
                            <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered text-violet-950" defaultValue={food?.Quantity}/>
                        </div>
                        {/* Added By */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#C4FCF0] font-semibold">Added By</span>
                            </label>
                            <input type="text" placeholder="Added By" name="addedBy" className="input input-bordered text-black font-bold" defaultValue={user?.email} disabled />
                        </div>
                        {/* description */}

                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold text-white">Description</span>
                            </label>
                            <textarea name="description" className="textarea textarea-bordered text-violet-950" placeholder="Description" defaultValue={food?.Description}></textarea>
                        </div>


                </div>
                <div className="form-control mt-6">

                    <input type="submit" className="btn bg-[#aa454a] text-white hover:text-[#aa454a]" value="Update food Info" />
                </div>
            </form>
        </div>
            </div >
        </div >
    );
};

export default UpdateFood;