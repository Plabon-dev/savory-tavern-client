import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "../components/PageTitle";


const FoodPurchase = () => {
    const { user } = useContext(AuthContext);
    const food = useLoaderData();
    const { Quantity, AddedBy } = food;
    console.log(typeof(Quantity), Quantity);

    useEffect(() => {
        const quantityInput = document.querySelector('input[name="quantity"]');
        if (quantityInput) {
            quantityInput.setAttribute('max', Quantity);
        }
    }, [Quantity]);

    // fb
    const options = Array.from({ length: Quantity }, (_, index) => (
        <option key={index} className="text-black">{index + 1}</option>
      ));
      




    const handlePurchaseFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const Name = form.name.value;
        const Price = form.price.value;
        const quantity = form.quantity.value;
        const BuyerName = form.buyerName.value;
        const BuyerEmail = form.buyerEmail.value;
        const Date = form.date.value;
        const image = form.image.value;
        const booking = {
            BuyerName: BuyerName,
            email: BuyerEmail,
            quantity: quantity,
            Price: Price,
            Name: Name,
            Date: Date,
            image: image
        }
        console.log(booking);



        fetch('https://savory-tavern-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'Food Added to Cart!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }

            })

    }





    return (
        <div>
            <PageTitle title='Savory Tavern | Purchase'></PageTitle>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/9WLpQ90/wp12956092-restaurant-4k-wallpapers.jpg)' }}>

                    <div className="hero-overlay "></div>

                    <div className="hero-content text-center text-neutral-content flex flex-col">
                        <h2 className="text-4xl text-[#C4FCF0] font-bold mt-6">Purchase {food?.Name} </h2>
                        <form onSubmit={handlePurchaseFood} className="card-body">
                            <div className="grid grid-cols-2 gap-5">
                                {/* name */}
                                <div className="form-control col-span-2 md:col-span-1">

                                    <label className="label">
                                        <span className="label-text text-[#C4FCF0] font-semibold">Food Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name="name" className="input input-bordered text-violet-950 " defaultValue={food?.Name} />
                                </div>
                                {/* Quantity */}
                                {/* <div className="form-control col-span-2 md:col-span-1">
                            <label className="label">
                                <span className="label-text text-[#C4FCF0] font-semibold">Quantity (Max Quantity {Quantity})</span>
                            </label>
                            <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered text-violet-950" />
                        </div> */}
                                <div className="form-control col-span-2 md:col-span-1">
                                    <label className="label">
                                        <span className="label-text text-[#C4FCF0] font-semibold">Quantity (Max Quantity {Quantity})</span>
                                    </label>
                                    <select name="quantity" className="select text-black select-bordered w-full max-w-xs">
                                        
                                         {options}
                                        
                                        
                                    </select>
                                </div>


                                {/* price */}
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text text-[#C4FCF0] font-semibold">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name="price" className="input input-bordered text-violet-950 font-semibold" defaultValue={'$' + food?.Price} />
                                </div>

                                {/* Buyer */}
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text text-[#C4FCF0] font-semibold">Buyer Name</span>
                                    </label>
                                    <input type="text" placeholder="Buyer Name" name="buyerName" className="input input-bordered text-black font-bold" defaultValue={user?.displayName} disabled />
                                </div>
                                {/* Buyer Email */}
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text text-[#C4FCF0] font-semibold">Food Image</span>
                                    </label>
                                    <input type="text" placeholder="Food Image" name="image" className="input  input-bordered text-black font-bold" defaultValue={food?.Image} disabled />
                                </div>
                                {/* Email */}
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text text-[#C4FCF0] font-semibold">Buyer Email</span>
                                    </label>
                                    <input type="text" placeholder="Buyer Email" name="buyerEmail" className="input  input-bordered text-black font-bold" defaultValue={user?.email} disabled />
                                </div>
                                {/* Date*/}
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text text-[#C4FCF0] font-semibold">Purchase Date</span>
                                    </label>
                                    <input type="date" placeholder="Date" name="date" className="input  input-bordered text-violet-950" />
                                </div>


                            </div>
                            <div className="form-control mt-6">


                                {
                                    user?.email !== AddedBy ?


                                        <div>
                                            <input type="submit" className="btn btn-block bg-emerald-600 text-white hover:text-[#aa454a]" value="Purchase" />
                                        </div>
                                        :
                                        <div>
                                            <Link onClick={() => document.getElementById('my_modal_5').showModal()}
                                                href="#"
                                                className="btn-error btn-block mt-10 md:mt-16 inline-block rounded btn px-12 py-3 text-sm font-medium text-gray-100 border-emerald-600 border-[2px] transition  focus:outline-none focus:ring hover:text-white focus:ring-yellow-400"
                                            >
                                                Cannot Add to Cart
                                            </Link>
                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box max-h-full">
                                                    <img src="https://www.desicomments.com/wp-content/uploads/2022/03/sorry-pics-for-love5.jpg" alt="" />
                                                    <h3 className="font-bold text-xl mt-5 text-red-500">This food item cannot be added to Cart!</h3>

                                                    <div className="modal-action">
                                                        <form method="dialog">

                                                            <button className="btn">Close</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </div>

                                }
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default FoodPurchase;