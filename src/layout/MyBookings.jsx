import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PurchaseCard from './../components/PurchaseCard';
import PageTitle from "../components/PageTitle";

const MyBookings = () => {

    const { user } = useContext(AuthContext);
    const email = user?.email ;
    const [bookings, setbookings] = useState([])
    console.log(email);

    const url = `https://savory-tavern-server.vercel.app/bookings?email=${email}`;
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setbookings(data))
    }, []);

    
    
    return (
        <div>
            <PageTitle title='Savory Tavern | My Order'></PageTitle>
            <h2 className="text-3xl font-semibold text-center mt-16">
                My Orders
            </h2>
            <div className="my-20 grid grid-cols-1 md:grid-cols-2 place-content-center gap-8 w-11/12 mx-auto">
                {
                    bookings.map(food => <PurchaseCard
                        key={food._id}
                        food={food}
                        bookings={bookings}
                        setbookings={setbookings}
                    ></PurchaseCard>)
                }
            </div>
        </div>
    );
};

export default MyBookings;